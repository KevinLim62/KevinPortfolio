import ContactForm from '@/app/components/Contact/ContactForm';

export default function Home() {
  return (
    <section id='work'>
      <div className='flex flex-col h-screen lg:flex-row items-center justify-center lg:gap-[67px] 2xl:gap-[135px] mt-[50px] lg:mt-0'>
        <ContactForm />
      </div>
    </section>
  );
}
