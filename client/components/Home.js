import React from 'react';
import Image from 'next/image';
const Home = () => {
    return (


        <>
            <header
                className="z-10 relative flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-sailboat-image "
            >
                <div className="z-20 relative w-full h-full bg-black bg-opacity-40 flex flex-col gap-5b justify-center items-center p-5 text-white">
                    <h1 className='text-5xl md:text-7xl'>Belliforum</h1>
                    <hr className='w-1/2 border border-secondary mt-2 mb-5' />
                    <p className='text-2xl'>Providing What You Need</p>
                    <p className='text-2xl'>When you need it</p>
                </div>
            </header>
            <div className='my-40 z-20 relative'>
                <div className=" flex flex-col justify-center items-center max-w-lg m-auto mt-40 ">
                    <p className='text-3xl text-primary'>Powerful</p>
                    <p className='text-3xl text-primary'>Unconventional</p>
                    <p className='text-3xl text-primary'>Solutions</p>
                    <hr className='w-1/2 border border-primary mt-2' />

                </div>
                <p className='my-10 p-10 text-center text-md'>
                    Belliforum advocates professional solutions to High Net Worth clients ranging from Philanthropy, Tax Planning, Private Equity, Business Consulting, & Exclusive Market Access.
                    We work with a select group of sought after industry experts proven in their field of expertise to provide powerful solutions.</p>
            </div>
            <section
                className=" flex items-center justify-center h-[40vh] mb-12 bg-fixed bg-center bg-cover bg-solutions-image "
            >
                <div className="-z-0 w-full h-full bg-fixed bg-black bg-opacity-40 flex flex-col gap-5b justify-center items-center p-5 text-white">
                    <p className='-z-10 p-5 text-center text-3xl fixed top-1/2'>Combined 100+ years of financial industry experience</p>
                </div>
            </section>
            <div className='my-40 z-20 relative'>
                <div className=" flex flex-col justify-center items-center max-w-lg m-auto ">
                    <p className='text-3xl text-center text-primary'>WHAT MAKES US DIFFERENT?</p>
                    <hr className='w-1/2 border border-primary mt-2' />
                </div>
                <p className=' p-10 text-center text-md'>
                    Brand Loyalty must be earned and re-earned every day.  Like fashion, what's in style and hot today, may change tomorrow.  Belliforum operates with a combined 100+ years of financial industry experience knowing that today's best may not always be.  We are not tied to any brand, institution, product, service, or firm.  We are here to find the best of the best and adapt immediatly.</p>
            </div>
            <section
                className="z-10 relative flex items-center justify-center h-screen bg-fixed bg-center bg-cover bg-yacht-image "
            >
                <div className="z-20 relative w-full h-full bg-black bg-opacity-[55%] flex flex-col gap-5b justify-center items-center p-5 text-white">
                    <h1 className='text-4xl md:text-4xl'>Why Belliforum?</h1>
                    <hr className='w-1/2 border border-secondary mt-2 mb-5' />
                    <p className='text-lg p-5'>Because we're all about amplifying fun!  In plain English, we help you achieve what you want to do more rapidly and efficently!  Whatever that vision is, we want to be a part of it with you and have fun together doing it.  Our goal is to make your life better, to have more fun and do more of whatever it is that makes you want to get up in the morning.</p>
                </div>
            </section>
        </>
    );
};

export default Home;