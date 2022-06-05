import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='h-auto w-screen bg-primary py-2'>
            <h4 className='text-white text-center mb-5'>Follow Us</h4>
            <div className='flex gap-5 text-secondary items-end justify-center'>
                <a target='_blank' href='#' className=' flex  justify-center items-center w-auto h-auto rounded-full border hover:bg-secondary hover:text-primary'>
                    <FaLinkedinIn className='text-2xl m-2' />
                </a>
                <a target='_blank' href='#' className=' flex  justify-center items-center w-auto h-auto rounded-full border hover:bg-secondary hover:text-primary'>
                    <FaFacebookF className='text-2xl m-2' />
                </a>
                <a target='_blank' href='#' className=' flex  justify-center items-center w-auto h-auto rounded-full border hover:bg-secondary hover:text-primary'>
                    <FaTwitter className='text-2xl m-2' />
                </a>
            </div>
        </div>
    );
};

export default Footer;