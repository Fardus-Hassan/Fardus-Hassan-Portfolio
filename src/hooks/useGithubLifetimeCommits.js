import { useEffect, useState, useRef } from "react";

const useGithubLifetimeCommits = (username, token) => {
  const [totalCommits, setTotalCommits] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortRef = useRef(null);

  useEffect(() => {
    if (!username || !token) {
      setError("GitHub username or token missing");
      return;
    }

    abortRef.current = new AbortController();
    const signal = abortRef.current.signal;

    const fetchAll = async () => {
      setLoading(true);
      setError(null);
      setTotalCommits(0);

      try {
        let repos = [];
        let page = 1;


        while (true) {
          const url = `https://api.github.com/user/repos?per_page=100&page=${page}`;
          const res = await fetch(url, {
            headers: { Authorization: `Bearer ${token}` },
            signal,
          });

          if (res.status === 401) {
            throw new Error("Unauthorized. Check your token and scopes.");
          }

          if (!res.ok) {
            const txt = await res.text();
            throw new Error(`Failed to fetch repos: ${res.status} ${txt}`);
          }

          const data = await res.json();
          if (!Array.isArray(data) || data.length === 0) break;

          repos = repos.concat(data);
          if (data.length < 100) break; 
          page++;
        }

        let total = 0;

        for (const repo of repos) {


          const commitsUrl = `https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits?author=${encodeURIComponent(
            username
          )}&per_page=1`;

          try {
            const commitRes = await fetch(commitsUrl, {
              headers: { Authorization: `Bearer ${token}` },
              signal,
            });

            if (!commitRes.ok) {

              console.warn(
                `Failed to fetch commits for ${repo.full_name}: ${commitRes.status}`
              );
              continue;
            }

            const link = commitRes.headers.get("link");
            if (link) {
              const match = link.match(/&page=(\d+)>; rel="last"/);
              if (match && match[1]) {
                total += parseInt(match[1], 10);
                continue;
              }
            }

            const commitsJson = await commitRes.json();
            if (Array.isArray(commitsJson)) total += commitsJson.length;
          } catch (innerErr) {
            if (innerErr.name === "AbortError") throw innerErr;
            console.warn(`Error counting commits in ${repo.full_name}:`, innerErr);
          }
        }

        setTotalCommits(total);
      } catch (err) {
        if (err.name === "AbortError") {
        } else {
          console.error("useGithubLifetimeCommits error:", err);
          setError(err.message || "Unknown error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAll();

    return () => {
      if (abortRef.current) abortRef.current.abort();
    };
  }, [username, token]);

  return { totalCommits, loading, error };
};

export default useGithubLifetimeCommits;