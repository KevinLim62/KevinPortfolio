'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ProfilePic = () => {
  return (
    <motion.div className='w-[300px] 2xl:w-[375px] h-[400px] 2xl:h-[500px] relative group' initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.5 }}>
      <Image alt='profile' fill className='z-10 object-cover absolute transition-transform delay-150 duration-200 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]' src='https://github.com/shadcn.png' />
      <div className='hidden lg:block absolute left-[20px] top-[20px] transition-transform delay-150 duration-200 group-hover:translate-x-[10px] group-hover:translate-y-[10px] w-[300px] 2xl:w-[375px] h-[400px] 2xl:h-[500px] border-2 border-white'></div>
    </motion.div>
  );
};

export default ProfilePic;
