"use client";
import { servicesPage } from '@/data/content';
import { motion } from 'framer-motion';

export default function ServicesProcess() {
    return (
        <section className="section bg-slate-50 overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-3xl opacity-60 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-3xl opacity-60 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-20"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-orange-50 border border-orange-100 text-orange-600 font-medium text-xs tracking-wide mb-4 uppercase">
                        How We Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Our Process</h2>
                    <p className="text-lg text-slate-500">From concept to launch, we follow a proven methodology to ensure success.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-0.5 bg-gradient-to-r from-orange-200 via-amber-200 to-orange-200 opacity-50" />

                    {servicesPage.process.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            whileHover={{ y: -5 }}
                            className="relative group bg-white md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none border md:border-none border-slate-100 shadow-sm md:shadow-none"
                        >
                            {/* Number Circle */}
                            <div className="w-16 h-16 rounded-full bg-white border-4 border-orange-50 flex items-center justify-center text-xl font-bold text-orange-500 shadow-sm mb-6 relative z-10 mx-auto md:mx-0 group-hover:scale-110 group-hover:border-orange-100 transition-all duration-300">
                                {item.step}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 text-center md:text-left">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm text-center md:text-left">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
