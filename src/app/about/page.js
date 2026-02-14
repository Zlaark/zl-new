import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import PageHero from '@/components/ui/PageHero';
import AboutStory from '@/components/about/AboutStory';
import AboutValues from '@/components/about/AboutValues';
import AboutTeam from '@/components/about/AboutTeam';
import AboutAchievements from '@/components/about/AboutAchievements';
import { aboutPage } from '@/data/content';

export const metadata = { title: 'About | Zlaark', description: aboutPage.heroSubtitle };

export default function AboutPage() {
    return (
        <div className="bg-white">
            <Header />
            <main>
                <PageHero title={aboutPage.heroTitle} subtitle={aboutPage.heroSubtitle} breadcrumbs={[{ label: 'About' }]} />
                <AboutStory />
                <AboutValues />
                <AboutTeam />
                <AboutAchievements />
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}
