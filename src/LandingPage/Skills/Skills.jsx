import { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaTrello,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiVisualstudiocode,
  SiNetlify,
  SiVercel,
  SiCanva,
  SiOpenai,
  SiAnthropic,
} from "react-icons/si";
import { TbBrandReactNative, TbRobot } from "react-icons/tb";
import { RiAiGenerate } from "react-icons/ri";

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
        { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
        {
          icon: <SiTailwindcss className="text-teal-500" />,
          name: "Tailwind CSS",
        },
        {
          icon: <FaBootstrap className="text-purple-600" />,
          name: "Bootstrap 5",
        },
        {
          icon: <FaJsSquare className="text-yellow-500" />,
          name: "JavaScript",
        },
        {
          icon: <SiTypescript className="text-blue-600" />,
          name: "TypeScript",
        },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: "⚛️",
      skills: [
        { icon: <FaReact className="text-blue-500" />, name: "React.js" },
        { icon: <SiNextdotjs className="text-black" />, name: "Next.js" },
        {
          icon: <TbBrandReactNative className="text-blue-400" />,
          name: "React Native",
        },
        { icon: <SiRedux className="text-purple-500" />, name: "Redux" },
      ],
    },
    {
      title: "Backend & Database",
      icon: "💾",
      skills: [
        { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
        { icon: <SiExpress className="text-gray-600" />, name: "Express.js" },
        { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
        { icon: <SiFirebase className="text-yellow-600" />, name: "Firebase" },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: [
        {
          icon: <SiVisualstudiocode className="text-blue-600" />,
          name: "VS Code",
        },
        { icon: <FaGitAlt className="text-red-600" />, name: "Git" },
        { icon: <FaGithub className="text-gray-800" />, name: "GitHub" },
        { icon: <FaFigma className="text-purple-500" />, name: "Figma" },
        { icon: <SiNetlify className="text-teal-500" />, name: "Netlify" },
        { icon: <SiVercel className="text-black" />, name: "Vercel" },
        { icon: <FaTrello className="text-blue-500" />, name: "Trello" },
        { icon: <SiCanva className="text-cyan-500" />, name: "Canva" },
        { icon: <RiAiGenerate className="text-blue-600" />, name: "Cursor AI" },
        {
          icon: <SiAnthropic className="text-orange-600" />,
          name: "Claude AI",
        },
        { icon: <SiOpenai className="text-emerald-600" />, name: "ChatGPT" },
        { icon: <TbRobot className="text-gray-600" />, name: "Grok" },
      ],
    },
  ];

  // All skills combined for marquee
  const allSkills = skillCategories.flatMap((cat) => cat.skills);

  // Trigger animation only when tab changes
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 700);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section id="skills" className="skills-section overflow-hidden">
      <div className="sm:mb-16 mb-12 text-center mx-auto">
        <h3 className="font-bold font-jost lg:text-xl gradient-color">
          &lt;Skills/&gt;
        </h3>
        <h1 className="mt-2 text-black font-jost lg:text-[44px] text-[30px] font-bold">
          My Skills & Proficiencies
        </h1>
      </div>

      {/* Animated Marquee Section */}
      <div className="mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none"></div>
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...allSkills, ...allSkills].map((skill, idx) => (
              <div key={idx} className="mx-4 flex flex-col items-center">
                <div className="text-4xl mb-2">{skill.icon}</div>
                <span className="text-sm font-semibold text-gray-600 font-jost">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container mx-auto px-6">
        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`sm:px-6 sm:py-3 px-3 py-2 rounded-full font-jost font-semibold sm:text-base text-xs transition-all duration-300 flex items-center gap-2 ${
                activeTab === index
                  ? "gradient-button text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg"
              }`}
            >
              <span>{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Tab Content with Smooth Animation */}
        <div className="sm:p-8 min-h-[400px] overflow-hidden">
          {/* Animated Title */}
          <h2
            key={`title-${activeTab}`} // Force re-render for animation
            className="sm:text-3xl text-xl font-bold text-gray-800 mb-8 font-jost text-center animate-slideDown"
          >
            <span className="mr-3 sm:text-4xl text-2xl">
              {skillCategories[activeTab].icon}
            </span>
            {skillCategories[activeTab].title}
          </h2>

          {/* Skill Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 pb-2">
            {skillCategories[activeTab].skills.map((skill, idx) => (
              <div
                key={`${activeTab}-${idx}`}
                className={`
                group flex flex-col items-center p-6 bg-white rounded-2xl 
                shadow-md hover:shadow-xl transition-all duration-300 
                hover:-translate-y-2 border border-gray-100
                ${
                  isAnimating
                    ? "animate-staggerItem"
                    : "opacity-100 translate-y-0"
                }
            `}
                style={{
                  // First item o delay pabe, jerk hobe na
                  animationDelay: `${(idx + 1) * 0.07}s`, // 0.07s, 0.14s, 0.21s...
                  animationFillMode: "backwards",
                  // Shuru te ektu visible rakhi to avoid flash
                  opacity: isAnimating ? 0 : 1,
                }}
              >
                <div className="sm:text-6xl text-3xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="sm:text-base text-xs font-semibold text-gray-700 text-center font-jost">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        /* Title Slide Down */
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.5s ease-out forwards;
        }

        /* Staggered Card Animation */
        @keyframes slideFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.92);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-staggerItem {
          animation: slideFadeIn 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0;
        }

        /* Hover lift effect already in Tailwind */
      `}</style>
    </section>
  );
};

export default Skills;
