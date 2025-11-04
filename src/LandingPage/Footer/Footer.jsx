import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {

    return (
        <footer className="font-jost shadow-2xl">
            <div className="py-8 w-[90%] mx-auto">
                <div className="flex flex-col items-center text-center">
                    <div className='mb-5'>
                        <a href='#home' className='gradient-color md:text-4xl text-3xl jost-bold mb-2'>&lt;<span className='md:text-3xl text-2xl font-black'>Fardus</span><span className='font-bold'>/</span>&gt;</a>
                    </div>

                    <div className="flex flex-wrap flex-row gap-10 justify-center items-center font-semibold">
                        <a
                            className="text-black hover:text-pmColor duration-300"
                            href="#home"
                        >
                            Home
                        </a>
                        <a
                            className="text-black hover:text-pmColor duration-300"
                            href="#about"
                        >
                            About
                        </a>
                        <a
                            className="text-black hover:text-pmColor duration-300"
                            href="#skills"
                        >
                            Skills
                        </a>
                        <a
                            className="text-black hover:text-pmColor duration-300"
                            href="#projects"
                        >
                            Projects
                        </a>
                        <a
                            className="text-black hover:text-pmColor duration-300 lg:hidden"
                            href="#contact"
                        >
                            Contact
                        </a>
                    </div>

                </div>

                <hr className="my-6 border-gray-300 md:my-10" />

                <div className="container mx-auto flex flex-col items-center sm:flex-row sm:justify-between gap-5">
                    <p className="text-sm text-gray-700">© Copyright 2024. All Rights Reserved.</p>

                    <div className="flex items-center gap-4">
                        <a href='https://github.com/Fardus-Hassan' target="_blank" aria-label="Github">
                            <FaGithub className="text-2xl text-secColor hover:text-pmColor duration-300 hover:scale-110" />
                        </a>
                        
                        <a href='https://www.facebook.com/profile.php?id=100034957954013' target="_blank" aria-label="Facebook">
                            <FaFacebook className="text-2xl text-secColor hover:text-pmColor duration-300 hover:scale-110" />
                        </a>

                        <a href='https://www.linkedin.com/in/fardus-hassan' target="_blank" aria-label="Github">
                            <FaLinkedin className="text-2xl text-secColor hover:text-pmColor duration-300 hover:scale-110" />
                        </a>

                        <a href='https://api.whatsapp.com/send/?phone=8801722092675&text&type=phone_number&app_absent=0' target="_blank" aria-label="Reddit">
                            <IoLogoWhatsapp className="text-[26px] text-secColor hover:text-pmColor duration-300 hover:scale-110" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;