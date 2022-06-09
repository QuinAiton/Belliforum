import React from 'react';
import SocialButtons from './SocialButtons';
const Footer = ({ isRelative }) => {
    console.log(isRelative);
    return (
        <div className={`z-50 h-auto  w-screen bg-primary py-2 ${isRelative ? "relative top-[90vh] md:top-[100vh] " : "static"}`}>
            <h4 className='text-white text-center mb-5'>Follow Us</h4>
            <SocialButtons />
        </div>
    );
};

export default Footer;