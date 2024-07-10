import aboutme from '../../assets/IMG_20240705_012920.png';
import React, { useEffect, useState, useRef } from 'react';
import { request, gql } from 'graphql-request';
import CountUp from 'react-countup';


const About = () => {

    const useOnScreen = (options) => {
        const ref = useRef();
        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    setIsVisible(entry.isIntersecting);
                },
                { threshold: 0.1, ...options }
            );

            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            };
        }, [ref, options]);

        return [ref, isVisible];
    };


    const [ref1, isVisible1] = useOnScreen({ threshold: 0.1 });
    const [ref2, isVisible2] = useOnScreen({ threshold: 0.1 });
    const [ref3, isVisible3] = useOnScreen({ threshold: 0.1 });
    const [contributions, setContributions] = useState(0);

    useEffect(() => {
        const fetchContributions = async () => {
            const endpoint = 'https://api.github.com/graphql';
            const token = import.meta.env.VITE_gitToken;

            const query = gql`
{
                    user(login: "fardus-hassan") {
                        contributionsCollection {
                            contributionCalendar {
                                totalContributions
                            }
                        }
                    }
                }
            `;

            const headers = {
                Authorization: `Bearer ${token}`,
            };

            try {
                const data = await request(endpoint, query, {}, headers);
                console.log(data);
                const totalContributions = data.user.contributionsCollection.contributionCalendar.totalContributions;
                setContributions(totalContributions);
            } catch (error) {
                console.error('Error fetching contributions:', error);
            }
        };

        fetchContributions();
    }, []);

    return (
        <div id='about' className='xl:container w-[90%] mx-auto lg:my-[150px] lg:mt-[150px] sm:mt-[180px] sm:my-[100px] my-20 mt-28'>
            <div className='flex lg:flex-row-reverse flex-col justify-between items-center lg:gap-20 gap-10'>
                <div className='banner rounded-full md:w-[500px] w-[300px] md:h-[600px] h-[400px]  relative'>
                    <img className='md:w-[500px] w-[300px] md:h-[700px] h-[500px]  rounded-full object-cover object-top absolute md:translate-y-[-14%] translate-y-[-20%] left-[50%] translate-x-[-50%]' src={aboutme} alt="" />
                </div>
                <div>
                    <h3 className='font-bold font-jost jost lg:text-xl gradient-color'>&lt; About Me/&gt;</h3>
                    <h1 className='font-bold font-jost lg:text-[44px] text-[30px] max-w-[700px] mt-5' >Passionate Junior MERN Stack & Front-End Developer</h1>
                    <div className='max-h-[260px] overflow-y-auto'>
                        <p className='font-jost lg:text-lg max-w-[700px] my-8'>I am a Front-End Developer and Junior MERN Stack Developer from a Mechanical Engineering background. Passionate about programming, I have strong skills in HTML, CSS, Tailwind, JavaScript, and React, with experience in Firebase Authentication, Git, and GitHub.</p>
                        <p className='font-jost lg:text-lg max-w-[700px]'>I am also learning Node.js, Express.js, MongoDB, JWT, Next.js, and various component libraries. Based in Joydebpur, Gazipur, Bangladesh, I am eager to grow and contribute to web development.</p>
                    </div>
                    <div className='mt-8 flex justify-between items-center gap-8 flex-wrap w-full'>
                        <div ref={ref1}>
                            <span className='font-jost font-bold lg:text-3xl text-2xl gradient-color'>
                                {isVisible1 ? <CountUp end={contributions} duration={4} /> : contributions}
                            </span>
                            <h3 className='font-jost lg:text-xl text-lg font-medium'>Github Commits</h3>
                        </div>
                        <div ref={ref2}>
                            <span className='font-jost font-bold lg:text-3xl text-2xl gradient-color'>
                                {isVisible2 ? <CountUp end={100} duration={4} suffix="%" /> : '100%'}
                            </span>
                            <h3 className='font-jost lg:text-xl text-lg font-medium'>Dedication/Hard work</h3>
                        </div>
                        <div ref={ref3}>
                            <span className='font-jost font-bold lg:text-3xl text-2xl gradient-color'>
                                {isVisible3 ? <CountUp end={1} duration={4} suffix="+" /> : '1+'}
                            </span>
                            <h3 className='font-jost lg:text-xl text-lg font-medium'>Years of Learning</h3>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default About;