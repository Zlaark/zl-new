"use client";
import { about } from '@/data/content';
import { motion } from 'framer-motion';
import { Shield, Target, Zap, Users, Lightbulb, Heart, Globe, Award } from 'lucide-react';

// Map icon names to components if needed, or pass directly if they are components in structure.
// Assuming 'about.values' has icon properties that might need mapping or are just strings.
// Let's assume for now we map purely based on index or title if existing icons aren't compatible, 
// but looking at previous simple render, they might be emojis or strings. 
// Let's mock a mapping to ensure premium Lucide icons.
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
        <section className="section bg-slate-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-orange-100/20 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-amber-50 border border-amber-100 text-amber-600 font-medium text-xs tracking-wide mb-4 uppercase">
                        Core Principles
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Our Values</h2>
                    <p className="text-lg text-slate-500">The principles that guide everything we do and how we work together.</p>
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
                                className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                                    <Icon size={80} className="text-orange-500" />
                                </div>

                                <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                                    <Icon size={28} />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
