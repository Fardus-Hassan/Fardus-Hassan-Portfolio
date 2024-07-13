import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useState } from 'react';
import email from '../../assets/gmail.png'
import phone from '../../assets/phone.png'
import map from '../../assets/map.png'



const Contact = () => {

    const [error, setError] = useState(null)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()


    const onSubmit = async (data) => {
        setError('')
        // try {
        //     const { data: info } = await axios.post('https://assignment-12-server-teal.vercel.app/contact', data);
        //     if (info.acknowledged) {
        //         reset();
        //         toast.success('Message Send Successfully');
        //     }
        // } catch (error) {
        //     console.error(error);
        //     return setError(error.message);
        // }
        reset()

    }


    return (
        <div id='contact' className='xl:container max-w-[90%] lg:my-[150px] lg:mt-[150px] sm:my-[100px] my-20 mx-auto'>
            <div className='mb-8 lg:mb-14'>
                <h3 className='font-bold font-jost lg:text-xl text-center gradient-color'>&lt;Contact/&gt;</h3>
                <h1 className="mt-2 text-center text-black font-jost lg:text-[44px] text-[30px] font-bold">
                    Contact With Me
                </h1>
            </div>
            <div className='md:grid grid-cols-3'>
                <div className='liteBgColor p-10 lg:p-5 col-span-1 flex flex-col justify-between'>
                    <div className=' rounded-lg p-5'>
                        <img src={phone} alt="" className='lg:mx-0 mx-auto' />
                        <h2 className='text-white font-semibold text-lg mt-4 lg:text-left text-center'>
                            Phone : <br />
                            +880 1722092675
                        </h2>
                    </div>
                    <div className='rounded-lg p-5'>
                        <img src={email} alt="" className='lg:mx-0 mx-auto' />
                        <h2 className='text-white font-semibold text-lg mt-4 lg:text-left text-center overflow-x-auto'>
                            Email : <br />
                            fardus.dev@gmail.com
                        </h2>
                    </div>
                    <div className='rounded-lg p-5'>
                        <img src={map} alt="" className='lg:mx-0 mx-auto' />
                        <h2 className='text-white font-semibold text-lg mt-4 lg:text-left text-center'>
                            Location : <br />
                            Gazipur District, Dhaka, <br /> Bangladesh
                        </h2>
                    </div>
                </div>
                <form className='col-span-2 inputBgColor lg:p-10 sm:p-6 p-4' onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid md:grid-cols-2 lg:gap-8 sm:gap-5 gap-3'>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-black" htmlFor="yourName">Your Name</label>
                            <input {...register("name", { required: true })}
                                id="yourName" className="block w-full bg-white px-4 py-2 text-black rounded-lg focus:border-pmColor focus:ring-opacity-40 focus:outline-none" type="text" />
                            {errors.name && <span className="text-xs text-red-500">This field is required</span>}
                        </div>
                        <div className="mt-4">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-600" htmlFor="EmailAddress">Email Address</label>
                            <input {...register("email", { required: true })}
                                id="EmailAddress" className="block w-full bg-white px-4 py-2 text-black rounded-lg focus:border-pmColor focus:ring-opacity-40 focus:outline-none" type="email" />
                            {errors.email && <span className="text-xs text-red-500">This field is required</span>}
                        </div>

                    </div>
                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-black" htmlFor="subject">Subject</label>
                        <input {...register("subject", { required: true })}
                            id="subject" className="block w-full bg-white px-4 py-2 text-black rounded-lg focus:border-pmColor focus:ring-opacity-40 focus:outline-none" type="text" />
                        {errors.subject && <span className="text-xs text-red-500">This field is required</span>}
                    </div>
                    <div className="mt-8">
                        <label className="block mb-2 text-sm font-medium text-black" htmlFor="message">Message</label>
                        <textarea {...register("message", { required: true })}
                            id="message" className="block w-full h-[300px] bg-white px-4 py-3 text-black rounded-lg focus:border-pmColor focus:ring-opacity-20 focus:outline-none" type="text" />
                        {errors.message && <span className="text-xs text-red-500">This field is required</span> || <span className="text-xs text-red-500">{error}</span>}
                    </div>
                    <div className="mt-8 rounded-lg md:w-[50%] mx-auto">
                        <button className="group block relative h-12 w-full overflow-hidden overflow-x-hidden rounded-md bg-secColor px-8 py-2 text-neutral-50"><span className="relative z-10 font-jost font-semibold ">Sent Message</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full gradient-button transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;