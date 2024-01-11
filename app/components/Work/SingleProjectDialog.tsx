'use client';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Link from 'next/link';

interface SingleProjectDialogProps {
  id: string;
  title: string;
  description: string;
  link: string;
}

const SingleProjectDialog: React.FC<SingleProjectDialogProps> = ({ id, title, description, link }) => {
  return (
    <DialogContent className='bg-primary text-foreground h-[70vh] shadow-xl'>
      <DialogHeader className='h-[50vh]'>
        <DialogTitle className='text-md lg:text-xl 2xl:text-3xl font-bold leading-none tracking-tight'>{title}</DialogTitle>
        <DialogDescription className='text-sm lg:text-md 2xl:text-lg text-foreground font-bold pt-[25px] lg:pt-[50px]'>{description}</DialogDescription>
      </DialogHeader>
      <Link href={link} className='text-sm lg:text-md 2xl:text-lg font-light'>
        Live Url
      </Link>
    </DialogContent>
  );
};

export default SingleProjectDialog;
