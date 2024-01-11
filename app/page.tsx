'use client';

import { useState } from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navigation/Navbar';
import SmoothWrapper from './components/SmoothWrapper';
import Work from './components/Work/Work';
import PreLoading from '@/components/ui/Animation/PreLoading';

export default function Page() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      <SmoothWrapper>
        <main className='w-full h-screen bg-background'>
          {loadingDone ? (
            <div className='section-container'>
              <Navbar />
              <Hero />
              <About />
              <Work />
              <Contact />
            </div>
          ) : (
            <PreLoading handleLoading={(done) => setLoadingDone(done)} />
          )}
        </main>
      </SmoothWrapper>
    </>
  );
}
