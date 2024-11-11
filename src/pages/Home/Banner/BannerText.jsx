import { Link } from "react-router-dom";


const BannerText = () => {
    return (
        <div>
            <div className="text-orange-600 text-left md:space-y-7 w-2/3 md:w-1/2 pl-16 lg:pl-20">
                <h1 className="mb-5 text-4xl lg:text-5xl font-bold">Explore your <br /> Inner Beauty</h1>
                <p className="mb-5 text-white">
                Welcome to your all-in-one library platform. Discover a vast collection of books, easily reserve and borrow, track your reading history, explore new arrivals, and manage your account seamlessly. Experience a world of knowledge right at your fingertips. Enjoy a world of knowledge right at your fingertips.
                </p>
                <Link to="/books"  className="btn text-[#01161e] bg-orange-600 hover:text-orange-600">Borrow A Book</Link>
            </div>
        </div>
    );
};

export default BannerText;