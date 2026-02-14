'use client';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Process from '@/components/home/Process';
import Portfolio from '@/components/home/Portfolio';
import Stats from '@/components/home/Stats';
import CTA from '@/components/home/CTA';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import SystemLoader from '@/components/ui/SystemLoader';

export default function Home() {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading && <SystemLoader onComplete={() => setLoading(false)} />}
            <Header />
            <main className="overflow-hidden">
                <Hero />
                <Stats />
                <Services />
                <Process />
                <Portfolio />
                <CTA />
            </main>
            <Footer />
            <BackToTop />
        </>
    );
}
