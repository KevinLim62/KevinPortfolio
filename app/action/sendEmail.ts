'use server';

import { resend } from '@/lib/resend';
import { z } from 'zod';
import { inquiryFormSchema } from '../components/Contact/ContactForm';
import EnquiryEmail from '../reactEmail-template/EnquiryEmail';
import React from 'react';

export const sendEmail = async (values: z.infer<typeof inquiryFormSchema>) => {
  const { data, error } = await resend.emails.send({
    from: `Contact Form <${values.email}>`,
    to: 'cheryiong62@gmail.com',
    subject: 'Message from Contact Form',
    reply_to: values.email as string,
    react: React.createElement(EnquiryEmail, {
      name: values.name,
      message: values.message,
    }),
  });

  if (error) {
    console.log(error.message);
    return null;
  }

  return data;
};
