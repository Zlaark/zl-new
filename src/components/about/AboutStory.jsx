"use client";
import { aboutPage } from '@/data/content';
import { motion } from 'framer-motion';
import { MetallicShape } from '@/components/ui/MetallicShape';
import { FloatingElement } from '@/components/ui/FloatingElement';

export default function AboutStory() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <section className="section bg-white relative overflow-hidden py-32">
            {/* Background elements */}
            <FloatingElement color="bg-orange-100" size="500px" top="10%" left="-10%" delay={0} />
            <FloatingElement color="bg-blue-100" size="400px" bottom="0" right="-5%" delay={2} />
            <MetallicShape className="top-1/4 -left-20 opacity-30" delay={0} size={400} />
            <MetallicShape className="bottom-1/4 -right-20 opacity-30 rotate-45" delay={5} size={300} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.span variants={fadeInUp} className="inline-block py-1.5 px-4 rounded-full bg-orange-50 border border-orange-100 text-orange-600 font-medium text-xs tracking-wider mb-6 uppercase">
                            Our Story
                        </motion.span>
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                            {aboutPage.story.title.split(' ').map((word, i) => (
                                <span key={i} className={i === 1 ? "text-orange-600" : ""}>{word} </span>
                            ))}
                        </motion.h2>
                        <div className="space-y-6">
                            {aboutPage.story.paragraphs.map((p, i) => (
                                <motion.p key={i} variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed font-light">
                                    {p}
                                </motion.p>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual/Image Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white/40 backdrop-blur-xl border border-black/5 shadow-xl">
                            {/* Abstract Gradient Composition */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 to-amber-100/20" />
                            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-orange-200/30 to-transparent rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-amber-200/30 to-transparent rounded-full blur-3xl" />

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/60 backdrop-blur-2xl border border-white rounded-2xl shadow-xl"
                            />
                            <motion.div
                                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-white/60 backdrop-blur-2xl border border-white rounded-full shadow-xl"
                            />

                            <div className="absolute inset-0 flex items-center justify-center p-12">
                                <div className="text-center">
                                    <div className="text-6xl font-bold text-black/5 mb-4 select-none uppercase tracking-tighter">Zlaark</div>
                                    <div className="h-0.5 w-12 bg-orange-500 mx-auto rounded-full" />
                                </div>
                            </div>
                        </div>

                        {/* Decorative Grid */}
                        <div className="absolute -z-10 -top-6 -right-6 w-full h-full border border-black/5 rounded-[2.5rem] pointer-events-none" />
                        <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full border border-orange-200/20 rounded-[2.5rem] pointer-events-none" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
