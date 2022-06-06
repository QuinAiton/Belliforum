import React from 'react';
import SocialButtons from './SocialButtons';
const Footer = () => {
    return (
        <div className='h-auto w-screen bg-primary py-2'>
            <h4 className='text-white text-center mb-5'>Follow Us</h4>
            <SocialButtons />
        </div>
    );
};

export default Footer;