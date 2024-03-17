'use client';

import React, { useState } from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navigation/Navbar';
import Work from './components/Work/Work';
import PreLoading from '@/components/ui/Animation/PreLoading';
import { TracingBeam } from '@/components/ui/Animation/TracingBeam';
import Chatbox from './components/Chatbox/Chatbox';

export default function Page() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <main className='w-full h-screen bg-background'>
      {loadingDone ? (
        <React.Fragment>
          <Navbar />
          <Chatbox />
          <TracingBeam>
            <Hero />
            <About />
            <Work />
            <Contact />
          </TracingBeam>
        </React.Fragment>
      ) : (
        <PreLoading handleLoading={(done) => setLoadingDone(done)} />
      )}
    </main>
  );
}
