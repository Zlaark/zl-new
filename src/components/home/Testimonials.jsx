'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { testimonials } from '@/data/content';
import { cn } from '@/lib/utils';

const TestimonialCard = ({ item }) => (
    <div className="bg-slate-200/90 rounded-3xl p-5 h-full transition-colors group-hover:bg-slate-300/50">
        <div className="bg-white rounded-2xl pl-8 md:pl-10 pr-10 md:pr-14 py-8 md:py-10 h-full flex flex-col justify-between shadow-sm border border-slate-100/50">
            <div>
                <p className="text-lg md:text-xl text-slate-800 font-medium leading-[1.5] mb-6 md:mb-8 tracking-tight">
                    {item.content}
                </p>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-auto">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
                        <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-100 font-bold text-xs">
                            {item.name.charAt(0)}
                        </div>
                    </div>
                    <div className="flex items-center gap-2 whitespace-nowrap">
                        <span className="text-sm font-semibold text-slate-900">{item.name}</span>
                        <span className="text-slate-300">—</span>
                        <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">{item.role}</span>
                    </div>
                </div>
                
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star 
                            key={i} 
                            size={14} 
                            className={cn(
                                "fill-[#f46f17] text-[#f46f17]",
                                i >= item.rating && "opacity-20"
                            )} 
                        />
                    ))}
                </div>
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
            <div className="container mx-auto px-4 relative z-10 w-full">
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

                <div className="max-w-[1400px] mx-auto relative lg:px-4">
                    <div className="relative h-[950px] lg:h-[480px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-8"
                            >
                                <div className="h-full group">
                                    <TestimonialCard item={items[currentIndex]} />
                                </div>
                                <div className="h-full hidden lg:block group">
                                    <TestimonialCard item={items[nextIndex]} />
                                </div>
                                <div className="h-full lg:hidden group">
                                    <TestimonialCard item={items[nextIndex]} />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="relative mt-12 flex justify-center items-center max-w-6xl mx-auto">
                        <div className="absolute left-0 right-0 h-px bg-slate-200 z-0" />
                        
                        <div className="relative z-10 bg-[#f8fafc] px-6 flex items-center gap-6">
                            <button
                                onClick={handlePrev}
                                className="p-3 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-[#f46f17] hover:border-[#f46f17]/30 transition-all shadow-sm active:scale-95 flex-shrink-0"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            
                            <div className="flex gap-1.5 px-2 items-center flex-1 w-[200px] md:w-[300px]">
                                <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden relative">
                                    <motion.div 
                                        className="absolute top-0 left-0 h-full bg-[#f46f17] rounded-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    />
                                </div>
                            </div>

                            <button
                                onClick={handleNext}
                                className="p-3 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-[#f46f17] hover:border-[#f46f17]/30 transition-all shadow-sm active:scale-95 flex-shrink-0"
                            >
                                <ChevronRight size={18} />
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
