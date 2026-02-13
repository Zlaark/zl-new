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

function MetallicShape({ delay = 0, className, size = 300 }) {
    return (
        <motion.div
            className={cn("absolute pointer-events-none z-0", className)}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.4, scale: 1 }}
            viewport={{ once: true }}
            animate={{
                y: [0, -40, 0],
                rotate: [0, 90, 0],
                x: [0, 20, 0],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                delay,
                ease: "linear"
            }}
            style={{ width: size, height: size }}
        >
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                <defs>
                    <linearGradient id={`metallic-p-${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#e2e8f0" />
                        <stop offset="25%" stopColor="#94a3b8" />
                        <stop offset="50%" stopColor="#475569" />
                        <stop offset="75%" stopColor="#94a3b8" />
                        <stop offset="100%" stopColor="#e2e8f0" />
                    </linearGradient>
                    <filter id="glow-p">
                        <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <path
                    fill={`url(#metallic-p-${delay})`}
                    filter="url(#glow-p)"
                    d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,77.3,-44.7C85.4,-31.3,90.5,-15.7,90.1,-0.2C89.7,15.2,83.9,30.5,75.1,43.7C66.3,56.9,54.5,68.1,40.7,75.8C26.9,83.5,13.5,87.7,-1.1,89.5C-15.7,91.3,-31.4,90.7,-45.8,84.1C-60.1,77.4,-73.2,64.7,-81.4,49.8C-89.6,34.9,-93,17.4,-91.6,0.8C-91.6,-15.8,-84.1,-31.7,-74.6,-45.5C-65.1,-59.3,-52.3,-71.1,-37.9,-77.7C-23.5,-84.3,-7.5,-85.7,8.6,-80.7C24.7,-75.7,31.3,-83.6,44.7,-76.4Z"
                    transform="translate(100 100)"
                />
            </svg>
        </motion.div>
    );
}

function FloatingElement({ color, size, top, left, delay }) {
    return (
        <motion.div
            className={cn("absolute rounded-full blur-[80px] opacity-20 pointer-events-none", color)}
            style={{ width: size, height: size, top, left }}
            animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.1, 1],
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                delay,
                ease: "easeInOut"
            }}
        />
    );
}

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
            <FloatingElement color="bg-orange-100" size="500px" top="-10%" right="0" delay={0} />
            <FloatingElement color="bg-blue-100" size="500px" bottom="0" left="0" delay={2} />

            <MetallicShape className="-top-20 -right-20" delay={0} size={500} />
            <MetallicShape className="-bottom-32 left-10" delay={5} size={300} />

            <div className='container mx-auto max-w-7xl relative z-10'>
                <div className='mb-24 flex flex-col items-center text-center'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className='inline-block px-4 py-1.5 mb-6 rounded-full bg-black/5 text-sm font-medium text-black/60 tracking-wider uppercase'
                    >
                        Selected Work
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className='text-5xl md:text-6xl font-bold text-black leading-[1.1] tracking-tighter mb-8'
                    >
                        <span className="relative inline-block">
                            <span className="metallic-shine">Digital Excellence</span>
                        </span> <br />
                        <span className="text-orange-500">Redefined.</span>

                        <style jsx>{`
                            .metallic-shine {
                                background: linear-gradient(
                                    90deg, 
                                    rgb(0, 0, 0) 0%, 
                                    rgb(0, 0, 0) 45%, 
                                    rgb(226, 232, 240) 50%, 
                                    rgb(0, 0, 0) 55%, 
                                    rgb(0, 0, 0) 100%
                                );
                                background-size: 200% 100%;
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                animation: shine 3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                                animation-iteration-count: 1;
                                animation-delay: 0.5s;
                                display: inline-block;
                            }

                            @keyframes shine {
                                0% {
                                    background-position: 200% 0%;
                                }
                                100% {
                                    background-position: -200% 0%;
                                }
                            }
                        `}</style>
                    </motion.h2>

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
