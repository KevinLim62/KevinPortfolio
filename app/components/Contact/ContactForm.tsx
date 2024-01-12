'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { IoMdSend } from 'react-icons/io';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const inquiryFormSchema = z.object({
  name: z
    .string({
      required_error: 'Name must be provided.',
      invalid_type_error: 'Name must be a string.',
    })
    .min(10, {
      message: 'Message must not less than 10 characters.',
    }),
  email: z
    .string({
      required_error: 'Email must be provided.',
    })
    .email({ message: 'Input is not a valid email format.' }),
  message: z
    .string({
      required_error: 'Message must be provided.',
    })
    .min(10, {
      message: 'Message must not less than 10 characters.',
    })
    .max(30, {
      message: 'Message must not be longer than 30 characters.',
    }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof inquiryFormSchema>>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof inquiryFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const variants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div className='flex w-full h-full 2xl:h-[80vh] items-center justify-center lg:pb-[7%] 2xl:pb-[10%]'>
      <Form {...form}>
        <motion.form onSubmit={form.handleSubmit(onSubmit)} ref={ref} className='space-y-8' variants={variants} initial={false} animate={isInView ? 'animate' : 'initial'} transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}>
          <h1 className='text-md lg:text-xl 2xl:text-3xl font-bold text-center md:mb-[50px] text-button'>Contact me</h1>
          {/* <h3 className='text-xl font-semibold leading-none tracking-tight mt-5'>Send me a message!</h3> */}
          <div className='flex flex-col md:flex-row gap-[30px] justify-between'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className='mx-auto w-[250px] md:w-full 2xl:w-[250px]'>
                  <FormLabel className='text-button text-sm lg:text-md 2xl:text-lg font-bold'>Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter Your Name' className='border-b-2 border-foreground' {...field} />
                  </FormControl>
                  <FormMessage className='absolute text-xs text-[#E2C275] whitespace-nowrap' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <>
                  <FormItem className='mx-auto w-[250px] md:w-full 2xl:w-[250px]'>
                    <FormLabel className='text-button text-sm lg:text-md 2xl:text-lg font-bold'>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter Your Email' className='border-b-2 border-foreground' {...field} />
                    </FormControl>
                    <FormMessage className='absolute text-xs text-[#E2C275] whitespace-nowrap' />
                  </FormItem>
                </>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem className='mx-auto w-[250px] md:w-[550px] pt-[15px] lg:pt-[30px]'>
                <FormLabel className='text-button text-sm lg:text-md 2xl:text-lg font-bold'>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder='Enter Your Inquiry Message' className='border-b-2 border-foreground resize-none' {...field} />
                </FormControl>
                <FormMessage className='absolute text-xs text-[#E2C275] whitespace-nowrap' />
              </FormItem>
            )}
          />
          <div className='flex lg:mx-auto w-[150px] relative group z-10'>
            <Button className='flex lg:mx-auto bg-secondary text-background border-primary hover:bg-background hover:text-foreground hover:border-foreground w-[150px] h-[50px] rounded-lg gap-1 group text-xs lg:text-sm 2xl:text-base font-bold' variant='outline' type='submit'>
              SEND
              <IoMdSend size={20} className='transition-transform duration-200 group-hover:translate-x-4' />
              <div className='hidden z-[-10] lg:block absolute left-0 top-0 transition-transform delay-150 duration-200 group-hover:translate-x-[10px] group-hover:translate-y-[10px] w-[150px] h-[50px] rounded-xl border-2 border-primary bg-secondary'></div>
            </Button>
          </div>
        </motion.form>
      </Form>
    </div>
  );
};

export default ContactForm;
