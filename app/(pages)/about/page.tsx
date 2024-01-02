import About from '@/app/components/About/About';
import TechStacks from '@/app/components/About/TechStacks';

export default function Home() {
  return (
    <section id='about'>
      <div className='flex flex-col h-screen lg:flex-row items-center justify-center lg:gap-[67px] 2xl:gap-[135px] mt-[50px] lg:mt-0'>
        <About />
        <TechStacks />
      </div>
    </section>
  );
}
