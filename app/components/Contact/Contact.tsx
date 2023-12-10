'use client';

import Footer from '../Footer';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id='contact' className='flex flex-col mt-[100px] lg:mt-0 items-center justify-center h-[80vh] lg:gap-[20px] relative snap-start'>
      <div className='w-[300px] lg:w-[550px]'>
        <h1 className='text-center text-2xl font-semibold leading-none tracking-tight'>Contact Me</h1>
        <h3 className='text-xl font-semibold leading-none tracking-tight mt-[50px]'>Send me a message!</h3>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
