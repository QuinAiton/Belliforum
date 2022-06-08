import React from 'react';
import Image from 'next/image';
import { CgArrowLongDown } from 'react-icons/cg';
const Team = () => {


    return (
        <>
            <header
                className=" flex flex-col z-10  items-center justify-center h-screen mb-12 mx-auto fixed top-0 left-0 bg-center bg-cover bg-white"
            >
                <div className='text-1xl pb-5 flex items-center mx-auto'>
                    <hr className='border border-primary w-[15vw]' />
                    <p className='uppercase'>Committed to Excellence</p>
                    <hr className='border border-primary w-[15vw]' />
                </div>
                <h1 data-aos='fade-right' className=' p-2 place-self-start text-7xl md:text-7xl uppercase text-primary'>Meet The Team</h1>
                <p data-aos='fade-left' className=' w-10/12 place-self-center my-10 p-5 md:px-[20vw] text-center text-md md:text-xl text-black'>
                    Belliforum advocates professional solutions to High Net Worth clients ranging from Philanthropy, Tax Planning, Private Equity, Business Consulting, & Exclusive Market Access.
                    We work with a select group of sought after industry experts proven in their field of expertise to provide powerful solutions.</p>
                <div className='flex flex-col justify-center items-center gap-2 relative -bottom-12'>
                    <p className='text-primary'>scroll</p>
                    <CgArrowLongDown className=' text-2xl animate-bounce' />
                </div>
            </header>

            <section className='grid gap-10 my-40 z-20 relative top-[80vh] border-separate rounded-xl  '>

                <div data-aos='fade-in' className=' bg-white grid grid-rows-3 w-10/12 h-[60vh] mx-auto drop-shadow-2xl shadow-xl'>
                    <div className='relative row-span-1 w-full h-full rounded-full'>
                        <Image
                            src='/assets/grant.webp'
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                    <div className='bg-secondary row-span-2 flex flex-col items-center justify-center gap-3'>
                        <h2 data-aos='fade-right' className='text-3xl uppercase text-primary'>Grant</h2>
                        <p data-aos='fade-left'>Partner Relations</p>
                        <hr data-aos='fade-right' className='w-[30vw] border border-primary mt-1 mb-2' />
                        <p data-aos='fade-left' className='px-5 pb-5'>Having experience in international business ventures, Grant is a resource to connect people with ideas from around the world.</p>
                    </div>
                </div>

                <div className=' bg-white grid grid-rows-3 w-10/12 h-[60vh] mx-auto drop-shadow-xl shadow-xl'>

                    <div className='relative row-span-1 w-full h-full rounded-full'>
                        <Image
                            src='/assets/mike.webp'
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                    <div className='bg-secondary row-span-2 flex flex-col items-center justify-center gap-3'>
                        <h2 data-aos='fade-right' className='text-3xl uppercase text-primary'>Mike</h2>
                        <p data-aos='fade-left'>Senior Advisor</p>
                        <hr data-aos='fade-right' className='w-[30vw] border border-primary mt-2 mb-2' />
                        <p data-aos='fade-left' className='px-5 pb-5'>Mike has worked in some of the most challenging and hostile environments.  This experience, along with a mastery of sales and online sales experience had made him the go-to for companies looking to increase their bottom line.</p>

                    </div>
                </div>

                <div className=' bg-white grid grid-rows-3 w-10/12 h-[60vh] mx-auto drop-shadow-xl shadow-xl'>
                    <div className='relative row-span-1 w-full h-full rounded-full'>
                        <Image
                            src='/assets/miji.webp'
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                    <div className='bg-secondary row-span-2 flex flex-col items-center justify-center gap-3'>
                        <h2 data-aos='fade-right' className='text-3xl uppercase text-primary'>Miji</h2>
                        <p data-aos='fade-left'>Consultant Korea</p>
                        <hr data-aos='fade-right' className='w-[30vw] border border-primary mt-2 mb-2' />
                        <p data-aos='fade-left' className='px-5 pb-5'>Miji has global business experience and specializes in Korean tax planning for both local and international citizens in North America and Korea. </p>

                    </div>
                </div>

                <div className=' bg-white grid grid-rows-3 w-10/12 h-[60vh] mx-auto drop-shadow-xl shadow-xl'>
                    <div className='relative row-span-1 w-full h-full rounded-full'>
                        <Image
                            src='/assets/jean-paul.webp'
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                    <div className='bg-secondary row-span-2 flex flex-col items-center justify-center gap-3'>
                        <h2 data-aos='fade-right' className='text-3xl uppercase text-primary'>Jean-Paul</h2>
                        <p data-aos='fade-left'>Digital Currency & Trading Manager</p>
                        <hr data-aos='fade-right' className='w-[30vw] border border-primary mt-2 mb-2' />
                        <p data-aos='fade-left' className='px-5 pb-5'>After successfully building digital platforms for Canadian and International Financial Institutions, Jean Paul works with Belliforum as a COO consultant and investment manager. </p>

                    </div>
                </div>

                <div className=' bg-white grid grid-rows-3 w-10/12 h-[60vh] mx-auto drop-shadow-xl shadow-xl'>
                    <div className='relative row-span-1 w-full h-full rounded-full'>
                        <Image
                            src='/assets/lawrence.webp'
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                    <div className='bg-secondary row-span-2 flex flex-col items-center justify-center gap-3'>
                        <h2 data-aos='fade-right' className='text-3xl uppercase text-primary'>Lawrence</h2>
                        <p data-aos='fade-left'>Lawyer</p>
                        <hr data-aos='fade-right' className='w-[30vw] border border-primary mt-2 mb-2' />
                        <p data-aos='fade-left' className='px-5 pb-5'>We are proud to have Lawrence as our philanthropy lawyer and council. </p>

                    </div>
                </div>

                <div className=' bg-white grid grid-rows-3 w-10/12 h-[60vh] mx-auto drop-shadow-xl shadow-xl'>
                    <div className='relative w-full h-full rounded-full'>
                        <Image
                            src='/assets/river.webp'
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                    <div className='bg-secondary row-span-2 flex flex-col items-center justify-center gap-3'>
                        <h2 data-aos='fade-right' className='text-3xl uppercase text-primary'>River Watts</h2>
                        <p data-aos='fade-left'>Senior Advisor</p>
                        <hr className='w-[30vw] border border-primary mt-2 mb-2' />
                        <p className='px-5 pb-5'>Since joining our team, River Watts has played a crucial role in the continued success of the business. Their exceptional skill set, true passion and creativity has inspired massive growth.</p>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Team;