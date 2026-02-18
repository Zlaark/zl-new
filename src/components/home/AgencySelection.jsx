'use client';

import { motion } from 'framer-motion';

export default function AgencySelection() {
    return (
        <section className="py-20 md:py-28 bg-[#F5F4F3]">
            <div className="container mx-auto px-6 md:px-10">
                <div className="max-w-[780px] mx-auto text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-[1.45rem] md:text-[1.75rem] lg:text-[2.05rem] font-semibold text-[#1a1a1a] leading-[1.35] tracking-[-0.01em]">
                            We know choosing the right agency{' '}
                            <br className="hidden md:block"/>
                            is hard because few{' '}
                            <span className="text-[#ea580c]">truly deliver</span>.
                        </h2>
                        
                        <div className="h-6 md:h-10"></div>
                        
                        <div className="text-[1.45rem] md:text-[1.75rem] lg:text-[2.05rem] font-semibold text-[#1a1a1a] leading-[1.45] tracking-[-0.01em]">
                            <span>So we made it{' '} simple{' '}</span>
                            <span className="text-[#ea580c]">to compare</span>
                            <span>{' '}how</span>
                            <br className="hidden md:block"/>
                            <span>we work{' '}</span>
                            
                            {/* Custom Toggle Switch - Orange */}
                            <span className="inline-flex items-center align-middle mx-0.5 relative top-[2px]">
                                <span className="w-11 h-[26px] md:w-[50px] md:h-[28px] bg-[#ea580c] rounded-full p-[3px] flex items-center justify-end relative">
                                    <motion.span 
                                        className="w-5 h-5 md:w-[22px] md:h-[22px] bg-white rounded-full shadow-md block"
                                        layoutId="toggle-handle"
                                    />
                                </span>
                            </span>

                            <span>{' '}versus what you usually</span>
                            <br className="hidden md:block"/>
                            <span>get{' '}</span>
                            <span className="text-[#ea580c]">in the market.</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
