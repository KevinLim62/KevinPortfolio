'use client';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Link from 'next/link';
import Image from 'next/image';
interface SingleProjectDialogProps {
  id: string;
  title: string;
  description: string;
  link: string;
  imageSrc: string;
  logoSrc: string;
  tags: string[];
  remarks: string;
}

const SingleProjectDialog: React.FC<SingleProjectDialogProps> = ({ id, title, description, link, imageSrc, logoSrc, tags, remarks }) => {
  return (
    <DialogContent className='bg-primary text-foreground min-w-[768px] h-[90vh] shadow-xl'>
      <DialogHeader className='h-[75vh] overflow-y-auto'>
        <DialogTitle className='flex flex-row items-center space-x-3 text-md lg:text-xl 2xl:text-3xl font-bold leading-none tracking-tight'>
          <div>{title}</div>
          {logoSrc && (
            <div className='h-[50px] w-[50px] rounded-md overflow-hidden relative'>
              <Image src={logoSrc} alt={title} fill quality={100} />
            </div>
          )}
        </DialogTitle>
        <DialogDescription className='text-sm lg:text-md 2xl:text-lg text-foreground pt-5'>
          <div className='flex flex-col items-start justify-start space-y-4'>
            <div>{description}</div>
            <div className='grid grid-cols-5 gap-2'>
              {tags.map((tag, index) => (
                <div key={index} className='p-1 rounded-full text-xs text-center bg-slate-500 cursor-default'>
                  {tag}
                </div>
              ))}
            </div>
            <div className='w-[600px]'>
              <Image
                src={imageSrc}
                alt={title}
                width={100}
                height={100}
                sizes='100vw'
                style={{
                  width: 'auto',
                  height: '100%',
                }}
                quality={100}
              />
              {remarks && <p className='text-xs font-light'>{`disclamer: ${remarks}`}</p>}
            </div>
          </div>
        </DialogDescription>
      </DialogHeader>
      {link && (
        <Link href={link} target='_blank' rel='noopener noreferrer' className='text-sm lg:text-md 2xl:text-lg font-light'>
          Live Url
        </Link>
      )}
    </DialogContent>
  );
};

export default SingleProjectDialog;
