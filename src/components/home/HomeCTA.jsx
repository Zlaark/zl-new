"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';
import FadeIn from '@/components/ui/FadeIn';

export default function HomeCTA() {
    return (
        <section className="relative py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900" />
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
            </div>
            <div className="container mx-auto px-6 relative z-10 text-center">
                <FadeIn>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                        Ready to Build<br />
                        <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Something Amazing?</span>
                    </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className="text-xl text-stone-400 max-w-xl mx-auto mb-12 font-light">
                        Let us turn your ideas into reality. Start a conversation with our team today.
                    </p>
                </FadeIn>
                <FadeIn delay={0.3}>
                    <MagneticButton>
                        <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-bold text-lg hover:shadow-[0_8px_30px_rgba(249,115,22,0.4)] transition-all">
                            Start Your Project &rarr;
                        </Link>
                    </MagneticButton>
                </FadeIn>
            </div>
        </section>
    );
}
