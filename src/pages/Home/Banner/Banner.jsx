import './Banner.css'

import b1 from '../../../assets/b1.jpg'
import b2 from '../../../assets/b2.jpg'
import b3 from '../../../assets/b3.jpg'
import b4 from '../../../assets/b4.jpg'
import BannerText from './BannerText'

const Banner = () => {

    // const borrowBtn = <>
    //     <button className="btn btn-primary">Borrow A Book</button>
    // </>

    return (
        <div className="carousel w-full max-h-[624px] rounded-sm">
            {/* <div id="slide1" className="carousel-item relative w-full">
                <div
                    className="hero min-h-screen items-start"
                    style={{
                        backgroundImage: `url(${b1})`,
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="text-neutral-content pt-44">
                        <div className="max-w-2xl text-[#F2B263]">
                            <h1 className="mb-5 text-5xl font-bold">Explore your <br /> Inner Beauty</h1>
                            <p className="mb-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officia laborum quae provident sequi odit ullam tenetur temporibus. Consequuntur aliquam aut voluptatum, nostrum nam totam odio fugit dolor minima modi unde. Sit repudiandae nostrum quis.
                            </p>
                            {borrowBtn}
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div
                    className="hero min-h-screen items-start"
                    style={{
                        backgroundImage: `url(${b2})`,
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="text-neutral-content pt-44">
                        <div className="max-w-2xl text-[#F2B263]">
                            <h1 className="mb-5 text-5xl font-bold">Explore your <br /> Inner Beauty</h1>
                            <p className="mb-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officia laborum quae provident sequi odit ullam tenetur temporibus. Consequuntur aliquam aut voluptatum, nostrum nam totam odio fugit dolor minima modi unde. Sit repudiandae nostrum quis.
                            </p>
                            {borrowBtn}
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div
                    className="hero min-h-screen items-start"
                    style={{
                        backgroundImage: `url(${b3})`,
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="text-neutral-content pt-44">
                        <div className="max-w-2xl text-[#F2B263]">
                            <h1 className="mb-5 text-5xl font-bold">Explore your <br /> Inner Beauty</h1>
                            <p className="mb-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officia laborum quae provident sequi odit ullam tenetur temporibus. Consequuntur aliquam aut voluptatum, nostrum nam totam odio fugit dolor minima modi unde. Sit repudiandae nostrum quis.
                            </p>
                            {borrowBtn}
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full ">
                <div
                    className="hero min-h-screen items-start"
                    style={{
                        backgroundImage: `url(${b4})`,
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="text-neutral-content pt-44">
                        <div className="max-w-2xl text-[#F2B263]">
                            <h1 className="mb-5 text-5xl font-bold">Explore your <br /> Inner Beauty</h1>
                            <p className="mb-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officia laborum quae provident sequi odit ullam tenetur temporibus. Consequuntur aliquam aut voluptatum, nostrum nam totam odio fugit dolor minima modi unde. Sit repudiandae nostrum quis.
                            </p>
                            {borrowBtn}
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> */}

            {/* 1ST SLIDE */}
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={b1}
                    className="w-full rounded-sm" />
                <div className="absolute rounded-sm  h-full flex items-center transform bg-gradient-to-r from-[#01161ecc] to-[#FAF9F61A]">
                    {/*  */}
                    <BannerText></BannerText>
                    {/*  */}
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* 2ND SLIDE */}
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={b2}
                    className="w-full rounded-sm" />
                <div className="absolute h-full flex items-center transform bg-gradient-to-r from-[#01161ecc] to-[#FAF9F61A]">
                    {/*  */}
                    <BannerText></BannerText>
                    {/*  */}
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* 3RD SLIDE */}
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={b3}
                    className="w-full rounded-sm" />
                <div className="absolute h-full flex items-center transform bg-gradient-to-r from-[#01161ecc] to-[#FAF9F61A]">
                    {/*  */}
                    <BannerText></BannerText>
                    {/*  */}
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* 4TH SLIDE */}
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={b4}
                    className="w-full rounded-sm" />
                <div className="absolute h-full flex items-center transform bg-gradient-to-r from-[#01161ecc] to-[#FAF9F61A]">
                    {/*  */}
                    <BannerText></BannerText>
                    {/*  */}
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
           


            {/* <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={b2}
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={b3}
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={b4}
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;