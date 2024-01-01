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
    <DialogContent className='bg-foreground text-background h-[70vh]'>
      <DialogHeader className='h-[50vh]'>
        <DialogTitle className='text-2xl font-semibold leading-none tracking-tight'>{title}</DialogTitle>
        <DialogDescription className='text-sm text-muted-foreground pt-[25px] lg:pt-[50px]'>{description}</DialogDescription>
      </DialogHeader>
      <Link href={link}>Live Url</Link>
    </DialogContent>
  );
};

export default SingleProjectDialog;
