import React from 'react';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';

const Blog = () => {
    return (
        <div className="carousel w-full pt-12">
            <div id="ide1" className="carousel-item relative w-full">
                <div className="absolute bg-[#f2f2f2] w-full ">

                    <div className="flex justify-between p-3 text-orange-600">
                        <p className="uppercase font-bold">Our Blog</p>
                        <div>
                            <a href="#ide4" className="m-2">❮</a>
                            <a href="#ide2" className="m-2">❯</a>
                        </div>
                    </div>
                </div>
                <div className="my-8 md:my-10 lg:my-16">
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/50-large_default/convallis-pharetra.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/24-large_default/grateful-and-give.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/42-large_default/suspendisse-vel.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/47-large_default/history-month.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>

                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/41-large_default/suspendisse-vel.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/37-large_default/the-storyteller.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/44-large_default/the-book-of-love.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/45-large_default/the-book-of-love.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>

                    </div>
                </div>

            </div>
            <div id="ide2" className="carousel-item relative w-full">
                <div className="absolute bg-[#f2f2f2] w-full ">

                    <div className="flex justify-between p-3 text-orange-600">
                        <p className="uppercase font-bold">Our Blog</p>
                        <div>
                            <a href="#ide1" className="m-2">❮</a>
                            <a href="#ide3" className="m-2">❯</a>
                        </div>
                    </div>
                </div>
                <div className="my-8 md:my-10 lg:my-16">
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/41-large_default/suspendisse-vel.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/37-large_default/the-storyteller.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/44-large_default/the-book-of-love.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/45-large_default/the-book-of-love.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/50-large_default/convallis-pharetra.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/24-large_default/grateful-and-give.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/42-large_default/suspendisse-vel.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/47-large_default/history-month.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                    </div>
                </div>

            </div>
            <div id="ide3" className="carousel-item relative w-full">
                <div className="absolute bg-[#f2f2f2] w-full ">

                    <div className="flex justify-between p-3 text-orange-600">
                        <p className="uppercase font-bold">Our Blog</p>
                        <div>
                            <a href="#ide2" className="m-2">❮</a>
                            <a href="#ide4" className="m-2">❯</a>
                        </div>
                    </div>
                </div>
                <div className='my-8 md:my-10 lg:my-16'>
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/50-large_default/convallis-pharetra.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/24-large_default/grateful-and-give.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/42-large_default/suspendisse-vel.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/47-large_default/history-month.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>

                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/41-large_default/suspendisse-vel.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/37-large_default/the-storyteller.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/44-large_default/the-book-of-love.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/45-large_default/the-book-of-love.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>

                    </div>
                </div>

            </div>
            <div id="ide4" className="carousel-item relative w-full">
                <div className="absolute bg-[#f2f2f2] w-full ">

                    <div className="flex justify-between p-3 text-orange-600">
                        <p className="uppercase font-bold">Our Blog</p>
                        <div>
                            <a href="#ide3" className="m-2">❮</a>
                            <a href="#ide1" className="m-2">❯</a>
                        </div>
                    </div>
                </div>
                <div className='my-8 md:my-10 lg:my-16'>
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/41-large_default/suspendisse-vel.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/37-large_default/the-storyteller.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/44-large_default/the-book-of-love.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/45-large_default/the-book-of-love.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/50-large_default/convallis-pharetra.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/24-large_default/grateful-and-give.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/42-large_default/suspendisse-vel.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                        <FeaturedProduct
                            photo={"https://demo.fieldthemes.com/bookshop/demo1/home2/47-large_default/history-month.jpg"}
                            bookName={"Convallis Pharetra"}
                        ></FeaturedProduct>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Blog;