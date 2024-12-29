import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services/Services';
import { Process } from '../components/Process/Process';
import { Reviews } from '../components/Reviews/Reviews';
import { Team } from '../components/Team/Team';
import { CeoMessage } from '../components/CeoMessage/CeoMessage';
import { Contact } from '../components/Contact/Contact';
import { FAQ } from '../components/FAQ/FAQ';

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black min-h-screen">
      <section id="hero"><Hero /></section>
      <section id="services"><Services /></section>
      <section id="process"><Process /></section>
      <section id="reviews"><Reviews /></section>
      <section id="team"><Team /></section>
      <CeoMessage />
      <section id="contact"><Contact /></section>
      <section id="faq"><FAQ /></section>
    </main>
  );
}