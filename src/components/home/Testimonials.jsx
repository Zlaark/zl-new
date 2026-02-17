'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { testimonials } from '@/data/content';
import { cn } from '@/lib/utils';

const TestimonialCard = ({ item, index }) => (
    <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6 items-start h-full relative overflow-hidden group hover:border-[#f46f17]/30 transition-colors">
        <div className="relative flex-shrink-0">
            <div className="w-20 h-20 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl font-bold text-[#f46f17] overflow-hidden border border-slate-200 group-hover:bg-slate-50 transition-colors">
                {item.name.charAt(0)}
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#f46f17] p-2 rounded-lg text-white shadow-lg">
                <Quote size={14} />
            </div>
        </div>

        <div className="flex-grow flex flex-col justify-between w-full">
            <div>
                <div className="flex gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-[#f46f17] text-[#f46f17]" />
                    ))}
                </div>
                <p className="text-base text-slate-700 font-medium leading-relaxed mb-6 italic">
                    "{item.content}"
                </p>
            </div>
            <div className="mt-auto">
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#f46f17] transition-colors">{item.name}</h4>
                <p className="text-slate-500 font-medium text-xs uppercase tracking-wider">{item.role}</p>
            </div>
        </div>
    </div>
);

export default function Testimonials() {
    const items = testimonials.items;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoplay, setIsAutoplay] = useState(true);

    const nextIndex = (currentIndex + 1) % items.length;

    useEffect(() => {
        if (!isAutoplay) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isAutoplay, items.length]);

    const handleNext = () => {
        setIsAutoplay(false);
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const handlePrev = () => {
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

                <div className="max-w-6xl mx-auto relative">
                    <div className="relative h-[950px] lg:h-[450px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-8"
                            >
                                <div className="h-full">
                                    <TestimonialCard item={items[currentIndex]} index={currentIndex} />
                                </div>
                                <div className="h-full hidden lg:block">
                                    <TestimonialCard item={items[nextIndex]} index={nextIndex} />
                                </div>
                                <div className="h-full lg:hidden">
                                    <TestimonialCard item={items[nextIndex]} index={nextIndex} />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 mt-12">
                        <div className="flex gap-2 order-2 md:order-1">
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
                        
                        <div className="flex items-center gap-4 order-1 md:order-2">
                            <button
                                onClick={handlePrev}
                                className="p-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all shadow-sm active:scale-95 hover:border-[#f46f17]/30"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="p-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all shadow-sm active:scale-95 hover:border-[#f46f17]/30"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute top-1/4 left-[-5%] w-64 h-64 bg-slate-100 blur-3xl rounded-full opacity-50" />
            <div className="absolute bottom-1/4 right-[-5%] w-64 h-64 bg-orange-50 blur-3xl rounded-full opacity-50" />
        </section>
    );
}
