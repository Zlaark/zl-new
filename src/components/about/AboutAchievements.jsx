"use client";
import { about } from '@/data/content';
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Counter = ({ value, suffix }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            // Parse numeric value if string contains '+' or other chars, mainly for '150+', '50+'
            const numericValue = parseInt(value, 10);
            if (!isNaN(numericValue)) {
                motionValue.set(numericValue);
            }
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                // Check if original value had a suffix like '+'
                const hasPlus = value.toString().includes('+');
                const finalSuffix = hasPlus ? '+' : '';
                ref.current.textContent = Math.floor(latest) + finalSuffix;
            }
        });
    }, [springValue, value]);

    return <span ref={ref} className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">{value}</span>;
};

export default function AboutAchievements() {
    return (
        <section className="relative py-24 overflow-hidden bg-slate-900 border-y border-slate-800">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Our Impact by the Numbers</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-slate-800/50">
                    {about.achievements.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="text-center p-6 group"
                        >
                            <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                                <Counter value={stat.value} />
                            </div>
                            <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
