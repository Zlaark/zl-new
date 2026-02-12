'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
    {
        id: 1,
        title: 'FinTech Revolution',
        category: 'Web Application',
        gradient: 'from-blue-600/80 to-cyan-500/80',
        size: 'large', 
        image: '/images/project1.jpg' // Placeholder if no real image
    },
    {
        id: 2,
        title: 'EcoSpace',
        category: 'Brand Identity',
        gradient: 'from-green-500/80 to-emerald-400/80',
        size: 'small'
    },
    {
        id: 3,
        title: 'Modern Architecture',
        category: 'Website Design',
        gradient: 'from-neutral-800 to-neutral-600',
        size: 'small'
    },
    {
        id: 4,
        title: 'Aero Dynamics',
        category: 'Product Promo',
        gradient: 'from-orange-500/80 to-red-500/80',
        size: 'small'
    },
    {
        id: 5,
        title: 'Future AI',
        category: 'SaaS Platform',
        gradient: 'from-purple-600/80 to-indigo-600/80',
        size: 'large'
    }
];

export default function Portfolio() {
    return (
        <section className='section bg-background relative'>
             <div className='container mx-auto px-6'>
                <div className='flex flex-col md:flex-row md:items-end justify-between mb-16'>
                    <div className='mb-8 md:mb-0 max-w-2xl'>
                        <motion.span 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className='text-accent text-sm font-medium tracking-wider uppercase mb-4 block'
                        >
                            Selected Work
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className='text-4xl md:text-5xl font-bold text-foreground mb-4'
                        >
                            Crafting Digital <br /> Masterpieces.
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link href='/work' className='group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-foreground hover:bg-white/10 transition-all'>
                            View All Projects
                            <ArrowUpRight size={18} className='text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' />
                        </Link>
                    </motion.div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[450px]'>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={cn(
                                'group relative rounded-[2rem] overflow-hidden cursor-pointer border border-white/5 bg-surface-50',
                                project.size === 'large' ? 'md:col-span-2' : ''
                            )}
                        >
                            {/* Gradient Background (Simulating Image) */}
                            <div className={cn(
                                'absolute inset-0 transition-transform duration-700 group-hover:scale-105 bg-gradient-to-br',
                                project.gradient
                            )} />
                            
                            {/* Noise/Texture Overlay */}
                            <div className='absolute inset-0 bg-[url(/noise.png)] opacity-20 mix-blend-overlay' />

                            {/* Dark Gradient Overlay for Text Readability */}
                            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80' />

                            {/* Content */}
                            <div className='absolute inset-0 p-8 flex flex-col justify-between'>
                                <div className='flex justify-end'>
                                    <div className='w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500'>
                                        <ArrowUpRight size={24} />
                                    </div>
                                </div>

                                <div className='transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500'>
                                    <div className='inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/80 text-xs font-medium tracking-wide mb-4'>
                                        {project.category}
                                    </div>
                                    <h3 className='text-3xl font-bold text-white mb-2 leading-tight'>
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
