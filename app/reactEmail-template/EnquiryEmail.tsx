import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type EnquiryEmailProps = {
  name: string;
  message: string;
};

export default function EnquiryEmail({ name, message }: EnquiryEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className='bg-white my-auto mx-auto font-sans px-2'>
          <Container className='border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]'>
            <Section className='mt-[32px]'>
              <Text className='flex h-full mx-auto items-center justify-center bg-transparent text-foreground text-lg font-bold'>KL</Text>
            </Section>
            <Heading className='text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
              <strong>Contact Form Enquiry</strong>
            </Heading>
            <Text className='text-black text-[14px] leading-[24px]'>
              Message by <strong>{name}</strong>
            </Text>
            <Text className='text-black text-[14px] leading-[24px]'>{message}</Text>
            <Hr className='border border-solid border-[#eaeaea] my-[26px] mx-0 w-full' />
            <Text className='text-[#666666] text-[12px] leading-[24px]'>This is an auto-generated email.</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
