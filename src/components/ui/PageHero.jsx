"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MetallicShape } from '@/components/ui/MetallicShape';
import { FloatingElement } from '@/components/ui/FloatingElement';

export default function PageHero({ title, subtitle }) {
    return (
        <section className="relative pt-48 pb-24 overflow-hidden bg-white min-h-[80vh] flex items-center">
            {/* Background elements */}
            <FloatingElement color="bg-orange-100" size="600px" top="-10%" right="-5%" delay={0} />
            <FloatingElement color="bg-blue-100" size="500px" bottom="-10%" left="-5%" delay={2} />

            {/* 3D Side Elements - Left */}
            <MetallicShape className="top-20 -left-20 opacity-40 rotate-12 scale-110" delay={0} size={400} />
            <MetallicShape className="bottom-40 -left-10 opacity-30 -rotate-12 scale-90" delay={2} size={300} />

            {/* 3D Side Elements - Right */}
            <MetallicShape className="top-40 -right-20 opacity-40 -rotate-45 scale-125" delay={1} size={500} />
            <MetallicShape className="bottom-20 -right-10 opacity-30 rotate-12 scale-75" delay={3} size={350} />

            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-6xl md:text-8xl lg:text-9xl font-bold text-slate-900 mb-8 tracking-tighter"
                    >
                        <span className="relative inline-block">
                            <span className="metallic-shine">{title}</span>
                        </span>

                        <style jsx>{`
                            .metallic-shine {
                                background: linear-gradient(
                                    90deg, 
                                    rgb(15, 23, 42) 0%, 
                                    rgb(15, 23, 42) 45%, 
                                    rgb(249, 115, 22) 50%, 
                                    rgb(15, 23, 42) 55%, 
                                    rgb(15, 23, 42) 100%
                                );
                                background-size: 200% 100%;
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                animation: shine 3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                                animation-iteration-count: Infinity;
                                animation-delay: 0.5s;
                                display: inline-block;
                                padding-bottom: 0.15em;
                                margin-bottom: -0.15em;
                                line-height: 1.1;
                            }

                            @keyframes shine {
                                0% { background-position: 200% 0%; }
                                100% { background-position: -200% 0%; }
                            }
                        `}</style>
                    </motion.h1>

                    {subtitle && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-amber-500 rounded-full" />
                            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed pl-6">
                                {subtitle}
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}
