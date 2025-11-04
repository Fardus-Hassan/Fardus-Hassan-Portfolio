// src/hooks/useGithubLifetimeCommits.js
import { useEffect, useState, useRef } from "react";

const CACHE_KEY = "github_lifetime_commits";
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

const useGithubLifetimeCommits = (username, token) => {
  const [totalCommits, setTotalCommits] = useState(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { value, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_DURATION) return value;
    }
    return 0;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortRef = useRef(null);
  const hasFetched = useRef(false); // Critical: Prevent duplicate

  useEffect(() => {
    // Prevent multiple runs
    if (hasFetched.current || localStorage.getItem(CACHE_KEY)) return;
    if (!username || !token) {
      setError("Missing credentials");
      return;
    }

    hasFetched.current = true;
    abortRef.current = new AbortController();
    const signal = abortRef.current.signal;

    const fetchCommits = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch all repos
        let repos = [];
        let page = 1;
        while (true) {
          const res = await fetch(
            `https://api.github.com/user/repos?per_page=100&page=${page}`,
            { headers: { Authorization: `Bearer ${token}` }, signal }
          );
          if (!res.ok) throw new Error(`Repos: ${res.status}`);
          const data = await res.json();
          if (!data.length) break;
          repos.push(...data);
          if (data.length < 100) break;
          page++;
        }

        let total = 0;
        for (const repo of repos) {
          const url = `https://api.github.com/repos/${repo.full_name}/commits?author=${encodeURIComponent(username)}&per_page=1`;
          try {
            const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` }, signal });
            if (!res.ok) continue;
            const link = res.headers.get("link");
            if (link && link.includes('rel="last"')) {
              const match = link.match(/&page=(\d+)>; rel="last"/);
              if (match) total += parseInt(match[1], 10);
            } else {
              const data = await res.json();
              if (Array.isArray(data)) total += data.length;
            }
          } catch (err) {
            if (err.name !== "AbortError") console.warn(`Skip: ${repo.full_name}`);
          }
        }

        setTotalCommits(total);
        localStorage.setItem(CACHE_KEY, JSON.stringify({ value: total, timestamp: Date.now() }));
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();

    return () => {
      hasFetched.current = false;
      if (abortRef.current) abortRef.current.abort();
    };
  }, [username, token]);

  return { totalCommits, loading, error };
};

export default useGithubLifetimeCommits;