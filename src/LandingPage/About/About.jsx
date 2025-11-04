// src/components/About.jsx
import React, { useEffect, useState, useRef } from "react";
import aboutme from "../../assets/IMG_20240705_012920.png";
import CountUp from "react-countup";
import useGithubLifetimeCommits from "../../hooks/useGithubLifetimeCommits";

/* Simple intersection hook */
const useOnScreen = (options) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      options
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isVisible];
};

const About = () => {
  const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || import.meta.env.GITHUB_USERNAME || "fardus-hassan";
  const token = import.meta.env.VITE_gitToken;


  const { totalCommits, loading, error } = useGithubLifetimeCommits(GITHUB_USERNAME, token);

  const [ref1, isVisible1] = useOnScreen({ threshold: 0.1 });
  const [ref2, isVisible2] = useOnScreen({ threshold: 0.1 });
  const [ref3, isVisible3] = useOnScreen({ threshold: 0.1 });

  return (
    <div id="about" className="xl:w-[95%] mx-auto">
      <div className="xl:container w-[90%] mx-auto lg:mb-[150px] sm:mb-[100px] mb-20 ">
        <div className="flex lg:flex-row-reverse flex-col justify-between items-center lg:gap-20 gap-10">
          <div className="banner rounded-full md:w-[500px] w-[300px] md:h-[600px] h-[400px] relative">
            <img
              className="md:w-[500px] rounded-full w-[300px] md:h-[700px] h-[500px] object-cover object-top absolute md:translate-y-[-14%] translate-y-[-20%] left-[50%] translate-x-[-50%]"
              src={aboutme}
              alt="about me"
            />
          </div>

          <div>
            <h3 className="font-bold font-jost jost lg:text-xl gradient-color">&lt;About Me/&gt;</h3>
            <h1 className="font-bold font-jost lg:text-[44px] text-[30px] max-w-[700px] mt-5">
              Passionate Junior MERN Stack & Front-End Developer
            </h1>

            <div className="max-h-[260px] overflow-y-auto">
              <p className="font-jost lg:text-lg max-w-[700px] my-8">
                I am a Front-End Developer and Junior MERN Stack Developer from a Mechanical Engineering background. Passionate about programming, I have strong skills in HTML, CSS, Tailwind, JavaScript, and React, with experience in Firebase Authentication, Git, and GitHub.
              </p>
              <p className="font-jost lg:text-lg max-w-[700px]">
                I am also learning Node.js, Express.js, MongoDB, JWT, Next.js, and various component libraries. Based in Joydebpur, Gazipur, Bangladesh, I am eager to grow and contribute to web development.
              </p>
            </div>

            <div className="mt-8 flex justify-between items-center gap-8 flex-wrap w-full">
              <div ref={ref1}>
                <span className="font-jost font-bold lg:text-3xl text-2xl gradient-color">
                  {isVisible1 ? (
                    loading ? (
                      "..."
                    ) : error ? (
                      "N/A"
                    ) : (
                      <CountUp end={totalCommits} duration={2.5} separator="," />
                    )
                  ) : (
                    loading ? "..." : (error ? "N/A" : totalCommits)
                  )}
                </span>
                <h3 className="font-jost lg:text-xl text-lg font-medium">GitHub Contributions</h3>
                {error && <p className="text-sm text-red-500 mt-1">Error: {error}</p>}
              </div>

              <div ref={ref2}>
                <span className="font-jost font-bold lg:text-3xl text-2xl gradient-color">
                  {isVisible2 ? <CountUp end={100} duration={4} suffix="%" /> : "100%"}
                </span>
                <h3 className="font-jost lg:text-xl text-lg font-medium">Dedication/Hard work</h3>
              </div>

              <div ref={ref3}>
                <span className="font-jost font-bold lg:text-3xl text-2xl gradient-color">
                  {isVisible3 ? <CountUp end={1} duration={4} suffix="+" /> : "1+"}
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
