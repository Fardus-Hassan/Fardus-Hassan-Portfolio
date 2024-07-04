import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { LuGithub } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";


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
        <div className='banner xl:py-[140px] py-10 relative'>
            <div className='container flex flex-col justify-center h-full 2xl:w-[80%] xl:w-[90%] w-[95%] mx-auto'>
                <div className='flex xl:flex-row flex-col-reverse justify-between items-center md:gap-16 gap-10'>
                    <div>
                        <div className="transition-transform duration-500 text-left ease-out">
                            <h1 className={` text-white overflow-hidden duration-300 ease-out lg:text-[55px] text-[35px] font-black font-poppins`} style={{
                                transform: `translateY(${scrollPosition / -5}px)`
                            }}>Hi👋 I’m Fardus Hassan <br /> A <Typewriter
                                    words={['Front-end Web Developer', 'Junior MERN Stack Developer', 'Quick Learner']}
                                    typeSpeed={50}
                                    deleteSpeed={20}
                                    delaySpeed={3000}
                                    cursorStyle='|'
                                    autoStart={true}
                                    loop={true}
                                    cursor='pointer'
                                /></h1>
                            <p className='max-w-[800px] text-left duration-300 ease-out block font-medium text-white lg:text-[16px] text-[14px] sm:my-16 my-10 font-montserrat' style={{
                                transform: `translateY(${scrollPosition / -5}px)`
                            }}>I am a passionate front-end developer and junior MERN stack developer. Despite not having a computer science background, my interest in programming has driven me to dive into this field. I am excited to build a career in web development, continuously learning and exploring new technologies.</p>
                            <div className='flex sm:flex-row-reverse flex-col-reverse xl:justify-end justify-between sm:items-center items-start xl:gap-32 gap-10 duration-300 ease-out' style={{
                                transform: `translateY(${scrollPosition / -5}px)`
                            }}>
                                <div className='flex sm:gap-8 gap-5'>
                                    <a href='https://github.com/Fardus-Hassan' target='blank' className='border rounded-xl p-2 text-white hover:scale-110 duration-300 ease-out text-3xl' ><LuGithub /></a>
                                    <a href='https://www.facebook.com/profile.php?id=100034957954013' target='blank' className='border rounded-xl p-2 text-white hover:scale-110 duration-300 ease-out text-3xl'><FaFacebookF /></a>
                                    <a href='https://www.linkedin.com/in/fardus-hassan-05a3932aa/' target='blank' className='border rounded-xl p-2 text-white hover:scale-110 duration-300 ease-out text-3xl' ><FaLinkedinIn /></a>
                                    <a href='https://api.whatsapp.com/send/?phone=8801722092675&text&type=phone_number&app_absent=0' target='blank' className='border rounded-xl p-2 text-white hover:scale-110 duration-300 ease-out text-3xl'><FaWhatsapp /></a>
                                </div>
                                <a href='../../../public/InShot_20240703_024351363.jpg' download><button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border px-6 font-medium text-white duration-300 ease-out"><div className="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0 text-nowrap">Download Resume</div><div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"><MdFileDownload /></svg></div></button></a>
                            </div>
                        </div>

                    </div>
                    <div>

                        <img className='lg:min-w-[550px] lg:h-[550px] md:h-[450px] h-[350px] object-cover duration-300 ease-out rounded-full' src="../../../public/InShot_20240703_024351363.jpg" alt="" style={{
                            transform: `translateY(${scrollPosition / -5}px)`
                        }} />
                    </div>
                </div>
            </div>
            <img className='absolute top-8 left-5 lg:w-20 w-12 float-animation' src="https://private-user-images.githubusercontent.com/155534646/345079649-2742533b-af38-4074-9739-62badd26f318.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjAwNTA3MDcsIm5iZiI6MTcyMDA1MDQwNywicGF0aCI6Ii8xNTU1MzQ2NDYvMzQ1MDc5NjQ5LTI3NDI1MzNiLWFmMzgtNDA3NC05NzM5LTYyYmFkZDI2ZjMxOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzAzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcwM1QyMzQ2NDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jZDE4MmQ4ZDJmMGZiMTlmZjRmZWFlMmNiMDVhN2U0OGQ1OGNkNjVlNmJiZDZlZDU4YThmNTUzOTZlOTg5YTAyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.nbrJSjpWgzh14SLzA4eAboaCaRk8duDs-FgTlJxOZvw" alt="" />
            <img className='absolute top-8 right-5 lg:w-20 w-12 float-animation' src="https://private-user-images.githubusercontent.com/155534646/345076260-d2318a80-8fe4-4c7b-bc32-082cfe0bb286.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjAwNTIwMTksIm5iZiI6MTcyMDA1MTcxOSwicGF0aCI6Ii8xNTU1MzQ2NDYvMzQ1MDc2MjYwLWQyMzE4YTgwLThmZTQtNGM3Yi1iYzMyLTA4MmNmZTBiYjI4Ni5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcwNFQwMDA4MzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hMWZmMDdjYTAxMjgyNDNjY2M5M2U3MmM5MTYwZTY1OThkMWZkMTdlZWEyYjBkNzcxMjdjMzdhNDllYzA3MDY4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.jNBgtQgv4w7ACZA4pVvrts4yu0VaBby8J4rcEL9x-qc" alt="" />
            <img className='absolute bottom-5 right-5 lg:w-20 w-12 float-animation' src="https://private-user-images.githubusercontent.com/155534646/345072090-d3c615d3-32ab-4f37-8eac-0e79e7ae2d0c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjAwNTA3MDcsIm5iZiI6MTcyMDA1MDQwNywicGF0aCI6Ii8xNTU1MzQ2NDYvMzQ1MDcyMDkwLWQzYzYxNWQzLTMyYWItNGYzNy04ZWFjLTBlNzllN2FlMmQwYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzAzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcwM1QyMzQ2NDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iODg4YjIyYTBjZTc5ZjZlOWRiNWViZDFhODQzNmRmNmFhYjQ2NTE1YTdkNmY4MmIxMmQ2MmQ5ZjRhYTNjNjEyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.dBN746aeGnmdv-boS71UDgMcOLvqughUVkt1yz8cTD8" alt="" />
            <img className='absolute bottom-5 left-5 lg:w-20 w-12 float-animation' src="https://private-user-images.githubusercontent.com/155534646/345073921-d9dde1d8-d0b4-4a28-9ed6-0ee864e51a82.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjAwNTIwMTksIm5iZiI6MTcyMDA1MTcxOSwicGF0aCI6Ii8xNTU1MzQ2NDYvMzQ1MDczOTIxLWQ5ZGRlMWQ4LWQwYjQtNGEyOC05ZWQ2LTBlZTg2NGU1MWE4Mi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcwNFQwMDA4MzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01YTY3OWQ4NjQ0MjU1NTMyODUzNmFmNzEzN2JmNWFlMzFhY2NhOWY0NThlN2FlYTAzZWY5ZTA5ZmY4OWJkYzgzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.TafNhHwAqv-r2ft8p0KcBMGnPa6vSvQQV37qjEr5QrU" alt="" />
        </div>
    );
};

export default Banner;