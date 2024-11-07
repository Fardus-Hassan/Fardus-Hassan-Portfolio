import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiMongodb, SiExpress } from 'react-icons/si';

const Skills = () => {
    return (
        <section id='skills' className="skills-section">
            <div className='sm:mb-20 mb-12 text-center mx-auto'>
                    <h3 className='font-bold font-jost lg:text-xl gradient-color'>&lt;Skills/&gt;</h3>
                    <h1 className="mt-2 text-black font-jost lg:text-[44px] text-[30px] font-bold">
                        My Skills & Proficiencies
                    </h1>
                </div>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Skill Cards */}
                    <SkillCard icon={<FaHtml5 className="text-orange-500" />} skill="HTML5" />
                    <SkillCard icon={<FaCss3Alt className="text-blue-500" />} skill="CSS3" />
                    <SkillCard icon={<SiTailwindcss className="text-teal-500" />} skill="Tailwind CSS" />
                    <SkillCard icon={<FaJsSquare className="text-yellow-500" />} skill="JavaScript" />
                    <SkillCard icon={<FaReact className="text-blue-500" />} skill="React.js" />
                    <SkillCard icon={<FaBootstrap className="text-purple-600" />} skill="Bootstrap 5" />
                    <SkillCard icon={<SiFirebase className="text-yellow-600" />} skill="Firebase" />
                    <SkillCard icon={<FaGitAlt className="text-red-600" />} skill="Git" />
                    <SkillCard icon={<FaGithub className="text-gray-800" />} skill="GitHub" />
                    <SkillCard icon={<FaNodeJs className="text-green-600" />} skill="Node.js" />
                    <SkillCard icon={<SiMongodb className="text-green-500" />} skill="MongoDB" />
                    <SkillCard icon={<SiExpress className="text-gray-600" />} skill="Express.js" />
                </div>
            </div>
        </section>
    );
};

const SkillCard = ({ icon, skill }) => (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="text-4xl mb-2">
            {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-700">{skill}</h3>
    </div>
);

export default Skills;
