import React from 'react';
import pic5 from '../img/pic5.jpg'
import pic6 from '../img/pic6.jpg'
import pic7 from '../img/pic7.jpg'
const Project2 = () => {
    return (
        <div className='px-12 mx-auto'>
            <h1 className='text-3xl text-center mt-2'>Perfume-Warehouse-Website</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>

                <img src={pic5} style={{ height: '400px', width: '400px' }} alt="" />
                <img src={pic6} style={{ height: '400px' }} alt="" />
                <img src={pic7} style={{ height: '400px' }} alt="" />
            </div>
            <div >
                <p className='text-primary text-xl my-5'><a href="https://perfumes-project.web.app/" target={'_blank'}>Live site | </a>
                    <a href="https://github.com/ismataraeva2712/perfume-warehouse" target={'_blank'}>Github Client side | </a>
                    <a href="https://github.com/ismataraeva2712/perfume-warehouse-server" target={'_blank'}>Github Server side </a>



                </p>
                <h1 className='text-2xl'>Project Description
                </h1>
                <p>This is the product of perfume warehouse website.it is based on warehouse related.and show some warehouse product and manage this product .Manage as like product adding,removing.</p>

                <h1 className='text-2xl'>Inventory
                </h1>
                <p> Here you will see in home page some product and there is update button.when we will click the button it will go to inventory page.and you can manage product adding and removing.its is protected page.if you login then you will access this page.</p>

                <h1 className='text-2xl'> Manage Inventory
                </h1>
                <p> when you loged in you see manage inventory.Here you will see all product off warehouse.there is delet and update button.if you want any item remove then click the delet button.you see a popup.then you will ok press then item will remove.update same like inventory page .if you click update button then go to inventory and you will update your product.this is also protected page.and at last you see a button add item.</p>

                <h1 className='text-2xl'>Add Item Details
                </h1>
                <p>in manage inventory page you will see a button add item.if you want add a product then click the button you will go to add item page and fill the form and click the add button.item will stock inthe manage inventory page.this page also protected.</p>

                <h1 className='text-2xl'>My item details
                </h1>
                <p>when you loged in you see a page my item.this page is when you add a item that time only your adding item will save this page.</p>

                <h1 className='text-2xl'>Installation and using this project</h1>
                <p>React,MongoDB,Heroku,react bootstrap,react router dom,firebase authentication,react firebase authentication hook,react font-awesome,react-toastify.</p>
            </div>
        </div>
    );
};

export default Project2;