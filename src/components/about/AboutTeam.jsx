"use client";
import { aboutPage } from '@/data/content';
import { motion } from 'framer-motion';
import { MetallicShape } from '@/components/ui/MetallicShape';
import { FloatingElement } from '@/components/ui/FloatingElement';
import { Twitter, Linkedin, Github } from 'lucide-react';

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
        <section className="section bg-white relative overflow-hidden py-32">
            {/* Background elements */}
            <FloatingElement color="bg-orange-50" size="500px" top="0" right="0" delay={0} />
            <FloatingElement color="bg-purple-50" size="400px" bottom="0" left="0" delay={2} />
            <MetallicShape className="-bottom-20 -right-20 opacity-30" delay={0} size={500} />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center max-w-2xl mx-auto mb-20"
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-orange-50 border border-orange-100 text-orange-600 font-medium text-xs tracking-wider mb-6 uppercase">
                        Our Team
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Meet the Integrators</h2>
                    <p className="text-lg text-slate-500 max-w-xl mx-auto">The talented people behind the magic, dedicated to building the future of digital.</p>
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
                            <div className="absolute inset-0 bg-slate-50/50 backdrop-blur-sm rounded-3xl border border-black/5 group-hover:border-orange-200 transition-all duration-500 -z-10 shadow-sm group-hover:shadow-md" />

                            <div className="p-8 text-center flex flex-col items-center">
                                {/* Avatar */}
                                <div className="w-32 h-32 rounded-full mb-8 relative group overflow-hidden border-4 border-white shadow-lg group-hover:border-orange-100 transition-colors duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-amber-100 transition-transform duration-700 group-hover:scale-125" />
                                    <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-orange-500/80 group-hover:text-orange-600 transition-colors duration-500 select-none">
                                        {member.name.charAt(0)}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors duration-500">{member.name}</h3>
                                <p className="text-orange-600 font-semibold text-xs mb-4 uppercase tracking-widest">{member.role}</p>
                                <p className="text-slate-500 text-sm leading-relaxed mb-8 group-hover:text-slate-700 transition-colors duration-500">{member.bio}</p>

                                {/* Social Links */}
                                <div className="flex gap-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                    {[Linkedin, Twitter, Github].map((Icon, idx) => (
                                        <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-orange-200 hover:bg-orange-50 transition-all duration-300 shadow-sm">
                                            <Icon size={18} />
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
