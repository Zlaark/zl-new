'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRef, useState } from 'react';

const projects = [
    {
        id: 1,
        title: 'FinTech Revolution',
        category: 'Web Application',
        gradient: 'from-blue-600/90 to-cyan-500/90',
        image: '/images/project1.jpg'
    },
    {
        id: 2,
        title: 'EcoSpace',
        category: 'Brand Identity',
        gradient: 'from-green-500/90 to-emerald-400/90'
    },
    {
        id: 3,
        title: 'Modern Architecture',
        category: 'Website Design',
        gradient: 'from-neutral-800 to-neutral-700'
    },
    {
        id: 4,
        title: 'Aero Dynamics',
        category: 'Product Promo',
        gradient: 'from-orange-500/90 to-red-500/90'
    },
    {
        id: 5,
        title: 'Future AI',
        category: 'SaaS Platform',
        gradient: 'from-purple-600/90 to-indigo-600/90'
    }
];

function ProjectCard({ project, index }) {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // 3D Tilt Effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 20 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

    function handleMouseMove(e) {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    }

    function handleMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
        setIsHovered(false);
    }

    // Determine grid span based on index
    // First row (index 0, 1, 2) -> 3 items -> 2 cols each in a 6-col grid
    // Second row (index 3, 4) -> 2 items -> 3 cols each in a 6-col grid
    const getGridSpan = (i) => {
        if (i < 3) return 'lg:col-span-2 md:col-span-3';
        return 'lg:col-span-3 md:col-span-6';
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                perspective: 1000,
                transformStyle: "preserve-3d"
            }}
            className={cn(
                'group relative rounded-[2.5rem] overflow-hidden cursor-pointer bg-white h-[450px] transition-shadow duration-500',
                getGridSpan(index),
                isHovered ? 'shadow-[0_20px_50px_rgba(0,0,0,0.15)]' : 'shadow-lg'
            )}
        >
            {/* Background Gradient with Scale Animation */}
            <motion.div
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                className={cn(
                    'absolute inset-0 bg-gradient-to-br',
                    project.gradient
                )}
            />

            {/* Premium Shimmer/Glow Overlay */}
            <motion.div
                animate={{
                    opacity: isHovered ? 0.4 : 0,
                    x: isHovered ? ['-100%', '100%'] : '-100%'
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 inset-y-[-100%] rotate-45 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none z-10"
            />

            {/* Noise/Texture Overlay */}
            <div className='absolute inset-0 bg-[url(/noise.png)] opacity-10 mix-blend-overlay' />

            {/* Vignette Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90' />

            {/* Floating content with parallax effect */}
            <div className='absolute inset-0 p-10 flex flex-col justify-between z-20' style={{ transform: "translateZ(50px)" }}>
                <div className='flex justify-end'>
                    <motion.div
                        animate={{
                            scale: isHovered ? 1.1 : 1,
                            rotate: isHovered ? 45 : 0,
                            backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'
                        }}
                        className='w-14 h-14 rounded-full backdrop-blur-xl flex items-center justify-center text-white border border-white/20 transition-all duration-300'
                    >
                        <ArrowUpRight size={28} />
                    </motion.div>
                </div>

                <div className='space-y-4'>
                    <motion.div
                        animate={{ x: isHovered ? 10 : 0 }}
                        transition={{ duration: 0.4 }}
                        className='inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white/90 text-xs font-semibold tracking-widest uppercase'
                    >
                        {project.category}
                    </motion.div>
                    <motion.h3
                        animate={{ x: isHovered ? 10 : 0 }}
                        transition={{ duration: 0.4, delay: 0.05 }}
                        className='text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight'
                    >
                        {project.title}
                    </motion.h3>
                </div>
            </div>

            {/* Hover Glow Border */}
            <motion.div
                animate={{ opacity: isHovered ? 1 : 0 }}
                className="absolute inset-0 rounded-[2.5rem] border-2 border-white/30 pointer-events-none z-30"
            />
        </motion.div>
    );
}

export default function Portfolio() {
    return (
        <section className='section bg-[#fdfdfd] py-32 px-4 relative overflow-hidden'>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

            <div className='container mx-auto max-w-7xl'>
                <div className='mb-24 flex flex-col md:flex-row items-end justify-between gap-8'>
                    <div className='max-w-xl'>
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className='inline-block px-4 py-1.5 mb-6 rounded-full bg-orange-500/10 text-xs font-bold text-orange-600 tracking-[0.2em] uppercase'
                        >
                            Selected Work
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className='text-5xl md:text-6xl font-black text-black leading-[1.1] tracking-tighter'
                        >
                            Digital Excellence <br />
                            <span className="text-orange-500">Redefined.</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link href='/work' className='group relative flex items-center gap-3 px-8 py-4 rounded-full bg-black text-white overflow-hidden transition-all duration-300 hover:pr-10'>
                            <span className="relative z-10 font-medium">Explore More Projects</span>
                            <ArrowUpRight size={20} className='relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' />
                            <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>
                    </motion.div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-6 gap-8'>
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
