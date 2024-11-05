import React from 'react';

const Newsletter = () => {
    return (
        <div className=''>
            <h2>Subscribe to our Newsletters</h2>
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
            <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Enter your email" />
                <button className="btn btn-info">Subscribe</button>
            </label>
        </div>
    );
};

export default Newsletter;