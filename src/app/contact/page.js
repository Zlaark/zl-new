import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import PageHero from '@/components/ui/PageHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import { contactPage } from '@/data/content';

export const metadata = { title: 'Contact | Zlaark', description: contactPage.heroSubtitle };

export default function ContactPage() {
    return (
        <>
            <Header />
            <main>
                <PageHero title={contactPage.heroTitle} subtitle={contactPage.heroSubtitle} breadcrumbs={[{ label: 'Contact' }]} />
                <section className="section">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <ContactForm />
                            <ContactInfo />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <BackToTop />
        </>
    );
}
