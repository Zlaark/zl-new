'use client';

import { motion, useMotionValue, useTransform, useScroll, useSpring } from 'framer-motion';
import { Lightbulb, Palette, Code2, Rocket, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useRef, useEffect } from 'react';

const services = [
    {
        icon: Lightbulb,
        title: 'Strategy & Brand',
        description: 'We define your digital north star, crafting brand identities that resonate and strategies that deliver measurable growth.',
        className: 'md:col-span-2',
        gradient: 'from-orange-500/20 to-amber-500/20'
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Award-winning interfaces that blend beauty with function.',
        className: 'md:col-span-1',
        gradient: 'from-blue-500/30 to-indigo-500/30'
    },
    {
        icon: Code2,
        title: 'Development',
        description: 'Robust, scalable, and lightning-fast code built with modern tech.',
        className: 'md:col-span-1',
        gradient: 'from-emerald-500/30 to-teal-500/30'
    },
    {
        icon: Rocket,
        title: 'Growth & Marketing',
        description: 'Data-driven campaigns that amplify your reach and convert your ideal audience.',
        className: 'md:col-span-2',
        gradient: 'from-purple-500/30 to-pink-500/30'
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
                    <linearGradient id={`metallic-${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#e2e8f0" />
                        <stop offset="25%" stopColor="#94a3b8" />
                        <stop offset="50%" stopColor="#475569" />
                        <stop offset="75%" stopColor="#94a3b8" />
                        <stop offset="100%" stopColor="#e2e8f0" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
                <path
                    fill={`url(#metallic-${delay})`}
                    filter="url(#glow)"
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

function ServiceCard({ service, index }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 100, damping: 30 });

    function handleMouseMove(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(event.clientX - centerX);
        y.set(event.clientY - centerY);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, perspective: 1000 }}
            className={cn(
                'group relative p-8 rounded-[2rem] bg-white border border-black/5 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-black/5',
                service.className
            )}
        >
            <div className={cn(
                'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br',
                service.gradient
            )} />
            
            <div className='relative z-10 h-full flex flex-col'>
                <div className='flex justify-between items-start mb-12'>
                    <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className='p-4 rounded-2xl bg-slate-50 border border-black/5 text-black transition-colors group-hover:bg-white group-hover:border-black/10'
                    >
                        <service.icon size={32} strokeWidth={1.5} />
                    </motion.div>
                    <div className='p-2 rounded-full bg-black/5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0'>
                        <ArrowUpRight className='text-black size={6}' />
                    </div>
                </div>
                
                <div className='mt-auto'>
                    <h3 className='text-2xl font-bold text-black mb-4 group-hover:translate-x-1 transition-transform duration-500'>
                        {service.title}
                    </h3>
                    <p className='text-black/60 leading-relaxed text-lg group-hover:text-black/80 transition-colors duration-500'>
                        {service.description}
                    </p>
                </div>
            </div>

            <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-black/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
        </motion.div>
    );
}

export default function Services() {
    return (
        <section className='section relative overflow-hidden bg-[#fafafa] py-32'>
            <FloatingElement color="bg-orange-400" size="400px" top="-10%" left="-5%" delay={0} />
            <FloatingElement color="bg-blue-400" size="300px" top="60%" left="80%" delay={2} />
            <FloatingElement color="bg-purple-400" size="250px" top="20%" left="70%" delay={4} />

            <MetallicShape className="-top-20 -right-20" delay={0} size={500} />
            <MetallicShape className="top-1/2 -left-32" delay={5} size={400} />
            <MetallicShape className="-bottom-32 right-1/4" delay={10} size={300} />

            <div className='container mx-auto px-6 relative z-10'>
                <div className='mb-24 max-w-3xl mx-auto text-center'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className='inline-block px-4 py-1.5 mb-6 rounded-full bg-black/5 text-sm font-medium text-black/60 tracking-wider uppercase'
                    >
                        Our Expertise
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='text-5xl md:text-6xl font-bold mb-8 text-black tracking-tight'
                    >
                        Solutions built for the <span className='text-orange-600'>future</span>.
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className='text-xl md:text-2xl text-black/60 leading-relaxed'
                    >
                        We combine strategic thinking with cutting-edge technology to deliver digital products that stand out.
                    </motion.p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
