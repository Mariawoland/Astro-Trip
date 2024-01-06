'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import '@/styles.css';
import { TESTIMONIALS } from '@/constants';

const Testimonials = () => {
    return (
        <div className='p-6 bg-dark-1'>
            <h1 className='sm:text-[2.8rem] text-[1.8rem] px-2 pb-10 pt-2 text-white-2'>Testimonials.</h1>
            <div className='lg:block hidden'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    grabCursor={true}
                    className="mySwiper p-7"
                >
                    {TESTIMONIALS.map((testi) => (
                        <SwiperSlide>
                            <div className='relative text-white-2 p-5 border border-white-2 rounded-2xl text-center'>
                                <img src='open.png' className='w-5 h-5 absolute top-4 right-5' />
                                <h3 className='font-semibold text-lg'>{testi.name}</h3>
                                <h4 className='py-3 text-base'>{testi.title}</h4>
                                <p>{testi.review}</p>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
            <div className='lg:hidden md:block hidden'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    grabCursor={true}
                    className="mySwiper p-7"
                >
                    {TESTIMONIALS.map((testi) => (
                        <SwiperSlide>
                            <div className='relative text-white-2 p-5 border border-white-2 rounded-2xl text-center'>
                                <img src='open.png' className='w-5 h-5 absolute top-4 right-5' />
                                <h3 className='font-semibold text-lg'>{testi.name}</h3>
                                <h4 className='py-3 text-base'>{testi.title}</h4>
                                <p>{testi.review}</p>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
            <div className='md:hidden sm:block hidden'>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    grabCursor={true}
                    className="mySwiper p-7"
                >
                    {TESTIMONIALS.map((testi) => (
                        <SwiperSlide>
                            <div className='relative text-white-2 p-5 border border-white-2 rounded-2xl text-center'>
                                <img src='open.png' className='w-5 h-5 absolute top-4 right-5' />
                                <h3 className='font-semibold text-lg'>{testi.name}</h3>
                                <h4 className='py-3 text-base'>{testi.title}</h4>
                                <p>{testi.review}</p>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
            <div className='md:hidden block'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    grabCursor={true}
                    className="mySwiper p-7"
                >
                    {TESTIMONIALS.map((testi) => (
                        <SwiperSlide>
                            <div className='relative text-white-2 p-5 border border-white-2 rounded-2xl text-center'>
                                <img src='open.png' className='w-5 h-5 absolute top-4 right-5' />
                                <h3 className='font-semibold text-lg'>{testi.name}</h3>
                                <h4 className='py-3 text-base'>{testi.title}</h4>
                                <p>{testi.review}</p>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>


            <hr className='mt-16' />
        </div>
    )
}

export default Testimonials