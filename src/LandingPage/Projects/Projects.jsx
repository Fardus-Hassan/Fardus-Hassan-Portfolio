import React from 'react';

const Projects = () => {
    return (
        <div id='projects'>
            <div className="xl:container w-[90%] lg:my-[150px] lg:mt-[150px] sm:mt-[180px] sm:my-[100px] my-20 mx-auto">
                <h3 className='font-bold font-jost lg:text-xl text-center gradient-color'>&lt; Projects/&gt;</h3>
                <h1 className="mt-2 text-center text-black font-jost lg:text-[44px] text-[30px] font-bold">
                    MY RECENT WORK
                </h1>
                <section className="mt-8 space-y-8 lg:mt-12 lg:max-h-[75vh] overflow-y-auto">
                    <section className="lg:flex lg:items-center">
                        <div className="lg:w-1/2">
                            <p className="text-xl tracking-wider gradient-color font-semibold">EmployeeFlow</p>
                            <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Employee Management Website</h2>
                            <a href='https://employee-flow.web.app/' target='_blank' className="mt-5 block  font-semibold tracking-wider text-black border w-fit px-2 py-1 rounded-lg hover:text-secColor duration-300 ">View live</a>
                        </div>

                        <div className="mt-4 lg:w-full lg:mt-0 rounded-xl border">
                            <iframe src="https://employee-flow.web.app/" className='w-[100%] h-[500px] rounded-xl'></iframe>
                        </div>
                    </section>
                    <hr />
                    <section className="lg:flex lg:items-center">
                        <div className="lg:w-1/2">
                            <p className="text-xl tracking-wider gradient-color font-semibold">EventX</p>
                            <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Event Management Website</h2>
                            <a href='https://eventx-7378e.web.app/' target='_blank' className="mt-5 block font-semibold tracking-wider text-black border w-fit px-2 py-1 rounded-lg hover:text-secColor duration-300 ">View live</a>
                        </div>

                        <div className="mt-4 lg:w-full lg:mt-0 rounded-xl border">
                            <iframe src="https://eventx-7378e.web.app/" className='w-[100%] h-[500px] rounded-xl'></iframe>
                        </div>
                    </section>
                    <hr />
                    <section className="lg:flex lg:items-center">
                        <div className="lg:w-1/2">
                            <p className="text-xl tracking-wider gradient-color font-semibold">Trip Trove</p>
                            <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Tourism Spot Viewing Website</h2>
                            <a href='https://trip-trove-1d68d.web.app/' target='_blank' className="mt-5 block font-semibold tracking-wider text-black border w-fit px-2 py-1 rounded-lg hover:text-secColor duration-300 ">View live</a>
                        </div>

                        <div className="mt-4 lg:w-full lg:mt-0 rounded-xl border">
                            <iframe src="https://trip-trove-1d68d.web.app/" className='w-[100%] h-[500px] rounded-xl'></iframe>
                        </div>
                    </section>
                    <hr />
                    <section className="lg:flex lg:items-center">
                        <div className="lg:w-1/2">
                            <p className="text-xl tracking-wider gradient-color font-semibold">Dream Land</p>
                            <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Land viewing website</h2>
                            <a href='https://dream-land-17173.web.app/' target='_blank' className="mt-5 block font-semibold tracking-wider text-black border w-fit px-2 py-1 rounded-lg hover:text-secColor duration-300 ">View live</a>
                        </div>

                        <div className="mt-4 lg:w-full lg:mt-0 rounded-xl border">
                            <iframe src="https://dream-land-17173.web.app/" className='w-[100%] h-[500px] rounded-xl'></iframe>
                        </div>
                    </section>
                    <hr />
                </section>
            </div>
        </div>
    );
};

export default Projects;