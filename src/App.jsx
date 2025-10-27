import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black font-inter text-white">
      <Hero />
      <Features />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;
