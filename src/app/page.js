'use client';
import Header from '@/components/Header';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Process from '@/components/home/Process';
import Portfolio from '@/components/home/Portfolio';
import TrustedBy from '@/components/home/TrustedBy';
import DesignScroll from '@/components/home/DesignScroll';
import AgencySelection from '@/components/home/AgencySelection';
import AgencyComparison from '@/components/home/AgencyComparison';
import CTA from '@/components/home/CTA';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
    return (
        <>
            <Header />
            <main className="overflow-hidden">
                <Hero />
                <TrustedBy />
                <DesignScroll />
                <AgencySelection />
                <AgencyComparison />
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
