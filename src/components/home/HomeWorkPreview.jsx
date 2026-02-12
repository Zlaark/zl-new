"use client";
import { portfolio } from '@/data/content';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import MagneticButton from '@/components/ui/MagneticButton';

export default function HomeWorkPreview() {
    const featured = portfolio.projects.slice(0, 3);
    return (
        <section className="section bg-stone-50/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <FadeIn><h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Featured Work</h2></FadeIn>
                    <FadeIn delay={0.1}><p className="text-lg text-stone-500 max-w-xl mx-auto">{portfolio.subtitle}</p></FadeIn>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featured.map((project, i) => (
                        <FadeIn key={project.id} delay={i * 0.15}>
                            <div className="group cursor-pointer">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6" style={{ backgroundColor: project.color }}>
                                    <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500">
                                        {project.title.charAt(0)}
                                    </div>
                                    <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500" />
                                    <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-stone-800">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-stone-900 mb-1 group-hover:text-orange-600 transition-colors">{project.title}</h3>
                                <p className="text-stone-500 text-sm">{project.category}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
                <FadeIn delay={0.5}>
                    <div className="text-center mt-16">
                        <MagneticButton>
                            <Link href="/work" className="inline-flex items-center gap-3 text-lg font-bold text-stone-900 hover:text-orange-600 transition-colors group">
                                View All Projects
                                <span className="w-10 h-10 rounded-full border-2 border-stone-200 flex items-center justify-center group-hover:border-orange-300 group-hover:bg-orange-50 transition-all">&rarr;</span>
                            </Link>
                        </MagneticButton>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
