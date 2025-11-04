// src/components/About.jsx
import React, { useMemo, useRef, useState, useEffect } from "react";
import aboutme from "../../assets/IMG_20240705_012920.png";
import CountUp from "react-countup";
import useGithubLifetimeCommits from "../../hooks/useGithubLifetimeCommits";

const About = () => {
  // Memoize env vars + options
  const username = useMemo(() => import.meta.env.VITE_GITHUB_USERNAME || "fardus-hassan", []);
  const token = useMemo(() => import.meta.env.VITE_GITHUB_TOKEN, []);
  const threshold = 0.1;

  const { totalCommits, loading, error } = useGithubLifetimeCommits(username, token);

  // Stable refs for IntersectionObserver
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === ref1.current) setVisible1(entry.isIntersecting);
          if (entry.target === ref2.current) setVisible2(entry.isIntersecting);
          if (entry.target === ref3.current) setVisible3(entry.isIntersecting);
        });
      },
      { threshold }
    );

    [ref1, ref2, ref3].forEach((ref) => ref.current && observer.observe(ref.current));

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div id="about" className="xl:w-[95%] mx-auto">
      <div className="xl:container w-[90%] mx-auto lg:mb-[150px] sm:mb-[100px] mb-20">
        <div className="flex lg:flex-row-reverse flex-col justify-between items-center lg:gap-20 gap-10">
          <div className="banner rounded-full md:w-[500px] w-[300px] md:h-[600px] h-[400px] relative">
            <img
              className="md:w-[500px] rounded-full w-[300px] md:h-[700px] h-[500px] object-cover object-top absolute md:translate-y-[-14%] translate-y-[-20%] left-[50%] translate-x-[-50%]"
              src={aboutme}
              alt="about me"
            />
          </div>

          <div>
            <h3 className="font-bold font-jost lg:text-xl gradient-color">&lt;About Me/&gt;</h3>
             <h1 className="font-bold font-jost lg:text-[44px] text-[30px] max-w-[700px] mt-5">
              Passionate Junior MERN Stack & Front-End Developer
            </h1>

            <div>
              <p className="font-jost lg:text-lg max-w-[715px] my-8">
                I am a Front-End Developer and Junior MERN Stack Developer from a Mechanical Engineering background. I have strong expertise in HTML5, CSS3, Tailwind CSS, Bootstrap 5, JavaScript, TypeScript, React.js, Next.js, Redux, REST API integration, and Firebase Authentication. I am also learning React Native and actively applying my skills to mobile app development.
              </p>
              <p className="font-jost lg:text-lg max-w-[700px]">
                On the backend, I have experience with Node.js, Express.js, and MongoDB. I am comfortable with tools like VS Code, Cursor, Git, GitHub, Vercel, Figma, and Netlify. Based in Joydebpur, Gazipur, Bangladesh, I am passionate about building both web and mobile applications and continuously improving my development skills.
              </p>
            </div>

            <div className="mt-8 flex justify-between items-center gap-8 flex-wrap w-full">
              <div ref={ref1}>
                <span className="font-jost font-bold lg:text-3xl text-2xl gradient-color">
                  {visible1 ? (
                    loading ? "..." : error ? "N/A" : <CountUp end={totalCommits} duration={2.5} separator="," />
                  ) : (
                    loading ? "..." : (error ? "N/A" : totalCommits)
                  )}
                </span>
                <h3 className="font-jost lg:text-xl text-lg font-medium">GitHub Contributions</h3>
                {error && <p className="text-sm text-red-500 mt-1">Error: {error}</p>}
              </div>

              <div ref={ref2}>
                <span className="font-jost font-bold lg:text-3xl text-2xl gradient-color">
                  {visible2 ? <CountUp end={100} duration={4} suffix="%" /> : "100%"}
                </span>
                <h3 className="font-jost lg:text-xl text-lg font-medium">Dedication/Hard work</h3>
              </div>

              <div ref={ref3}>
                <span className="font-jost font-bold lg:text-3xl text-2xl gradient-color">
                  {visible3 ? <CountUp end={1} duration={4} suffix="+" /> : "1+"}
                </span>
                <h3 className="font-jost lg:text-xl text-lg font-medium">Job Experience</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;