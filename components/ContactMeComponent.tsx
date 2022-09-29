import React from 'react';
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";
type Props = {}
type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
  };

function ContactMeComponent({}: Props) {
    const { register, handleSubmit} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:yun.sovannborith@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

        <div className='relative top-5 flex flex-col space-y-5'>
            <h4 className='text-2xl font-semibold text-center'>
                I have got just what you need.{" "}
                <span className='underline decoration-[#F7AB0A]/50'>Lets Talk.</span>
            </h4>
            <div className='space-y-5'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>+85512 544 618</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>yun.sovannborith@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-10 w-10 animate-pulse'/>
                    <p className='text-2xl'>#7A, St 7, Phnom Penh, Cambodia.</p>
                    {/* Sangkat Brakar, Khan Dangkor,  */}
                </div>
            </div>
            <form className='flex flex-col  space-y-2 w-fit mx-auto'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='flex space-x-2'>
                    <input {...register("name")} className="contactInput" type="text" placeholder='Name' />
                    <input {...register("email")} className="contactInput" type="email" placeholder='Email'/>
                </div>
                <input {...register("subject")} className="contactInput" type="text" placeholder='Subject'/>
                <textarea {...register("message")}  className="contactInput" placeholder='Message'/>
                <button type="submit" className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMeComponent