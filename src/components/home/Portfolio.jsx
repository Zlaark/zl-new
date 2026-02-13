'use client';

import { motion, useAnimationControls } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRef, useState, useEffect } from 'react';
import { MetallicShape } from '@/components/ui/MetallicShape';
import { FloatingElement } from '@/components/ui/FloatingElement';

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

// Duplicate projects to create a seamless loop
const marqueeProjects = [...projects, ...projects, ...projects];

function ProjectCard({ project, index }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                'group relative rounded-[2.5rem] overflow-hidden cursor-pointer bg-white h-[450px] min-w-[350px] md:min-w-[450px] transition-shadow duration-500',
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

            {/* Floating content */}
            <div className='absolute inset-0 p-10 flex flex-col justify-between z-20'>
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
    const controls = useAnimationControls();

    useEffect(() => {
        controls.start({
            x: "-50%",
            transition: {
                duration: 40,
                ease: "linear",
                repeat: Infinity,
            }
        });
    }, [controls]);

    return (
        <section className='relative bg-[#fdfdfd] py-32 overflow-hidden'>
            {/* Background elements */}
            <FloatingElement color="bg-orange-100" size="500px" top="-10%" right="0" delay={0} />
            <FloatingElement color="bg-blue-100" size="500px" bottom="0" left="0" delay={2} />

            <MetallicShape className="-top-20 -right-20" delay={0} size={500} />
            <MetallicShape className="-bottom-32 left-10" delay={5} size={300} />

            <div className='container mx-auto max-w-7xl relative z-10 px-4'>
                <div className='mb-16 flex flex-col items-center text-center'>
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
                        </span>{" "}
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
            </div>

            {/* Marquee Container */}
            <div
                className='relative w-full overflow-hidden'
                onMouseEnter={() => controls.stop()}
                onMouseLeave={() => controls.start({
                    x: "-50%",
                    transition: {
                        duration: 40,
                        ease: "linear",
                        repeat: Infinity,
                    }
                })}
            >
                <div className="flex gap-8 pl-4 md:pl-20 min-w-max">
                    <motion.div
                        className="flex gap-8"
                        animate={controls}
                    >
                        {marqueeProjects.map((project, index) => (
                            <ProjectCard key={`${project.id}-${index}`} project={project} index={index} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
