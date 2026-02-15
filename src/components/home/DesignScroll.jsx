'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// Array of solid colors
const colors = [
    'bg-red-400', 'bg-orange-400', 'bg-amber-400', 'bg-yellow-400',
    'bg-lime-400', 'bg-green-400', 'bg-emerald-400', 'bg-teal-400',
    'bg-cyan-400', 'bg-sky-400', 'bg-blue-400', 'bg-indigo-400',
    'bg-violet-400', 'bg-purple-400', 'bg-fuchsia-400', 'bg-pink-400'
];

// Duplicate for seamless loop
const row1Colors = [...colors, ...colors];
const row2Colors = [...colors].reverse().concat([...colors].reverse());

const Card = ({ color }) => (
    <div className={cn(
        "flex-shrink-0 w-[280px] h-[200px] md:w-[320px] md:h-[220px] rounded-2xl shadow-sm",
        color
    )} />
);

export default function DesignScroll() {
    return (
        <section className="relative py-24 bg-gray-50 overflow-hidden">
            
            {/* Center Overlay */}
            <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                <div className="relative pointer-events-auto">
                    {/* Blur Backdrop */}
                    <div className="absolute inset-0 bg-white/40 blur-3xl scale-150 rounded-full" />
                    
                    {/* Circle Content */}
                    <div className="relative bg-white/90 backdrop-blur-xl border border-white/40 shadow-2xl rounded-full p-12 md:p-16 text-center flex flex-col items-center justify-center gap-4 w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
                        
                        {/* Custom Z Logo */}
                        <div className="relative w-16 h-16 bg-orange-500 rounded-md shadow-lg transform -rotate-6 mb-4 flex items-center justify-center border border-orange-400">
                             <span className="text-white text-4xl font-extrabold font-sans">Z</span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            100+ Premium<br/>Designs
                        </h3>
                        <Link href="/work" className="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-full transition-colors shadow-lg shadow-orange-500/20">
                            Explore all Projects
                        </Link>
                    </div>
                </div>
            </div>

            {/* Fading Edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-20 pointer-events-none" />

            <div className="flex flex-col gap-12 opacity-80">
                {/* Row 1 - Moves Left */}
                <div className="flex gap-8 min-w-max">
                    <motion.div 
                        className="flex gap-8"
                        animate={{ x: "-50%" }}
                        transition={{ 
                            duration: 30, 
                            ease: "linear", 
                            repeat: Infinity 
                        }}
                    >
                        {row1Colors.map((color, i) => (
                            <Card key={`r1-${i}`} color={color} />
                        ))}
                    </motion.div>
                </div>

                {/* Row 2 - Moves Right */}
                <div className="flex gap-8 min-w-max">
                     <motion.div 
                        className="flex gap-8"
                        initial={{ x: "-50%" }}
                        animate={{ x: "0%" }}
                        transition={{ 
                            duration: 30, 
                            ease: "linear", 
                            repeat: Infinity 
                        }}
                    >
                        {row2Colors.map((color, i) => (
                            <Card key={`r2-${i}`} color={color} />
                        ))}
                    </motion.div>
                </div>
            </div>

        </section>
    );
}
