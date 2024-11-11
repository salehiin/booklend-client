import React from 'react';
import Blog from '../Home/Blog/Blogs';
import Newsletter from '../Home/Newsletter/Newsletter';

const Hub = () => {
    return (
        <div className='grid lg:grid-cols-2 justify-center items-center'>
            <Blog></Blog>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Hub;