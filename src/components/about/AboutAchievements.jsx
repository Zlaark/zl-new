"use client";
import { about } from '@/data/content';
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { MetallicShape } from '@/components/ui/MetallicShape';
import { FloatingElement } from '@/components/ui/FloatingElement';

const Counter = ({ value, suffix }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            const numericValue = parseInt(value, 10);
            if (!isNaN(numericValue)) {
                motionValue.set(numericValue);
            }
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                const hasPlus = value.toString().includes('+');
                const finalSuffix = hasPlus ? '+' : '';
                ref.current.textContent = Math.floor(latest) + finalSuffix;
            }
        });
    }, [springValue, value]);

    return <span ref={ref} className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">{value}</span>;
};

export default function AboutAchievements() {
    return (
        <section className="relative py-32 overflow-hidden bg-white border-y border-black/5">
            {/* Background Effects */}
            <FloatingElement color="bg-orange-50" size="400px" top="-10%" right="10%" delay={0} />
            <FloatingElement color="bg-blue-50" size="400px" bottom="-10%" left="10%" delay={2} />
            <MetallicShape className="-top-24 -right-24 opacity-30" delay={0} size={500} />
            <MetallicShape className="-bottom-24 -left-24 opacity-30 rotate-180" delay={5} size={400} />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-orange-50 border border-orange-100 text-orange-600 font-medium text-xs tracking-wider mb-6 uppercase">
                        Our Impact
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Our Impact by the Numbers</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full shadow-sm" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 lg:divide-x divide-black/5">
                    {about.achievements.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="text-center p-8 group transition-transform duration-500"
                        >
                            <div className="mb-4 transform transition-transform group-hover:scale-110 duration-500">
                                <Counter value={stat.value} />
                            </div>
                            <div className="text-slate-500 text-sm font-semibold uppercase tracking-widest group-hover:text-orange-600 transition-colors duration-500">{stat.label}</div>

                            {/* Card glow effect on hover */}
                            <div className="absolute inset-0 bg-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-3xl blur-2xl" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
