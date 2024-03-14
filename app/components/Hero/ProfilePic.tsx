'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const ProfilePic = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const variants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      y: 100,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      className='mx-auto lg:m-0 w-[300px] h-[400px] md:w-[350px] md:h-[450px] lg:w-[350px] lg:h-[450px] 2xl:w-[425px] 2xl:h-[600px] relative group'
      ref={ref}
      variants={variants}
      initial={false}
      animate={isInView ? 'animate' : 'initial'}
      transition={{ delay: 1.5, duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
    >
      <Image
        alt='profile'
        fill
        className='z-10 object-cover lg:opacity-80 absolute transition-all delay-150 lg:group-hover:-translate-x-[10px] lg:group-hover:opacity-100 lg:group-hover:-translate-y-[10px] border-2 rounded-lg'
        src='http://res.cloudinary.com/df9aa9rqs/image/upload/v1710428944/Ecommerce_Dashboard/qffcbnclhhd58jv775ps.jpg'
      />
      <div className='hidden lg:block absolute left-[20px] top-[20px] transition-all delay-150 group-hover:translate-x-[10px] group-hover:translate-y-[10px] lg:w-[350px] lg:h-[450px] 2xl:w-[425px] 2xl:h-[600px] border-2 rounded-lg bg-primary group-hover:bg-transparent'></div>
    </motion.div>
  );
};

export default ProfilePic;
