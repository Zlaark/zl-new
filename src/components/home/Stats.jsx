'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { MetallicShape } from '@/components/ui/MetallicShape';
import { FloatingElement } from '@/components/ui/FloatingElement';

const stats = [
    {
        id: 1,
        value: 120,
        suffix: '+',
        label: 'Projects Delivered',
    },
    {
        id: 2,
        value: 45,
        suffix: '+',
        label: 'Happy Clients',
    },
    {
        id: 3,
        value: 12,
        suffix: '',
        label: 'Design Awards',
    },
    {
        id: 4,
        value: 5,
        suffix: 'Years',
        label: 'Industry Experience',
    }
];

const Counter = ({ value, suffix }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest) + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref} className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500" />;
};

export default function Stats() {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Background elements */}
            <FloatingElement color="bg-orange-100" size="400px" top="-10%" right="10%" delay={0} />
            <FloatingElement color="bg-blue-100" size="300px" bottom="0" left="0" delay={2} />
            <MetallicShape className="-top-20 -left-20" delay={0} size={400} />
            <MetallicShape className="-bottom-20 -right-20" delay={5} size={300} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto backdrop-blur-md bg-white/40 border border-black/5 rounded-[2.5rem] p-12 md:p-20 shadow-xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
                        {stats.map((stat) => (
                            <motion.div
                                key={stat.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: stat.id * 0.1 }}
                                className="text-center group"
                            >
                                <div className="mb-4 transform transition-transform group-hover:scale-110 duration-500">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <p className="text-black/40 font-semibold text-sm uppercase tracking-widest">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
