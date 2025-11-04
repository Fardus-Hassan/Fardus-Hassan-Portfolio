// src/components/Contact.jsx
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useState } from 'react';
import email from '../../assets/gmail.png';
import phone from '../../assets/phone.png';
import map from '../../assets/map.png';

const Contact = () => {
  const [error, setError] = useState(null);
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setError('');
    setSending(true);

    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      reset();
      toast.success('Message Sent Successfully!');
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to send message. Please try again.');
      toast.error('Failed to send message!');
    } finally {
      setSending(false);
    }
  };

  return (
    <div id='contact' className='xl:container max-w-[90%] lg:my-[150px] lg:mt-[150px] sm:my-[100px] my-20 xl:w-[95%] mx-auto'>
      <div className='lg:flex justify-between items-center'>
        {/* Left Side */}
        <div className='lg:mx-0 mx-auto lg:text-left text-center'>
          <div className='mb-6'>
            <h3 className='font-bold font-jost lg:text-xl gradient-color'>&lt;Contact/&gt;</h3>
            <h1 className="mt-2 text-black font-jost lg:text-[44px] text-[30px] font-bold">
              Contact With Me
            </h1>
          </div>

          <div className=''>
            <div className='rounded-lg p-5 flex lg:justify-start justify-center items-end gap-6'>
              <img src={phone} alt="Phone" className='w-10' />
              <h2 className='text-black font-semibold mt-4 text-left'>
                Phone : <br />
                +880 1722092675
              </h2>
            </div>
            <div className='rounded-lg p-5 flex lg:justify-start justify-center items-end gap-6'>
              <img src={email} alt="Email" className='w-10' />
              <h2 className='text-black font-semibold mt-4 text-left'>
                Email : <br />
                fardus.dev@gmail.com
              </h2>
            </div>
            <div className='rounded-lg p-5 flex lg:justify-start justify-center items-end gap-6'>
              <img src={map} alt="Location" className='w-10 pb-5'/>
              <h2 className='text-black font-semibold mt-4 text-left'>
                Location : <br />
                Gazipur District, Dhaka, <br /> Bangladesh
              </h2>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          className='col-span-2 lg:p-10 sm:p-6 p-4 lg:w-[60%] xl:w-[50%]'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='grid md:grid-cols-2 lg:gap-8 sm:gap-5 gap-3'>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-black" htmlFor="yourName">Your Name</label>
              <input
                {...register("name", { required: "Name is required" })}
                id="yourName"
                className="block w-full px-4 py-3 text-black rounded-lg border border-opacity-20 border-secColor outline-none"
                type="text"
              />
              {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-black" htmlFor="EmailAddress">Email Address</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email"
                  }
                })}
                id="EmailAddress"
                className="block w-full px-4 py-3 text-black rounded-lg border border-opacity-20 border-secColor outline-none"
                type="email"
              />
              {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
            </div>
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-black" htmlFor="subject">Subject</label>
            <input
              {...register("subject", { required: "Subject is required" })}
              id="subject"
              className="block w-full px-4 py-3 text-black rounded-lg border border-opacity-20 border-secColor outline-none"
              type="text"
            />
            {errors.subject && <span className="text-xs text-red-500">{errors.subject.message}</span>}
          </div>

          <div className="mt-8">
            <label className="block mb-2 text-sm font-medium text-black" htmlFor="message">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              id="message"
              rows="5"
              className="block w-full px-4 py-3 text-black rounded-lg border border-opacity-20 border-secColor outline-none resize-none"
            />
            {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
            {error && <span className="text-xs text-red-500 block mt-1">{error}</span>}
          </div>

          <div className="mt-8 rounded-lg md:w-[50%] lg:mx-0 mx-auto">
            <button
              type="submit"
              disabled={sending}
              className="group relative h-12 w-full overflow-hidden rounded-md bg-secColor px-8 py-2 text-neutral-50 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
            >
              <span className="relative z-10 font-jost font-semibold">
                {sending ? 'Sending...' : 'Send Message'}
              </span>
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full gradient-button transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;