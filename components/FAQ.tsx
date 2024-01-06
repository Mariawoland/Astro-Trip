'use client';
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FreqAQ } from '@/constants';

const FAQ = () => {
    return (

        <div className='p-7 bg-dark-1' id='faq'>
            <h1 className='text-[2.8rem] px-2 pb-10 pt-2 text-white-2'>FAQ.</h1>
            <div className='flex lg:flex-row flex-col gap-6'>
                <div className='text-white-2 border-2 border-white-2 overflow-hidden bg-dark-2 rounded-2xl text-base lg:w-1/2 w-full'>
                    <img src='info2.JPG' className='mizumeba-1 w-full h-full  object-cover' />
                </div>
                <Accordion type="single" collapsible className="lg:w-1/2 w-full sm:p-7 p-2">
                    {FreqAQ.map((que) => (
                        <AccordionItem className='bg-dark-1 text-white-2 text-base' value={que.value}>
                            <AccordionTrigger className='text-start font-semibold hover:no-underline hover:text-white-1 transition-all duration-300'>{que.question}</AccordionTrigger>
                            <AccordionContent>{que.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>

    )
}

export default FAQ;