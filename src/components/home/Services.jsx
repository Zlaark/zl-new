'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Palette, Code2, Rocket, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const services = [
    {
        icon: Lightbulb,
        title: 'Strategy & Brand',
        description: 'We define your digital north star, crafting brand identities that resonate and strategies that deliver measurable growth.',
        className: 'md:col-span-2',
        gradient: 'from-orange-500/10 to-amber-500/10'
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Award-winning interfaces that blend beauty with function.',
        className: 'md:col-span-1',
        gradient: 'from-blue-500/20 to-indigo-500/20'
    },
    {
        icon: Code2,
        title: 'Development',
        description: 'Robust, scalable, and lightning-fast code built with modern tech.',
        className: 'md:col-span-1',
        gradient: 'from-emerald-500/20 to-teal-500/20'
    },
    {
        icon: Rocket,
        title: 'Growth & Marketing',
        description: 'Data-driven campaigns that amplify your reach and convert your ideal audience.',
        className: 'md:col-span-2',
        gradient: 'from-purple-500/20 to-pink-500/20'
    }
];

export default function Services() {
    return (
        <section className='section relative overflow-hidden bg-white py-32'>
            <div className='container mx-auto px-6 relative z-10'>
                <div className='mb-20 max-w-3xl mx-auto text-center'>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='text-4xl md:text-5xl font-bold mb-6 text-black'
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className='text-xl text-black/60'
                    >
                        Comprehensive digital solutions tailored to elevate your business in the modern landscape.
                    </motion.p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={cn(
                                'group relative p-8 rounded-3xl bg-slate-50/50 border border-black/5 overflow-hidden hover:bg-white/10 transition-colors duration-500',
                                service.className
                            )}
                        >
                            <div className={cn(
                                'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br',
                                service.gradient
                            )} />
                            
                            <div className='relative z-10 h-full flex flex-col'>
                                <div className='flex justify-between items-start mb-8'>
                                    <div className='p-3 rounded-2xl bg-slate-50/50 border border-black/5 text-black'>
                                        <service.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <ArrowUpRight className='text-black/60 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300' />
                                </div>
                                
                                <div className='mt-auto'>
                                    <h3 className='text-2xl font-bold text-black mb-3'>
                                        {service.title}
                                    </h3>
                                    <p className='text-black/60 leading-relaxed'>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
