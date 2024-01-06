import React from 'react'

const Footer = () => {
    return (
        <div id='footer' className='bg-dark-1 flex lg:flex-row flex-col  justify-between w-full relative overflow-x-hidden'>

            <img src='observatory.png' className='absolute bottom-0 left-0 opacity-5 aspect-square' />

            <div className='flex px-7 shrink-0 lg:justify-center justify-start items-center lg:w-1/3 w-full grow-0'>
                <div className='flex flex-col gap-6 shrink-0'>
                    <a href='https://www.facebook.com/mariam.ekizashvili16/'>
                        <img src='contact1.png' className='sm:w-8 w-6 sm:h-8 h-6 shrink-0' />
                    </a>
                    <a href='https://www.instagram.com/maria_woland/'>
                        <img src='contact2.png' className='sm:w-8 w-6 sm:h-8 h-6 shrink-0' />
                    </a>
                    <a href=''>
                        <img src='contact3.png' className='sm:w-8 w-6 sm:h-8 h-6 shrink-0' />
                    </a>
                </div>

                <div className='flex flex-col gap-6 sm:text-base text-sm p-6 text-white-1'>
                    <div className='flex items-center sm:gap-4 gap-2'>
                        <img src='contact4.png' className='sm:w-8 w-6 sm:h-8 h-6' />
                        <span>Tbilisi, Georgia</span>
                    </div>

                    <div className='flex items-center sm:gap-4 gap-2'>
                        <img src='contact5.png' className='sm:w-8 w-6 sm:h-8 h-6' />
                        <span>+995 595 033 062</span>
                    </div>

                    <div className='flex items-center sm:gap-4 gap-2'>
                        <img src='contact6.png' className='sm:w-8 w-6 sm:h-8 h-6' />
                        <span>Eqizashvili16@gmail.com</span>
                    </div>

                </div>
            </div>

            <p className='grow-0 lg:w-2/3 w-full shrink p-7 text-white-2'>Feel free to reach out to us anytime! Whether you have questions about our celestial events, want to book an unforgettable stargazing experience, or simply wish to share your cosmic thoughts, our contact team is here for you. Shoot us an email at Eqizashvili16@gmail.com or give us a call at +955 595 033 062. Our observatory is located at the intersection of wonder and curiosity, and we'd love to hear from you. Connect with us on social media @Maria_woland for the latest updates and celestial musings. </p>



        </div>
    )
}

export default Footer