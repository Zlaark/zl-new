'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TrustedBy() {
    return (
        <section className="py-16 bg-white border-b border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                
                {/* Header with dashed lines */}
                <div className="flex items-center justify-center gap-4 mb-12">
                    <div className="hidden md:block w-16 lg:w-32 border-t border-dashed border-gray-300"></div>
                    <span className="text-gray-400 font-bold tracking-[0.2em] text-xs md:text-sm uppercase text-center whitespace-nowrap">
                        Trusted By Industry Leaders
                    </span>
                    <div className="hidden md:block w-16 lg:w-32 border-t border-dashed border-gray-300"></div>
                </div>
                
                {/* Logos */}
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
                    
                    {/* Gessure (replaces Nexter) */}
                    <div className="flex items-center gap-2 cursor-pointer group hover:scale-105 transition-transform duration-300">
                         <span className="text-2xl md:text-3xl font-extrabold text-gray-500 group-hover:text-gray-800 transition-colors">
                            <span className="text-gray-600 group-hover:text-black">G</span>essure
                         </span>
                    </div>

                    {/* Dhwada (replaces Oslo) */}
                    <div className="flex items-center gap-2 cursor-pointer group hover:scale-105 transition-transform duration-300">
                         <span className="text-2xl md:text-3xl font-bold text-gray-500 group-hover:text-gray-800 transition-colors tracking-wide">
                            dhwada.
                         </span>
                    </div>

                    {/* Fenkmat (replaces Nonme) */}
                    <div className="flex items-center gap-2 cursor-pointer group hover:scale-105 transition-transform duration-300">
                         <span className="text-xl md:text-2xl font-light text-gray-500 group-hover:text-gray-800 transition-colors tracking-[0.05em] uppercase border border-gray-400 px-2 py-0.5 rounded-sm">
                            FENKMAT
                         </span>
                    </div>

                    {/* Skoal (replaces Next.js) */}
                    <div className="flex items-center gap-2 cursor-pointer group hover:scale-105 transition-transform duration-300">
                         <span className="text-2xl md:text-3xl font-black italic text-gray-500 group-hover:text-gray-800 transition-colors tracking-tighter">
                            Skoal
                         </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
