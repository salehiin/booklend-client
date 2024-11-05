import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import FeaturedProduct from '../Home/FeaturedProduct/FeaturedProduct';

const Featured = () => {



    return (
        <div className="carousel w-full pt-12">
            <div id="lide1" className="carousel-item relative w-full">
                <div className="absolute bg-[#f2f2f2] w-full ">

                    <div className="flex justify-between p-3 text-[#F2B263]">
                        <p className="uppercase font-bold">Featured Books</p>
                        <div>
                            <a href="#lide4" className="m-2">❮</a>
                            <a href="#lide2" className="m-2">❯</a>
                        </div>
                    </div>
                </div>
                <div className="my-16">
                    <div className="flex">
                        
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
                    <div className="flex">
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
            <div id="lide2" className="carousel-item relative w-full">
                <div className="absolute bg-[#f2f2f2] w-full ">

                    <div className="flex justify-between p-3 text-[#F2B263]">
                        <p className="uppercase font-bold">Featured Books</p>
                        <div>
                            <a href="#lide1" className="m-2">❮</a>
                            <a href="#lide3" className="m-2">❯</a>
                        </div>
                    </div>
                </div>
                <div className="my-16">
                    <div className="flex">
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
                    <div className="flex">
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
            <div id="lide3" className="carousel-item relative w-full">
                <div className="absolute bg-[#f2f2f2] w-full ">

                    <div className="flex justify-between p-3 text-[#F2B263]">
                        <p className="uppercase font-bold">Featured Books</p>
                        <div>
                            <a href="#lide2" className="m-2">❮</a>
                            <a href="#lide4" className="m-2">❯</a>
                        </div>
                    </div>
                </div>
                <div className='my-16'>
                    <div className="flex">
                        
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
                    <div className="flex">
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
            <div id="lide4" className="carousel-item relative w-full">
                <div className="absolute bg-[#f2f2f2] w-full ">

                    <div className="flex justify-between p-3 text-[#F2B263]">
                        <p className="uppercase font-bold">Featured Books</p>
                        <div>
                            <a href="#lide3" className="m-2">❮</a>
                            <a href="#lide1" className="m-2">❯</a>
                        </div>
                    </div>
                </div>
                <div className='my-16'>
                    <div className="flex">
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
                    <div className="flex">
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

export default Featured;