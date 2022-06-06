import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const SocialButtons = () => {
    return (
        <div className='flex gap-5 text-secondary items-end justify-center'>
            <a target='_blank' href='#' className=' flex  justify-center items-center w-auto h-auto rounded-full border hover:bg-secondary hover:text-primary transition-colors'>
                <FaLinkedinIn className='text-2xl m-2' />
            </a>
            <a target='_blank' href='#' className=' flex  justify-center items-center w-auto h-auto rounded-full border hover:bg-secondary hover:text-primary transition-colors'>
                <FaFacebookF className='text-2xl m-2' />
            </a>
            <a target='_blank' href='#' className=' flex  justify-center items-center w-auto h-auto rounded-full border hover:bg-secondary hover:text-primary transition-colors'>
                <FaTwitter className='text-2xl m-2' />
            </a>
        </div>
    );
};

export default SocialButtons;