"use client";
import { about } from '@/data/content';
import { motion } from 'framer-motion';
import { Shield, Target, Zap, Users, Lightbulb, Heart, Globe, Award } from 'lucide-react';
import { MetallicShape } from '@/components/ui/MetallicShape';
import { FloatingElement } from '@/components/ui/FloatingElement';

const iconMap = [Shield, Target, Zap, Users, Lightbulb, Heart, Globe, Award];

export default function AboutValues() {
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="section bg-[#fafafa] relative overflow-hidden py-32">
            {/* Background elements */}
            <FloatingElement color="bg-orange-100" size="600px" top="-10%" left="10%" delay={0} />
            <FloatingElement color="bg-blue-100" size="500px" bottom="-10%" right="10%" delay={2} />
            <MetallicShape className="top-0 left-1/2 -translate-x-1/2 opacity-30" delay={0} size={800} />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-20"
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-orange-50 border border-orange-100 text-orange-600 font-medium text-xs tracking-wider mb-6 uppercase">
                        Core Principles
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Our Values</h2>
                    <p className="text-lg text-slate-500 leading-relaxed max-w-xl mx-auto">The principles that guide everything we do and how we work together.</p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {about.values.map((value, i) => {
                        const Icon = iconMap[i % iconMap.length];
                        return (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="group bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-black/5 hover:border-orange-500/20 transition-all duration-500 relative overflow-hidden shadow-xl"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity transform group-hover:scale-110 duration-700">
                                    <Icon size={120} className="text-orange-500" />
                                </div>

                                <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-md">
                                    <Icon size={32} />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors duration-500">{value.title}</h3>
                                <p className="text-slate-500 text-base leading-relaxed group-hover:text-slate-700 transition-colors duration-500">{value.description}</p>

                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
