"use client";
import { aboutPage } from '@/data/content';
import { motion } from 'framer-motion';

export default function AboutTeam() {
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="section bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-orange-50 border border-orange-100 text-orange-600 font-medium text-xs tracking-wide mb-4 uppercase">
                        Our Team
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Meet the Integrators</h2>
                    <p className="text-lg text-slate-500">The talented people behind the magic.</p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {aboutPage.team.map((member, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            {/* Card Background */}
                            <div className="absolute inset-0 bg-slate-50 rounded-2xl transform transition-transform duration-300 group-hover:scale-105 -z-10" />

                            <div className="p-8 text-center flex flex-col items-center">
                                {/* Avatar */}
                                <div className="w-32 h-32 rounded-full mb-6 relative group overflow-hidden border-4 border-white shadow-md">
                                    <div className={`absolute inset-0 bg-gradient-to-br from-orange-100 to-amber-100 transition-transform duration-500 group-hover:scale-110`} />
                                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-orange-500/80 group-hover:text-orange-600 transition-colors">
                                        {member.name.charAt(0)}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                                <p className="text-orange-600 font-medium text-sm mb-3 uppercase tracking-wider">{member.role}</p>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">{member.bio}</p>

                                {/* Social Links Placeholder */}
                                <div className="flex gap-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                    {['twitter', 'linkedin'].map(social => (
                                        <a key={social} href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-500 hover:border-orange-200 transition-colors shadow-sm">
                                            <span className="sr-only">{social}</span>
                                            <div className="w-4 h-4 bg-current rounded-sm" /> {/* Placeholder icon */}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
