'use client';

import { motion } from 'framer-motion';

export default function AgencySelection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 leading-[1.4] tracking-tight mb-4">
                            We know choosing the right agency <br className="hidden md:block"/>
                            is hard because few <span className="text-orange-500">truly deliver</span>.
                        </h2>
                        
                        {/* Increased Spacing (1.5x) */}
                        <div className="h-12 md:h-20"></div>
                        
                        <div className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 leading-[1.6] tracking-tight">
                            {/* Line 1 */}
                            <div className="flex flex-wrap items-center gap-x-2">
                                <span>So we made it simple</span>
                                <span className="text-orange-500">to compare</span>
                                <span>how</span>
                            </div>
                            
                            {/* Line 2 */}
                             <div className="flex flex-wrap items-center gap-x-2">
                                <span>we work</span>
                                
                                {/* Custom Toggle Switch */}
                                <div className="inline-flex items-center align-middle mx-1">
                                    <div className="w-10 h-6 md:w-12 md:h-7 bg-orange-500 rounded-full p-0.5 flex items-center justify-end relative transition-colors shadow-inner">
                                        <motion.div 
                                            className="w-4 h-4 md:w-5 md:h-5 bg-white rounded-full shadow-md"
                                            layoutId="toggle-handle"
                                        />
                                    </div>
                                </div>

                                <span>versus what you usually</span>
                            </div>

                            {/* Line 3 */}
                            <div className="flex flex-wrap items-center gap-x-2">
                                <span>get</span>
                                <span className="text-orange-500">in the market.</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
