'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const projects = [
    {
        id: "atelier-nine",
        title: "Atelier Nine",
        industry: "Luxury Fashion",
        scope: "Brand Identity + Website",
        description: "Elevated the portfolio design to showcase craftsmanship with greater clarity, cohesion, and visual impact.",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1000&auto=format&fit=crop",
        link: "/work/atelier-nine"
    },
    {
        id: "nova-studio",
        title: "Nova Studio",
        industry: "Creative Agency",
        scope: "Website Design + Development",
        description: "Unified the brand and strategy to better express value, simplify navigation, and strengthen the digital presence.",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop",
        link: "/work/nova-studio"
    },
    {
        id: "apex-finance",
        title: "Apex Finance",
        industry: "FinTech",
        scope: "App UI/UX + Branding",
        description: "Redefined the user experience for complex financial data, making investment tracking intuitive and accessible.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        link: "/work/apex-finance"
    },
    {
        id: "eco-pulse",
        title: "Eco Pulse",
        industry: "Sustainability",
        scope: "Platform Design",
        description: "Designed a data-driven platform connecting consumers with sustainable choices through transparent impact metrics.",
        image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1000&auto=format&fit=crop",
        link: "/work/eco-pulse"
    }
];

export default function ProjectSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [[page, direction], setPage] = useState([0, 0]);

    useEffect(() => {
        const timer = setInterval(() => {
            const nextIndex = (currentIndex + 1) % projects.length;
            setPage([nextIndex, 1]);
            setCurrentIndex(nextIndex);
        }, 6000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0,
            filter: 'blur(10px)'
        }),
        center: {
            x: 0,
            opacity: 1,
            filter: 'blur(0px)'
        },
        exit: (direction) => ({
            x: direction < 0 ? 500 : -500,
            opacity: 0,
            filter: 'blur(10px)'
        })
    };

    const paginate = (newDirection) => {
        const nextIndex = (currentIndex + newDirection + projects.length) % projects.length;
        setPage([page + newDirection, newDirection]);
        setCurrentIndex(nextIndex);
    };

    return (
        <section className="py-24 bg-[#fafafa]">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col items-center mb-16 relative">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-gray-200 font-light text-xl">&lt;</span>
                        <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">FEATURED PROJECTS</span>
                        <span className="text-gray-200 font-light text-xl">&gt;</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold text-slate-900 text-center leading-[0.95]">
                        Refined projects<br />with purpose
                    </h2>
                    
                </div>

                <div className="relative">
                    <div className="flex justify-center mb-10 gap-2">
                        {projects.map((project, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setPage([index, index > currentIndex ? 1 : -1]);
                                    setCurrentIndex(index);
                                }}
                                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                                    index === currentIndex 
                                        ? 'bg-slate-900 text-white' 
                                        : 'bg-white text-gray-400 hover:bg-gray-50'
                                }`}
                            >
                                {project.title}
                            </button>
                        ))}
                    </div>

                    <div className="relative min-h-[500px]">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.3 } }}
                                className="w-full absolute inset-0"
                            >
                                <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col md:flex-row h-full">
                                    <div className="w-full md:w-5/12 p-8 md:p-12 flex flex-col justify-center bg-white order-2 md:order-1">
                                        <h3 className="text-3xl font-bold text-slate-900 mb-6">{projects[currentIndex].title}</h3>
                                        <div className="space-y-4 mb-8">
                                            <div>
                                                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Industry</span>
                                                <span className="text-base font-bold text-slate-900">{projects[currentIndex].industry}</span>
                                            </div>
                                            <div>
                                                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Scope</span>
                                                <span className="text-base font-bold text-slate-900">{projects[currentIndex].scope}</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-500 text-lg mb-10">{projects[currentIndex].description}</p>
                                        <Link href={projects[currentIndex].link} className="inline-flex bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl w-fit transition-transform active:scale-95">
                                            View project detail
                                        </Link>
                                    </div>
                                    <div className="w-full md:w-7/12 relative h-[300px] md:h-auto bg-slate-100 order-1 md:order-2">
                                        <img src={projects[currentIndex].image} alt={projects[currentIndex].title} className="absolute inset-0 w-full h-full object-cover" />
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-center mt-12 gap-8 items-center">
                        <button onClick={() => paginate(-1)} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-900 hover:text-gray-900 transition-all">
                            <ArrowLeft size={18} />
                        </button>
                        <div className="flex gap-3">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setPage([index, index > currentIndex ? 1 : -1]);
                                        setCurrentIndex(index);
                                    }}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex ? 'bg-slate-900 w-12' : 'bg-gray-200 w-2'}`}
                                />
                            ))}
                        </div>
                        <button onClick={() => paginate(1)} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-900 hover:text-gray-900 transition-all">
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
