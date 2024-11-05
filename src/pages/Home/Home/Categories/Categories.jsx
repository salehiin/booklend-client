import { Parallax } from 'react-parallax';
import coverImage from '../../../../assets/coverImg.jpg';
// import Cover from '../../../Shared/Cover/Cover';
import Category from '../Category/Category';

const Categories = ({ img }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={coverImage}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div
                className="hero " style={{
                    backgroundImage: `url("${img}")`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content w-3/4 text-center">
                    <div className="">
                        <div className='text-[#F2B263] p-12'>
                            <h1 className='text-3xl font-bold p-4'>Explore Our Categories</h1>
                            <p className='text-lg text-white'>Whether you're looking for the latest bestsellers, classic literature, or specific genres like children's books, science fiction, or self-help, we have something for everyone. Dive into each category to find curated collections that make it easy to explore and uncover new favorites.</p>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            <Category
                                route={"kids"}
                                imageUrl={"https://demo.fieldthemes.com/bookshop/demo1/home2/24-large_default/grateful-and-give.jpg"}
                                categoryName={"Kids"}
                            ></Category>
                            <Category
                                imageUrl={"https://demo.fieldthemes.com/bookshop/demo1/home2/47-large_default/history-month.jpg"}
                                categoryName={"Sci-Fi & Fantasy"}
                            ></Category>
                            <Category
                                imageUrl={"https://demo.fieldthemes.com/bookshop/demo1/home2/42-large_default/suspendisse-vel.jpg"}
                                categoryName={"Literature & Fiction"}
                            ></Category>
                            <Category
                                imageUrl={"https://demo.fieldthemes.com/bookshop/demo1/home2/37-large_default/the-storyteller.jpg"}
                                categoryName={"Arts & Music"}
                            ></Category>
                            <Category
                                imageUrl={"https://demo.fieldthemes.com/bookshop/demo1/home2/44-large_default/the-book-of-love.jpg"}
                                categoryName={"Health & Fitness"}
                            ></Category>
                            <Category
                                imageUrl={"https://demo.fieldthemes.com/bookshop/demo1/home2/47-large_default/history-month.jpg"}
                                categoryName={"Computers & Tech"}
                            ></Category>
                            <Category
                                imageUrl={"https://demo.fieldthemes.com/bookshop/demo1/home2/24-large_default/grateful-and-give.jpg"}
                                categoryName={"Comic"}
                            ></Category>
                            <Category
                                imageUrl={"https://demo.fieldthemes.com/bookshop/demo1/home2/47-large_default/history-month.jpg"}
                                categoryName={"Science & Math"}
                            ></Category>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Categories;