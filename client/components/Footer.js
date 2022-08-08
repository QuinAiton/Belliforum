import React from 'react';
import SocialButtons from './SocialButtons';
const Footer = ({ isRelative, disclaimer }) => {
    return (
        <div className={`z-50 h-auto  w-screen bg-primary py-2 ${isRelative ? "relative top-[90vh] md:top-[100vh] " : "static"}`}>
            <h4 className='text-white text-center mb-5'>Follow Us</h4>
            <SocialButtons /> 
            <p className='text-center text-[9px] px-[10vw] md:px-[15vw] mx-auto pt-5 text-white'>{disclaimer}</p>
        </div>
    );
};

export default Footer;