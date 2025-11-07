import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { LuGithub } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import myimg from "../../assets/InShot_20240703_024351363.jpg"
import next from "../../assets/next.js.png"
import js from "../../assets/js.png"
import react from "../../assets/react.png"
import typescript from "../../assets/typescript.png"
import redux from "../../assets/typescript.png"
import PDF from "../../assets/Junior_Developer_Fardus_Hassan_Resume .pdf"

const Banner = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    

    return (
        <div className='banner xl:py-[140px] py-10 relative duration-300 ease-out sm:mb-[150px] mb-20' style={{
            transform: `translateY(${scrollPosition / -10}px)`
        }}>
            <div className='container flex flex-col justify-center h-full 2xl:w-[80%] xl:w-[90%] w-[90%] mx-auto'>
                <div className='flex xl:flex-row-reverse flex-col-reverse justify-between items-center md:gap-16 gap-10'>
                    <div>
                        <div className="transition-transform duration-500 text-left ease-out">
                            <h1 className={` text-white overflow-hidden duration-300 ease-out lg:text-[55px] text-[35px] font-bold`} style={{
                                transform: `translateY(${scrollPosition / -5}px)`
                            }}>Hi <span className="wave">👋</span> I’m Fardus Hassan <br /> A <Typewriter
                                    words={['Front-End Developer', 'MERN Stack Developer', 'Quick Learner']}
                                    typeSpeed={50}
                                    deleteSpeed={20}
                                    delaySpeed={3000}
                                    cursorStyle='|'
                                    autoStart={true}
                                    loop={true}
                                    cursor='pointer'
                                /></h1>
                            <p className='max-w-[800px] text-left duration-300 ease-out block text-white lg:text-[16px] text-[14px] sm:my-16 my-10 jost-regular' style={{
                                transform: `translateY(${scrollPosition / -5}px)`
                            }}>I am a passionate front-end developer and MERN stack developer. Despite not having a computer science background, my interest in programming has driven me to dive into this field. I am excited to build a career in both web and app development, continuously learning and exploring new technologies.</p>
                             <style jsx>{`
        .wave {
          display: inline-block;
          transform-origin: 70% 70%;
          animation: wave 2s infinite;
        }
        @keyframes wave {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(14deg); }
          30% { transform: rotate(-8deg); }
          45% { transform: rotate(14deg); }
          60% { transform: rotate(-4deg); }
          75% { transform: rotate(10deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
                            <div className='flex sm:flex-row-reverse flex-col-reverse xl:justify-end justify-between sm:items-center items-start xl:gap-32 gap-10 duration-300 ease-out' style={{
                                transform: `translateY(${scrollPosition / -5}px)`
                            }}>
                                <div className='flex sm:gap-8 gap-5'>
                                    <a href='https://github.com/Fardus-Hassan' target='blank' className='border rounded-xl p-2 text-white hover:scale-110 duration-300 ease-out text-3xl' ><LuGithub /></a>
                                    <a href='https://www.facebook.com/profile.php?id=100034957954013' target='blank' className='border rounded-xl p-2 text-white hover:scale-110 duration-300 ease-out text-3xl'><FaFacebookF /></a>
                                    <a href='https://www.linkedin.com/in/fardus-hassan' target='blank' className='border rounded-xl p-2 text-white hover:scale-110 duration-300 ease-out text-3xl' ><FaLinkedinIn /></a>
                                    <a href='https://api.whatsapp.com/send/?phone=8801722092675&text&type=phone_number&app_absent=0' target='blank' className='border rounded-xl p-2 text-white hover:scale-110 duration-300 ease-out text-3xl'><FaWhatsapp /></a>
                                </div>
                                <a href={PDF} download="Fardus_Hassan_Resume"><button className="group relative jost-bold inline-flex h-12 items-center justify-center overflow-hidden rounded-md border px-6 font-medium text-white duration-300 ease-out"><div className="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0 text-nowrap">Download Resume</div><div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"><MdFileDownload /></svg></div></button></a>
                            </div>
                        </div>

                    </div>
                    <div>

                        <img className='lg:min-w-[550px] resizing-image lg:h-[550px] md:h-[450px] h-[350px] object-cover duration-300 ease-out ' src={myimg} alt="" style={{
                            transform: `translateY(${scrollPosition / -5}px)`
                        }} />
                    </div>
                </div>
            </div>
            <img className='absolute top-8 left-5 lg:w-20 w-12 float-animation' src={react} alt="" />
            <img className='absolute top-8 right-5 lg:w-[70px] w-12 rounded-xl float-animation' src={js} alt="" />
            <img className='absolute bottom-5 right-5 lg:w-20 w-12 float-animation'  src={typescript} alt="" />
            <img className='absolute bottom-5 left-5 lg:w-20 w-12 float-animation' src={next} alt="" />
        </div>

        
    );
};

export default Banner;