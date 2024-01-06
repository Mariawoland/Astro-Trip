"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import React from 'react'
import Contact from './contact';

const Navbar = () => {

    const [clicked, setClicked] = useState(false);
    const [visible, setVisible] = useState(true);

    const handleClick = () => {
        setClicked(prev => !prev);
    };

    useEffect(() => {
        let prevScrollPos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrolledUp = currentScrollPos < prevScrollPos;

            setVisible(isScrolledUp || currentScrollPos < 100);
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [is1Hovered, setIs1Hovered] = useState(false);

    const handle1MouseEnter = () => {
        setIs1Hovered(true);
    };

    const handle1MouseLeave = () => {
        setIs1Hovered(false);
    };

    return (
        <>
            <header className={`z-[100] fixed inset-0 flex justify-between items-center transition-all duration-500 md:px-10 px-4 h-[80px] bg-dark-1 ${!visible ? 'translate-y-[-100%]' : 'translate-y-0'}`}>


                <img src='/logo.png' className='sm:flex hidden w-[190px]' />
                <img src='/logom.png' className='sm:hidden flex w-[80px]' />

                <img src='/menu.png' onClick={handleClick} className='md:hidden flex w-[50px]' />

                <div className={`bg-dark-1 text-white-2 text-base font-semibold md:flex hidden gap-7 items-center transition-all duration-300 md:flex-row flex-col lg:items-center lg:gap-10 lg:p-0 p-4 tracking-wide ms-auto`}>

                    <div className='flex gap-12 items-center'>
                        <img src='/logo.png' className='md:hidden flex w-[190px]' />
                        <img src='/close.png' className='md:hidden flex w-[25px] h-[25px]' onClick={handleClick} />
                    </div>

                    <Link href='#services' className='underline-animation'>Services</Link>

                    <Link href='#cabins' className='underline-animation'>Cabins</Link>

                    <div className={`relative text-left`} onMouseEnter={handle1MouseEnter} onMouseLeave={handle1MouseLeave}>

                        <Link
                            className="hover:text-three-1 transition-all duration-300 underline-animation"
                            href='#aboutus'
                        >Info</Link>

                        <ul className={`md:bg-dark-2 rounded-2xl md:absolute md:-left-5 relative flex flex-col md:px-5 md:py-2 px-0 py-0 lg:my-2 my-0 transition-all  origin-top duration-300 transform shrink-0 items-start gap-2 ${is1Hovered ? 'scale-y-100 opacity-1 h-[110px]' : 'scale-y-0 h-0 opacity-0'}`}>
                            <li>
                                <Link
                                    className="hover:text-three-1 transition-all duration-300  whitespace-nowrap "
                                    href='#aboutus'
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-three-1 transition-all duration-300  whitespace-nowrap "
                                    href='#testimonials'
                                >
                                    Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-three-1 transition-all duration-300  whitespace-nowrap "
                                    href='#faq'
                                >
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <Contact />
                </div>

            </header>

            <div className={`z-[100] bg-dark-1 fixed top-0 right-0 text-white-2 font-semibold flex flex-col gap-6 p-7 transition-all duration-300 h-screen text-base ${clicked === true ? 'translate-x-0' : 'translate-x-[100%]'}`}>
                <div className='flex gap-12 items-center'>
                    <img src='/logo.png' className='md:hidden flex w-[190px]' />
                    <img src='/close.png' className='md:hidden flex w-[25px] h-[25px]' onClick={handleClick} />
                </div>

                <Link href='#services' className='underline-animation'>Services</Link>

                <Link href='#cabins' className='underline-animation'>Cabins</Link>

                <div className={`relative text-left`} onMouseEnter={handle1MouseEnter} onMouseLeave={handle1MouseLeave}>

                    <Link
                        className="hover:text-three-1 transition-all duration-300 underline-animation"
                        href='#aboutus'
                    >Info</Link>

                    <ul className={`lg:bg-dark-2 rounded-2xl lg:absolute lg:-left-5 relative flex flex-col lg:px-5 lg:py-2 px-0 py-0 my-2 transition-all  origin-top duration-300 transform shrink-0 items-start gap-2 ${is1Hovered ? 'scale-y-100 opacity-1 h-[110px]' : 'scale-y-0 h-0 opacity-0'}`}>
                        <li>
                            <Link
                                className="hover:text-three-1 transition-all duration-300  whitespace-nowrap "
                                href='#aboutus'
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:text-three-1 transition-all duration-300  whitespace-nowrap "
                                href='#testimonials'
                            >
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:text-three-1 transition-all duration-300  whitespace-nowrap "
                                href='#faq'
                            >
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </div>

                <Contact />
            </div>
        </>
    )
}

export default Navbar;