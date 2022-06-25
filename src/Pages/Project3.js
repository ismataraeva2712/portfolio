import React from 'react';
import pic8 from '../img/pic8.jpg'
import pic9 from '../img/pic9.jpg'
const Project3 = () => {
    return (
        <div className='px-12 mx-auto'>
            <h1 className='text-3xl text-center mt-2'>Perfume-Warehouse-Website</h1>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-4 mt-5'>

                <img src={pic8} style={{ height: '400px', width: '400px' }} alt="" />
                <img src={pic9} style={{ height: '400px' }} alt="" />

            </div>
            <div >
                <p className='text-primary my-5 text-xl'><a href="https://tourist-guide-e4792.web.app/" target={'_blank'}>Live site | </a>
                    <a href="https://github.com/ismataraeva2712/solo-tourist-guide" target={'_blank'}>Github Code Link </a>
                </p>
                <h1 className='text-2xl'>Project Description
                </h1>
                <p>This is independent service provider website.it is based on Tourist guide related.and show some services of the guide.</p>

                <h1 className='text-2xl'>service details

                </h1>
                <p>Here you will see in home page some services of the tourist guide.He offer many kind of tour package.Some luxurious tour package,some budget tour package,some deshi luxurious sea hill tour package.</p>

                <h1 className='text-2xl'>Checkout Option

                </h1>
                <p> In service area you will sea checkout button if you click it will going to login page if you log in then you entered this page..this is protected page</p>

                <h1 className='text-2xl'>For booking must be login

                </h1>
                <p>If you wanna booking any tour package you should at first sign up and login.then you will can easily booking.there are many option of sign up and login.. you can provide your name, email and password then easily sign up and login.if you wanna use social login as like google sign in or github sign , these option alse have this website.</p>



                <h1 className='text-2xl'>Installation and using this project</h1>
                <p>React,react bootstrap,react router dom,firebase authentication,react firebase authentication hook,react font-awesome,react-toastify.</p>
            </div>
        </div>
    );
};

export default Project3;