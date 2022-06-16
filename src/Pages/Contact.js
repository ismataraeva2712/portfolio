import React, { useRef } from 'react';



import { useForm } from 'react-hook-form';

import emailjs from '@emailjs/browser';



const Contact = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const form = useRef();

    const onSubmit = data => {
        // console.log(data);
        emailjs.sendForm('service_f2y1ich', 'template_j0919fj', form.current, 'YmjvZyPBUg4R12MQt')
            .then((result) => {

                reset()
                // console.log(result.text);
            }, (error) => {
                console.log("error");

            });


    }

    return (
        <div className="mt-5 md:mt-0 md:min-h-screen flex  justify-center items-center">

            <div className="w-11/12 h-[550px] md:w-[35rem] md:h-[50rem] lg:w-[70rem] lg:h-[35rem] rounded-xl mx-auto text-black overflow-y-auto">
                <div>
                    <div className='text-center my-5' >
                        <p className='md:text-lg'>Feel Free To Contact Me Anytimes</p>
                        <h1 className="text-4xl font-bold my-3">
                            My <span className='text-primary'>Contact</span>
                        </h1>

                    </div>


                </div>

                <div className='w-10/12 lg:w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-2'>

                    <div className="card rounded lg:rounded-md flex-shrink-0 bg-transparent md:border-2 border-primary w-full max-w-md">
                        <div className="card-body text-left">
                            <h1 className='text-center text-2xl '>Contact Info</h1>
                            <p className='text-center '>Feel free to contact me!</p>

                            <div className='flex flex-col md:flex-row items-center text-center md:text-left pt-5 md:pt-0'>

                                <div className='p-2'>
                                    <h1 className='font-semibold '>Name</h1>
                                    <p className='text-primary'>Ismat Ara</p>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row items-center text-center md:text-left'>

                                <div className='p-2'>
                                    <h1 className='font-semibold '>Location</h1>
                                    <p className='text-primary'>Abudhabi,UAE</p>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row items-center text-center md:text-left'>

                                <div className='p-2'>
                                    <h1 className='font-semibold '>Call Me</h1>
                                    <a href='tel:1703099425' className='text-primary'>( +971 )581262006</a>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row items-center text-center md:text-left'>

                                <div className='p-2'>
                                    <h1 className='font-semibold '>Email Me</h1>
                                    <a
                                        href='mailto: mahfuzmoyeen01@gmail.com' className='text-primary'>evaismat2@gmail.com</a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="card rounded border-2 border-primary lg:rounded-md flex-shrink-0 bg-transparent w-full max-w-md">
                        <div className="card-body">
                            <h1 className='text-center text-2xl '>Contact me</h1>
                            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                                <div className='flex flex-col lg:flex-row gap-2 justify-between'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text ">Name</span>
                                        </label>
                                        <input type="text" placeholder="Your Name here" className="input input-bordered"
                                            {...register("name", {
                                                required: {
                                                    value: true,
                                                    message: 'Name is Required'
                                                }
                                            })} />
                                        <label className="label">
                                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                        </label>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text ">Subject</span>
                                        </label>
                                        <input type="text" placeholder="Your Subject" className="input input-bordered"  {...register("subject", {
                                            required: {
                                                value: true,
                                                message: 'Subject is Required'
                                            }
                                        })} />
                                        <label className="label">
                                            {errors.subject?.type === 'required' && <span className="label-text-alt text-red-500">{errors.subject.message}</span>}
                                        </label>
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Email</span>
                                    </label>
                                    <input type="email" placeholder="Your email" className="input input-bordered"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'email is Required'
                                            }
                                        })} />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Message</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered" placeholder="Your message"
                                        {...register("message", {
                                            required: {
                                                value: true,
                                                message: 'message is Required'
                                            },
                                            maxLength: {
                                                value: 250,
                                                message: 'You use maximum 250 characters'
                                            }
                                        })}
                                    ></textarea>
                                    <label className="label">
                                        {errors.message?.type === 'required' && <span className="label-text-alt text-red-500">{errors.message.message}</span>}

                                        {errors.message?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors.message.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control">
                                    <button type='submit' className="btn block mx-auto btn-primary">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>

            </div>


        </div>
    );
};

export default Contact;
