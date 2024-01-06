import Hero from '@/components/Hero'
import React from 'react';
import Services from '@/components/services';
import FAQ from '@/components/FAQ';
import Aboutus from '@/components/aboutus';
import Testimonials from '@/components/testimonials';
import Cabins from '@/components/cabins';

const page = () => {
  return (
    <>
      <Hero />
      <div id='services'></div>
      <Services />
      <Cabins />
      <Aboutus />
      <FAQ />
      <Testimonials />
    </>
  )
}

export default page;