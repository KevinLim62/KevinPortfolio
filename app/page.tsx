import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className='w-full h-screen bg-background'>
      <div className='section-container'>
        <div className='h-screen lg:snap-y lg:snap-mandatory lg:overflow-auto scrollbar-hide'>
          <Hero />
          <About />
          <Work />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}
