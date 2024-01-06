import React from 'react'

const Aboutus = () => {
    return (
        <div className='p-7 bg-dark-1' id='aboutus'>
            <h1 className='text-[2.8rem] px-2 pb-10 pt-2 text-white-2'>About Us.</h1>
            <div className='flex lg:flex-row flex-col gap-6'>
                <div className='text-white-2 sm:border-2 border-white-2 sm:p-7 sm:bg-dark-2 rounded-2xl text-base lg:w-1/2 w-full'>
                    <p>Welcome to Abastumani, where the wonders of the universe come alive under the glittering canvas of the night sky. Our observatory is more than just a place to observe the stars – it's a gateway to the cosmos.</p>
                    <p>Founded 1952, we have been a beacon for stargazers and astronomy enthusiasts alike. Nestled in a location with minimal light pollution, our observatory provides an optimal setting for unrivaled celestial observations.
                        Whether you're seeking a captivating night tour, educational enrichment, or a celestial escape, we invite you to join us under the stars.
                    </p>
                </div>
                <div className='text-white-2 border-2 border-white-2 overflow-hidden bg-dark-2 rounded-2xl text-base lg:w-1/2 w-full'>
                    <img src='info1.JPG' className='mizumeba-1 w-full h-full   object-cover' />
                </div>
            </div>


        </div>
    )
}

export default Aboutus;