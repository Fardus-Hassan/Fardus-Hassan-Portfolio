import { useState } from 'react';
import { FaCode } from "react-icons/fa6";

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative bg-white shadow dark:bg-gray-800">
            <div className="xl:container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
                <div className="flex items-center justify-between gap-5">
                    <div className='flex justify-center items-center gap-2'>
                        {/* <img className="w-14" src="../../../public/code.png" alt="" /> */}
                        <h1 className='gradient-color md:text-4xl text-3xl font-black mb-1'>&lt;<span className='md:text-3xl text-2xl font-black'>Fardus Hassan</span><span className='font-bold'>/</span>&gt;</h1>
                        {/* <h1 className='font-jost text-2xl font-black gradient-color'></h1> */}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 lg:hidden"
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 8h16M4 16h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                <div
                    className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:translate-x-0 md:opacity-100 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto font-jost font-semibold lg:flex lg:items-center mt-4  ${isOpen ? '' : 'opacity-0 -translate-x-full'
                        }`}
                >
                    <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
                        <a
                            className="gradient-textColor"
                            href="#"
                        >
                            Home
                        </a>
                        <a
                            className="gradient-textColor"
                            href="#"
                        >
                            About
                        </a>
                        <a
                            className="gradient-textColor"
                            href="#"
                        >
                            Skills
                        </a>
                        <a
                            className="gradient-textColor"
                            href="#"
                        >
                            Projects
                        </a>
                        <a
                            className="gradient-textColor"
                            href="#"
                        >
                            Contact
                        </a>
                    </div>


                </div>
                <div>
                <button className="group lg:block hidden relative h-12 overflow-hidden overflow-x-hidden rounded-md bg-Color px-8 py-2 text-neutral-50"><span className="relative z-10 font-jost font-semibold ">Contact Me</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full gradient-button transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;