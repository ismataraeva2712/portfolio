import React from 'react';
import pic4 from '../img/pic4.jpg'
import pic2 from '../img/pic2.jpg'
import pic3 from '../img/pic3.jpg'
const Project1 = () => {
    return (
        <div className='px-12 mx-auto'>
            <h1 className='text-3xl text-center mt-2'>Picaso-Painting-Brush-Manufacturer-Website</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>

                <img src={pic4} style={{ height: '400px' }} alt="" />
                <img src={pic2} style={{ height: '400px' }} alt="" />
                <img src={pic3} style={{ height: '400px' }} alt="" />
            </div>
            <div >
                <p className='text-primary text-xl my-5'><a href="https://picaso-painting-brush.web.app/" target={'_blank'}>Live site | </a>
                    <a href="https://github.com/ismataraeva2712/picaso-painting-brush" target={'_blank'}>Github Client side | </a>
                    <a href="https://github.com/ismataraeva2712/picaso-painting-brush-server" target={'_blank'}>Github Server side </a>



                </p>
                <h1 className='text-2xl'> Project Description</h1>
                <p>This is the painting brush tools typs website.it is based manufacturer related.and show some tools and purchase this product .You have to purchase at least minimum quantity of that product.</p>

                <h1 className='text-2xl'>my order and Payment</h1>
                <p> when you loged in you see DashBoard.click dashboard you will see my order section. it will show delete and pay button.you can easily cancel your order or you can easily pay.when press pay button it will go payment page and you see bank card option .you give your credit card number and some details then click pay button your paymaent will be success and see aalso transaction id.</p>

                <h1 className='text-2xl'>  Review section and my profile</h1>
                <p> when you loged in you see DashBoard.click dashboard you will see Add a review section.as a customer you can review our product.and also see my profile section..here you see some information of you.and you also easily update your profile.</p>

                <h1 className='text-2xl'> For Admin section</h1>
                <p> When an admin login he will see in dashboard make admin,add product,manage order,manage product.in make admin page he easily make an admin any user.add product page he will add a tools item.manage order page he will see which customer not paied yet he can easily cancle that order..and which customer pay allready admin will see pending.when he click pending order will be shipped.and manage product page he can easily delete any product.</p>

                <h1 className='text-2xl'> Log in system,blogs,protfolio</h1>
                <p>In this application you login via email pass or google sign in system.also using token..after 1 hour it will be log out .in blog section you see some information and portfolio page you can see my details</p>

                <h1 className='text-2xl'>Installation and using this project</h1>
                <p> React,MongoDB,Heroku,Tailwin,daisyui,stripe js,react query,react hook form,react router dom,firebase authentication,react firebase authentication hook,react font-awesome,react-toastify.</p>
            </div>
        </div>
    );
};

export default Project1;