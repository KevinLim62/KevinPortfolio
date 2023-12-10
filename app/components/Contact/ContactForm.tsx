'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { IoMdSend } from 'react-icons/io';

const inquiryFormSchema = z.object({
  name: z.string({
    required_error: 'Name must be provided.',
    invalid_type_error: 'Name must be a string.',
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
    .max(160, {
      message: 'Message must not be longer than 30 characters.',
    }),
});

const ContactForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof inquiryFormSchema>>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof inquiryFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='pt-[20px] lg:pt-[40px] space-y-8'>
        <div className='flex flex-col md:flex-row gap-[15px] lg:gap-[30px]'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='w-[250px] border-b-2 border-white'>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='Enter Your Name' className='border-transparent' {...field} />
                </FormControl>
                <FormMessage className='absolute' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <>
                <FormItem className='w-[250px] border-b-2 border-white'>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter Your Email' className='border-transparent' {...field} />
                  </FormControl>
                  <FormMessage className='absolute' />
                </FormItem>
              </>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem className='w-[300px] lg:w-[550px] pt-[15px] lg:pt-[30px] border-b-2 border-white'>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder='Enter Your Inquiry Message' className='border-transparent resize-none' {...field} />
              </FormControl>
              <FormMessage className='absolute' />
            </FormItem>
          )}
        />
        <Button className='flex lg:mx-auto border-white w-[150px] h-[50px] rounded-lg gap-1 group' variant='outline' type='submit'>
          SEND
          <IoMdSend size={20} className='transition-transform duration-200 group-hover:translate-x-3' />
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
