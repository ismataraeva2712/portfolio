import React from 'react';
import eva from '../img/eva.jpg'
import pic1 from '../img/pic1.jpg'
import sss from '../img/sss.jpg'
import ss1 from '../img/ss1.jpg'
import { Link } from 'react-router-dom';
import resume from '../img/resume.pdf'
const Home = () => {
    return (
        <div className='px-12 mx-auto'>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={eva} class="max-w-sm rounded-full shadow-2xl" />
                    <div>
                        <h1 class="text-3xl font-bold">Hello !  I am</h1>
                        <h1 class="text-3xl font-bold">Ismat Ara</h1>
                        <h1 class="text-3xl font-bold">Front End Web Developer</h1>
                        <p class="py-6">As a Front End web developer, I am passionate about working for a software company where I can harness my talents in web design, front-end, back-end, UI and UX design web development to provide excellent customer service.
                            Making website is my passion.I like to explore new new technologies.</p>
                        <button class="btn btn-primary">Hire Me</button>
                        <button class="btn btn-primary ml-2"><a href={resume} target={'_blank'}>Download Resume</a></button>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-2xl font-bold my-10 text-center">My Project Demo</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src=
                            {pic1} style={{ height: '700px', width: '100%' }} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-primary">Picaso-Painting-Brush-Manufacturer-Website</h2>
                            <h2 className="text-xl text-primary">Full stack website</h2>
                            <p className='text-primary'><a href="https://picaso-painting-brush.web.app/" target={'_blank'}>Live site | </a>
                                <a href="https://github.com/ismataraeva2712/picaso-painting-brush" target={'_blank'}>Github Client side | </a>
                                <a href="https://github.com/ismataraeva2712/picaso-painting-brush-server" target={'_blank'}>Github Server side |</a>



                            </p>
                            <p>● A full-stack website with firebase authentication
                                <br />
                                ● User can purchase,pay and review the product.he can also cancel his order
                                <br />
                                ● Admin can to make an admin,add products,remove products,manage all order
                                <br />
                                <br />
                                Technology Used : React Js,Tailwind css,Daisy UI,React router dom,MongoDb,Node js,Express
                                Js,Firebase, Heroku,stripe.js,JWT</p>
                            <Link to='/project1'> <button className='btn btn-primary'>Explore more</button></Link>
                        </div>
                    </div>
                    {/* ------------ */}
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={ss1} style={{ height: '700px', width: '100%' }} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-primary">Perfume-Warehouse-Website</h2>
                            <h2 className="text-xl text-primary">FullStack Website </h2>
                            <p className='text-primary'><a href="https://perfumes-project.web.app/" target={'_blank'}>Live site | </a>
                                <a href="https://github.com/ismataraeva2712/perfume-warehouse" target={'_blank'}>Github Client side | </a>
                                <a href="https://github.com/ismataraeva2712/perfume-warehouse-server" target={'_blank'}>Github Server side |</a>



                            </p>
                            <p>● A full-stack website with firebase authentication
                                <br />
                                ● User can see all products and update product (increase,decrease)
                                <br />
                                ● User can add a new product and delete product
                                <br /><br />
                                Technology Used : React Js,React Bootstrap,React router dom,MongoDb,Node.
                                js,Express.Js,Firebase, Heroku,JWT</p>
                            <Link to='/project2'> <button className='btn btn-primary'>Explore more</button></Link>
                        </div>
                    </div>
                    {/* ----------------------- */}
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={sss} style={{ height: '700px', width: '100%' }} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-primary">Solo-Tourist-Guide,Independent service privider website</h2>
                            <h2 className="text-xl text-primary">Frontend with react,authentication system</h2>
                            <p className='text-primary'><a href="https://tourist-guide-e4792.web.app/" target={'_blank'}>Live site | </a>
                                <a href="https://github.com/ismataraeva2712/solo-tourist-guide" target={'_blank'}>Github Code Link </a>
                            </p>
                            <p>● A frontend single page website with firebase authentication
                                <br />
                                ● User can see all service packages and choose the service as their need
                                <br />
                                ● When user choose a service and click checkout button it will go to checkout page
                                <br /><br />
                                Technology used : React Js,React router dom,React Bootstrap, Css,Firebase</p>
                            <Link to='/project3'> <button className='btn btn-primary'>Explore more</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;