import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Image from 'next/image';
const about = () => {
    return (
        <>
            <Sidebar />
            <section className='pt-20 mb-10'>
                <h1 className='text-4xl text-center'>
                    About
                </h1>
                <div className=' mt-10 h-auto flex flex-wrap justify-center gap-10'>

                    <div className=' grid grid-rows-2 w-10/12 h-[50vh] mx-auto drop-shadow-xl shadow-xl'>
                        <div className='relative w-full h-full rounded-full'>
                            <Image
                                src='/assets/grant.webp'
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                        <div className='bg-secondary flex flex-col items-center justify-center gap-3'>
                            <h2 className='text-3xl uppercase text-primary'>Grant</h2>
                            <p>Partner Relations</p>
                            <hr className='w-[30vw] border border-primary mt-2 mb-5' />

                        </div>
                    </div>

                    <div className=' grid grid-rows-2 w-10/12 h-[50vh] mx-auto drop-shadow-xl shadow-xl'>
                        <div className='relative w-full h-full rounded-full'>
                            <Image
                                src='/assets/mike.webp'
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                        <div className='bg-secondary flex flex-col items-center justify-center gap-3'>
                            <h2 className='text-3xl uppercase text-primary'>Mike</h2>
                            <p>Senior Advisor</p>
                            <hr className='w-[30vw] border border-primary mt-2 mb-5' />

                        </div>
                    </div>

                    <div className=' grid grid-rows-2 w-10/12 h-[50vh] mx-auto drop-shadow-xl shadow-xl'>
                        <div className='relative w-full h-full rounded-full'>
                            <Image
                                src='/assets/miji.webp'
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                        <div className='bg-secondary flex flex-col items-center justify-center gap-3'>
                            <h2 className='text-3xl uppercase text-primary'>Miji</h2>
                            <p>Consultant Korea</p>
                            <hr className='w-[30vw] border border-primary mt-2 mb-5' />

                        </div>
                    </div>

                    <div className=' grid grid-rows-2 w-10/12 h-[50vh] mx-auto drop-shadow-xl shadow-xl'>
                        <div className='relative w-full h-full rounded-full'>
                            <Image
                                src='/assets/jean-paul.webp'
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                        <div className='bg-secondary flex flex-col items-center justify-center gap-3'>
                            <h2 className='text-3xl uppercase text-primary'>Jean-Paul</h2>
                            <p>Digital Currency & Trading Manager</p>
                            <hr className='w-[30vw] border border-primary mt-2 mb-5' />

                        </div>
                    </div>

                    <div className=' grid grid-rows-2 w-10/12 h-[50vh] mx-auto drop-shadow-xl shadow-xl'>
                        <div className='relative w-full h-full rounded-full'>
                            <Image
                                src='/assets/lawrence.webp'
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                        <div className='bg-secondary flex flex-col items-center justify-center gap-3'>
                            <h2 className='text-3xl uppercase text-primary'>Lawrence</h2>
                            <p>Lawyer</p>
                            <hr className='w-[30vw] border border-primary mt-2 mb-5' />

                        </div>
                    </div>

                    <div className=' grid grid-rows-2 w-10/12 h-[50vh] mx-auto drop-shadow-xl shadow-xl'>
                        <div className='relative w-full h-full rounded-full'>
                            <Image
                                src='/assets/river.webp'
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                        <div className='bg-secondary flex flex-col items-center justify-center gap-3'>
                            <h2 className='text-3xl uppercase text-primary'>River Watts</h2>
                            <p>Senior Advisor</p>
                            <hr className='w-[30vw] border border-primary mt-2 mb-5' />

                        </div>
                    </div>
                </div>
                {/* <Footer /> */}
            </section>
        </>
    );
};

export default about;;;