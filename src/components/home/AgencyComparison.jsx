'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, ChevronRight, Check } from 'lucide-react';

const otherAgencies = [
    "Slow, unclear timelines",
    "Extra charges for changes",
    "No clear process",
    "Designs break in dev",
    "Complex, hard builds"
];

const zlaarkBenefits = [
    "Clear weekly updates",
    "Transparent pricing",
    "Documented workflow",
    "Design-dev alignment",
    "Clean, scalable builds"
];

export default function AgencyComparison() {
    return (
        <section className="pb-24 bg-[#F5F4F3] px-6">
            <div className="container mx-auto max-w-4xl">
                
                {/* Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-stretch">
                    
                    {/* Left Card - Other Agencies */}
                    {/* Kept bg-white, added shadow-sm for subtle lift against gray bg */}
                    <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
                            Other agencies
                        </h3>
                        <ul className="space-y-4">
                            {otherAgencies.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-500 font-medium text-lg">
                                    <div className="mt-1.5"><ChevronRight className="w-5 h-5 text-gray-300" /></div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Card - Zlaark (Orange) */}
                    <div className="p-8 rounded-2xl bg-[#FEA75D] shadow-xl shadow-[#FEA75D]/20 transform md:scale-105 relative z-10 text-gray-900 border-2 border-[#FEA75D]">
                        <h3 className="text-xl font-bold mb-6 border-b border-gray-900/10 pb-4">
                            Zlaark agency
                        </h3>
                        <ul className="space-y-4">
                            {zlaarkBenefits.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 font-semibold text-lg">
                                    <div className="mt-1.5"><ChevronRight className="w-5 h-5 text-gray-900/60" /></div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer / Social Proof */}
                <div className="flex flex-col md:flex-row items-center gap-8 pt-8 border-t border-gray-200">
                    
                    {/* CTA Button */}
                    <div className="flex-shrink-0">
                         <Link 
                            href="/about" 
                            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-[#FEA75D]/20"
                        >
                            Read our story
                        </Link>
                    </div>

                    {/* Social Proof */}
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-3">
                             <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-200" />
                             <div className="w-10 h-10 rounded-full border-2 border-white bg-green-200" />
                             <div className="w-10 h-10 rounded-full border-2 border-white bg-purple-200" />
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
                                +54
                            </div>
                        </div>
                        
                        <div className="flex flex-col">
                            <div className="flex items-center gap-0.5">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                                <span className="font-bold text-gray-900">4.9/5</span>
                                <span className="text-sm text-gray-500 text-nowrap">Trusted by <span className="text-orange-500 font-medium">54+ visionary brands</span></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
