"use client";
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import PageHero from '@/components/ui/PageHero';
import WorkFilter from '@/components/work/WorkFilter';
import WorkGrid from '@/components/work/WorkGrid';
import HomeCTA from '@/components/home/HomeCTA';
import { workPage } from '@/data/content';

export default function WorkPage() {
    const [activeFilter, setActiveFilter] = useState('All');
    return (
        <>
            <Header />
            <main>
                <PageHero title={workPage.heroTitle} subtitle={workPage.heroSubtitle} breadcrumbs={[{ label: 'Work' }]} />
                <section className="section">
                    <div className="container mx-auto px-6">
                        <WorkFilter active={activeFilter} onFilter={setActiveFilter} />
                        <WorkGrid filter={activeFilter} />
                    </div>
                </section>
                <HomeCTA />
            </main>
            <Footer />
            <BackToTop />
        </>
    );
}
