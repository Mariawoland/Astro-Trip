'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import '@/styles.css';


const Hero = () => {
    return (
        <div className='w-full h-screen relative bg-dark'>

            <Swiper
                centeredSlides={true}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade]}
                className="mySwiper w-full h-full"
            >
                <SwiperSlide>
                    <img src='hero.jpg' className='h-full w-full absolute inset-0 object-cover md:brightness-[0.35] brightness-[0.2] -z-10 mizumeba' />

                    <h1 className='text-white-1 font-black xl:text-[4.5rem] lg:text-[3.75rem] md:text-[2.8rem] text-[3.75rem] z-[20] pt-[35vh] md:ps-[8%] ps-[10%] leading-[160%]'>Discover <br className='md:hidden flex' /> New <br /> Horizons</h1>
                </SwiperSlide>

                <SwiperSlide>
                    <img src='services1.jpg' className='h-full w-full absolute inset-0 object-cover md:brightness-[0.35] brightness-[0.2] -z-10 mizumeba' />

                    <h1 className='text-white-1 font-black xl:text-[4.5rem] lg:text-[3.75rem] md:text-[2.8rem] text-[3.75rem] z-[20] md:pt-[45vh] pt-[35vh] md:ps-[8%] px-[10%] leading-[160%]'>Explore <br className='sm:hidden flex' /> The <br className='sm:hidden flex' /> Galaxy</h1>
                </SwiperSlide>

                <SwiperSlide>
                    <img src='services2.jpg' className='h-full w-full absolute inset-0 object-cover md:brightness-[0.35] brightness-[0.2] -z-10 mizumeba' />

                    <h1 className='text-white-1 font-black xl:text-[4.5rem] lg:text-[3.75rem] md:text-[2.8rem] text-[3.75rem] z-[20] pt-[35vh] md:ps-[8%] ps-[10%] leading-[160%]'>Break <br className='md:hidden flex' /> Throgh <br /> Unknown</h1>
                </SwiperSlide>


            </Swiper>

        </div>
    )
}

export default Hero
