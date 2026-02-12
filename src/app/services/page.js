import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import PageHero from '@/components/ui/PageHero';
import ServicesList from '@/components/services/ServicesList';
import ServicesProcess from '@/components/services/ServicesProcess';
import HomeCTA from '@/components/home/HomeCTA';
import { servicesPage } from '@/data/content';

export const metadata = { title: 'Services | Zlaark', description: servicesPage.heroSubtitle };

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero title={servicesPage.heroTitle} subtitle={servicesPage.heroSubtitle} breadcrumbs={[{ label: 'Services' }]} />
                <ServicesList />
                <ServicesProcess />
                <HomeCTA />
            </main>
            <Footer />
            <BackToTop />
        </>
    );
}
