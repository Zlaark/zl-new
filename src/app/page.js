import Header from '@/components/Header';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Process from '@/components/home/Process';
import Portfolio from '@/components/home/Portfolio';
import Stats from '@/components/home/Stats';
import CTA from '@/components/home/CTA';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
    return (
        <>
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
