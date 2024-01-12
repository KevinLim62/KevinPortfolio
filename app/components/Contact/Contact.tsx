'use client';

import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import Footer from '../Footer/Footer';

const Contact = () => {
  return (
    <section id='contact' className='snap-start'>
      <div className='flex flex-col md:h-screen lg:flex-row items-center justify-start lg:justify-center gap-5 md:gap-20 lg:gap-0 mt-[50px] lg:mt-0 relative'>
        <ContactForm />
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
