import React from 'react';

const Newsletter = () => {
    return (
        <div className='p-24 flex flex-col gap-8'>
            {/* <h2>Stay Updated with Our Latest News</h2> */}
            <h2 className='text-3xl font-bold text-[#F2B263]'>Subscribe to our Newsletters</h2>
            <p className='text-[#333333]'>Don’t miss out on the latest updates, tips, and exclusive offers! Subscribe to our newsletter to get timely insights and news delivered straight to your inbox. Join our community and stay connected with what’s happening – we’re excited to keep you in the loop!</p>
            <label className="input input-bordered flex items-center gap-2 ">
                <input type="text" className="grow " placeholder="Enter your email" />
                <button className="btn btn-outline hover:bg-transparent hover:text-[#F2B263] bg-[#F2B263] text-[#333333]
                ">Subscribe</button>
            </label>
        </div>
    );
};

export default Newsletter;