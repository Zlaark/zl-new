"use client";
import Link from 'next/link';
import MagneticButton from './ui/MagneticButton';
import FadeIn from './ui/FadeIn';

export default function TeaserSection({ title, description, linkText, href, delay = 0 }) {
    return (
        <section className="py-24 border-t border-stone-100">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-start justify-between gap-12">
                    <div className="md:w-1/2">
                        <FadeIn delay={delay}>
                            <h2 className="text-4xl md:text-6xl font-bold text-stone-900 mb-6 tracking-tight">
                                {title}
                            </h2>
                        </FadeIn>
                    </div>
                    <div className="md:w-1/2 flex flex-col items-start">
                        <FadeIn delay={delay + 0.2}>
                            <p className="text-xl text-stone-600 mb-8 leading-relaxed max-w-lg">
                                {description}
                            </p>
                        </FadeIn>
                        <FadeIn delay={delay + 0.3}>
                            <MagneticButton>
                                <Link href={href} className="group inline-flex items-center gap-3 text-lg font-bold text-stone-900 hover:text-orange-600 transition-colors">
                                    {linkText}
                                    <span className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center group-hover:border-orange-200 group-hover:bg-orange-50 transition-all">
                                        &rarr;
                                    </span>
                                </Link>
                            </MagneticButton>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
