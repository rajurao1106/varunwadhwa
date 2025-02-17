import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import GetBook from './components/GetBook';
import ClaimBonuse from './components/ClaimBonuse';

import { Link as RouterLink } from 'react-router-dom'; // Add this import for RouterLink


export default function Homepage() {
  return (
    <div className='mb-10'>
      <Navbar />
      <main className='flex flex-col gap-20 font-Minion'>
        <Hero />
        <GetBook />
        <ClaimBonuse />
        
      </main>
    </div>
  );
}
