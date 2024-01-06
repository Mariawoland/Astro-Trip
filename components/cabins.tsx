import { CABINS } from '@/constants'
import React from 'react'
import Contact from './contact';

const Cabins = () => {
    return (
        <div id='cabins' className='bg-dark-1'>

            <h1 className='text-[2.8rem] px-7 pb-5 pt-7 text-white-2'>Cabins.</h1>

            <div className='flex md:flex-row flex-col gap-7 p-7 md:w-[730px] w-full'>
                {CABINS.map((item) => (
                    <div className='text-white-2 hover:text-white-1 border-2  border-white-2 hover:border-white-1 rounded-2xl transition-all duration-300 lg:w-1/2 w-full '>

                        <div className='w-full aspect-video overflow-hidden  rounded-t-2xl relative flex items-center justify-center yuti'>
                            <img className=' absolute inset-0 mizumeba-1 w-full h-full object-cover z-30' src={item.photo} />

                        </div>

                        <div className='p-6'>
                            <h2 className='font-semibold text-2xl text-center pb-3'>{item.title}</h2>
                            <h4 className='text-lg font-semibold pb-2'>{item.price}</h4>
                            <p className='text-sm font-semibold pb-6'>{item.description}</p>
                            <Contact />
                        </div>

                    </div>
                ))}
            </div>



        </div>
    )
}

export default Cabins;


