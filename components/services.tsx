'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import '@/styles.css';
import { SERVICES } from '@/constants';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Contact from './contact';

const Services = () => {
    return (
        <div className='p-6 bg-dark-1'>
            <h1 className='text-[2.8rem] px-2 pb-10 pt-2 text-white-2'>Services.</h1>
            <div className='lg:block hidden'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    grabCursor={true}
                    className="mySwiper p-7"
                >
                    {SERVICES.map((item) => (
                        <SwiperSlide>
                            <AlertDialog>

                                <AlertDialogTrigger className='ring-0 rounded-2xl focus:outline-none'>
                                    <div className='relative text-white-2 hover:text-white-1 border-2  border-white-2 hover:border-white-1 rounded-2xl transition-all duration-300'>

                                        <div className='p-6'>
                                            <h2 className='font-semibold text-2xl text-center pb-3'>{item.title}</h2>
                                            <h4 className='text-lg font-semibold pb-2'>{item.price}</h4>
                                            <h4 className='text-lg font-semibold pb-2'>{item.date}</h4>
                                            <p>{item.shortDescription}</p>
                                        </div>


                                        <div className='w-full aspect-video overflow-hidden  rounded-b-2xl relative flex items-center justify-center yuti'>
                                            <img className=' absolute inset-0 mizumeba-1 w-full h-full object-cover z-30' src={item.photo1} />

                                        </div>
                                    </div>
                                </AlertDialogTrigger>

                                <AlertDialogContent>

                                    <div className='relative lg:w-1/2 w-full lg:h-full lg:aspect-auto aspect-video overflow-hidden rounded-tl-2xl lg:rounded-tr-0 rounded-tr-2xl lg:rounded-bl-2xl'>
                                        <img className='absolute inset-0 mizumeba-1 w-full h-full object-cover z-30' src={item.photo2} />

                                    </div>
                                    <div className='lg:w-1/2 w-full'>
                                        <div className='h-full flex flex-col justify-between p-10 text-white-2'>
                                            <div>
                                                 <h2 className='font-semibold text-3xl text-center pb-6'>{item.title}</h2>
                                            <h4 className='text-xl font-semibold pb-3'>Price: {item.price}</h4>
                                            <h4 className='text-xl font-semibold pb-6'>Date: {item.date}</h4>
                                            <p className='text-base pb-8'>{item.longDescription}</p>
                                            </div>
                                           
                                            <Contact />
                                        </div>
                                    </div>

                                    <AlertDialogCancel className=''>
                                        <img src="close.png" className='h-full w-full' />
                                    </AlertDialogCancel>

                                </AlertDialogContent>

                            </AlertDialog>

                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

            <div className='lg:hidden md:block hidden'>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    grabCursor={true}
                    className="mySwiper p-7"
                >
                    {SERVICES.map((item) => (
                        <SwiperSlide>
                            <AlertDialog>

                                <AlertDialogTrigger className='ring-0 rounded-2xl focus:outline-none'>
                                    <div className='relative text-white-2 hover:text-white-1 border-2  border-white-2 hover:border-white-1 rounded-2xl transition-all duration-300'>

                                        <div className='p-6'>
                                            <h2 className='font-semibold text-2xl text-center pb-3'>{item.title}</h2>
                                            <h4 className='text-lg font-semibold pb-2'>{item.price}</h4>
                                            <h4 className='text-lg font-semibold pb-2'>{item.date}</h4>
                                            <p>{item.shortDescription}</p>
                                        </div>


                                        <div className='w-full aspect-video overflow-hidden  rounded-b-2xl relative flex items-center justify-center yuti'>
                                            <img className=' absolute inset-0 mizumeba-1 w-full h-full object-cover z-30' src={item.photo1} />

                                        </div>
                                    </div>
                                </AlertDialogTrigger>

                                <AlertDialogContent>

                                    <div className='relative lg:w-1/2 w-full lg:h-full lg:aspect-auto aspect-video overflow-hidden rounded-tl-2xl lg:rounded-tr-0 rounded-tr-2xl lg:rounded-bl-2xl'>
                                        <img className='absolute inset-0 mizumeba-1 w-full h-full object-cover z-30' src={item.photo2} />

                                    </div>
                                    <div className='lg:w-1/2 w-full'>
                                        <div className='p-10 text-white-2'>
                                            <h2 className='font-semibold text-3xl text-center pb-6'>{item.title}</h2>
                                            <h4 className='text-xl font-semibold pb-3'>Price: {item.price}</h4>
                                            <h4 className='text-xl font-semibold pb-6'>Date: {item.date}</h4>
                                            <p className='text-base pb-8'>{item.longDescription}</p>
                                            <Contact />
                                        </div>
                                    </div>

                                    <AlertDialogCancel className=''>
                                        <img src="close.png" className='h-full w-full' />
                                    </AlertDialogCancel>

                                </AlertDialogContent>

                            </AlertDialog>

                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

            <div className='md:hidden block'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    grabCursor={true}
                    className="mySwiper p-6"
                >
                    {SERVICES.map((item) => (
                        <SwiperSlide>
                            <AlertDialog>

                                <AlertDialogTrigger className='ring-0 rounded-2xl focus:outline-none'>
                                    <div className='relative text-white-2 hover:text-white-1 border-2  border-white-2 hover:border-white-1 rounded-2xl transition-all duration-300'>

                                        <div className='p-4'>
                                            <h2 className='font-semibold text-xl text-center pb-3'>{item.title}</h2>
                                            <h4 className='text-start font-semibold pb-2'>{item.price}</h4>
                                            <h4 className='text-start font-semibold pb-2'>{item.date}</h4>
                                            <p className='text-justify'>{item.shortDescription}</p>
                                        </div>


                                        <div className='w-full aspect-video overflow-hidden  rounded-b-2xl relative flex items-center justify-center yuti'>
                                            <img className=' absolute inset-0 mizumeba-1 w-full h-full object-cover z-30' src={item.photo1} />

                                        </div>
                                    </div>
                                </AlertDialogTrigger>

                                <AlertDialogContent>

                                    <div className='relative lg:w-1/2 w-full lg:h-full lg:aspect-auto aspect-video overflow-hidden rounded-tl-2xl lg:rounded-tr-0 rounded-tr-2xl lg:rounded-bl-2xl'>
                                        <img className='absolute inset-0 mizumeba-1 w-full h-full object-cover z-30' src={item.photo2} />

                                    </div>
                                    <div className='lg:w-1/2 w-full'>
                                        <div className='p-10 text-white-2'>
                                            <h2 className='font-semibold text-lg text-center pb-3'>{item.title}</h2>
                                            <h4 className='text-sm font-semibold pb-1'>Price: {item.price}</h4>
                                            <h4 className='text-sm font-semibold pb-3'>Date: {item.date}</h4>
                                            <p className='text-xs pb-3 text-justify'>{item.longDescription}</p>
                                            <Contact />
                                        </div>
                                    </div>

                                    <AlertDialogCancel className=''>
                                        <img src="close.png" className='h-full w-full' />
                                    </AlertDialogCancel>

                                </AlertDialogContent>

                            </AlertDialog>

                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>



        </div>
    )
}

export default Services
