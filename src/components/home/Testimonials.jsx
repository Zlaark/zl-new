'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { testimonials } from '@/data/content';
import { cn } from '@/lib/utils';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoplay, setIsAutoplay] = useState(true);

    const items = testimonials.items;

    useEffect(() => {
        if (!isAutoplay) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isAutoplay, items.length]);

    const next = () => {
        setIsAutoplay(false);
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const prev = () => {
        setIsAutoplay(false);
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    return (
        <section className="py-24 bg-[#f8fafc] relative overflow-hidden font-sans">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-400 font-bold tracking-[0.3em] text-[10px] uppercase mb-3 block"
                    >
                        &gt; TESTIMONIALS &lt;
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight"
                    >
                        What clients say
                    </motion.h2>
                </div>

                <div className="max-w-5xl mx-auto relative">
                    <div className="relative h-[400px] md:h-[350px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row gap-8 items-center h-full">
                                    <div className="relative flex-shrink-0">
                                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-slate-100 flex items-center justify-center text-3xl font-bold text-[#f46f17] overflow-hidden border border-slate-200">
                                            {items[currentIndex].name.charAt(0)}
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 bg-[#f46f17] p-2 rounded-lg text-white shadow-lg">
                                            <Quote size={16} />
                                        </div>
                                    </div>

                                    <div className="flex-grow">
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(items[currentIndex].rating)].map((_, i) => (
                                                <Star key={i} size={16} className="fill-[#f46f17] text-[#f46f17]" />
                                            ))}
                                        </div>
                                        <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed mb-6 italic">
                                            "{items[currentIndex].content}"
                                        </p>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900">{items[currentIndex].name}</h4>
                                            <p className="text-slate-500 font-medium text-sm">{items[currentIndex].role}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-center md:justify-end items-center gap-4 mt-8">
                        <button
                            onClick={prev}
                            className="p-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all shadow-sm active:scale-95"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <div className="flex gap-2">
                            {items.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setIsAutoplay(false); setCurrentIndex(i); }}
                                    className={cn(
                                        "h-1.5 rounded-full transition-all duration-300",
                                        currentIndex === i ? "w-8 bg-[#f46f17]" : "w-1.5 bg-slate-200"
                                    )}
                                />
                            ))}
                        </div>
                        <button
                            onClick={next}
                            className="p-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all shadow-sm active:scale-95"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/4 left-[-5%] w-64 h-64 bg-slate-100 blur-3xl rounded-full opacity-50" />
            <div className="absolute bottom-1/4 right-[-5%] w-64 h-64 bg-orange-50 blur-3xl rounded-full opacity-50" />
        </section>
    );
}
