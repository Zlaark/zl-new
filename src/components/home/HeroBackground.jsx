"use client";
import { motion } from 'framer-motion';

export default function HeroBackground() {
    return (
        <div className='absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#F5F4F3]'>
            {/* Concentric Circles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05]">
                <div className="absolute w-[400px] h-[400px] border border-black rounded-full" />
                <div className="absolute w-[800px] h-[800px] border border-black rounded-full" />
                <div className="absolute w-[1200px] h-[1200px] border border-black rounded-full" />
                <div className="absolute w-[1600px] h-[1600px] border border-black rounded-full" />
            </div>

            <div className='absolute inset-0 z-1 opacity-[0.4]'>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F4F3]/60 to-[#F5F4F3] pointer-events-none z-10' />
        </div>
    );
}
