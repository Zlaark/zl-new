'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check, Star, Zap, BarChart, Settings, Users, Smile, Download, Monitor, Briefcase, User } from 'lucide-react';

const Card = ({ children, className = "", noPadding = false }) => (
    <div className={`bg-white rounded-3xl overflow-hidden ${noPadding ? '' : 'p-8'} ${className}`}>
        {children}
    </div>
);

export default function ImpactGrid() {
    return (
        <section className="py-24 bg-gray-50 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">

                    {/* Row 1 */}
                    {/* CSAT Card (1 cols) */}
                    <Card className="flex flex-col justify-between items-center text-center shadow-sm border border-gray-100">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">CSAT</h3>
                            <p className="text-gray-500 font-medium leading-tight">Measures and improves<br />client satisfaction.</p>
                        </div>
                        <div className="mt-8 w-full flex flex-col items-center">
                            <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-4">EXCELLENT</p>
                            <div className="flex justify-center gap-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-200">
                                        <Smile className="w-6 h-6" />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/30 transform scale-110">
                                    <Smile className="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Growth Card (2 cols) */}
                    <Card className="md:col-span-2 relative overflow-hidden group shadow-sm border border-gray-100 flex flex-col md:flex-row" noPadding>
                        {/* Header Overlay */}
                        <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
                            <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2 font-bold text-gray-900 pointer-events-auto">
                                <div className="w-6 h-6 bg-orange-500 rounded-md flex items-center justify-center text-white text-xs">Z</div>
                                Zlaark
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-100 shadow-sm pointer-events-auto cursor-pointer hover:bg-gray-50 transition-colors">
                                    <span className="text-xs font-bold text-gray-900">Get started</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row w-full h-full">
                            {/* Image Part */}
                            <div className="h-64 md:h-full w-full md:w-1/2 relative bg-gray-900 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-80 mix-blend-multiply" />
                                <img
                                    src="https://images.unsplash.com/photo-1614728853913-1e22baeb87f1?q=80&w=1000&auto=format&fit=crop"
                                    alt="Space"
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                            </div>

                            {/* Text Part */}
                            <div className="p-8 md:p-12 flex flex-col justify-end md:justify-center md:w-1/2 bg-white h-full relative">
                                <div className="mt-8 md:mt-16">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Built for Long-Term Growth</h3>
                                    <p className="text-gray-500 leading-relaxed font-medium">Your brand remains consistent and powerful as you expand.</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Row 2 */}
                    {/* CTA Card (2 cols) - Orange */}
                    <Card className="md:col-span-2 bg-orange-400 relative overflow-hidden flex flex-col md:flex-row shadow-xl shadow-orange-500/20" noPadding>
                        <div className="p-10 flex flex-col justify-center relative z-10 w-full md:w-2/3">
                            <h3 className="text-3xl font-bold text-gray-900 mb-8">Discuss your project</h3>
                            <Link href="/contact" className="inline-block text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-xl w-full md:w-auto transition-all shadow-lg hover:shadow-orange-700/30 mb-4 border border-orange-500/50">
                                Schedule a call - 15 mins free
                            </Link>
                            <p className="text-gray-900/70 text-sm font-medium">No pressure, just a thoughtful chat.</p>
                        </div>

                        <div className="relative w-full md:w-1/3 min-h-[200px] md:min-h-full overflow-hidden flex items-end justify-center pb-0 md:pr-4">
                            {/* Decorative Cards Fan */}
                            <div className="absolute bottom-0 right-0 md:right-8 transform translate-y-1/4">
                                <div className="relative w-48 h-48">
                                    <div className="absolute inset-0 bg-white rounded-xl shadow-lg border-4 border-white transform -rotate-12 translate-x-[-40px] overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute inset-0 bg-white rounded-xl shadow-lg border-4 border-white transform -rotate-6 translate-x-[-20px] overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=60" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute inset-0 bg-white rounded-xl shadow-lg border-4 border-white transform rotate-0 overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* SEO Card (1 col) */}
                    <Card className="flex flex-col justify-between shadow-sm border border-gray-100">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">SEO ready & fast performance</h3>
                            <p className="text-gray-500 text-sm font-medium">Optimized for search rankings and blazing-fast speed.</p>
                        </div>
                        <div className="flex items-end justify-between mt-8 gap-2">
                            {/* Gauge 1 */}
                            <div className="text-center flex-1">
                                <div className="w-14 h-14 rounded-full border-[3px] border-orange-500 flex items-center justify-center text-gray-900 font-bold mb-2 ml-auto mr-auto">99%</div>
                                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Performance</span>
                            </div>
                            {/* Gauge 2 - Big */}
                            <div className="text-center flex-1">
                                <div className="w-20 h-20 rounded-full border-4 border-orange-500 flex items-center justify-center text-2xl text-gray-900 font-bold mb-2 shadow-lg shadow-orange-500/20 ml-auto mr-auto bg-white relative z-10">100%</div>
                                <span className="text-[10px] font-bold text-gray-900 uppercase tracking-wider">SEO</span>
                            </div>
                            {/* Gauge 3 */}
                            <div className="text-center flex-1">
                                <div className="w-14 h-14 rounded-full border-[3px] border-orange-500 flex items-center justify-center text-gray-900 font-bold mb-2 ml-auto mr-auto">98%</div>
                                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Access</span>
                            </div>
                        </div>
                    </Card>

                    {/* Row 3 */}
                    {/* Showcase Card (1 col) */}
                    <Card className="flex flex-col bg-white relative overflow-hidden group shadow-sm border border-gray-100" noPadding>
                        <div className="p-8 pb-0 z-10">
                            <h3 className="text-lg font-bold text-gray-900 mb-1">Agency website rebuild</h3>
                            <p className="text-gray-500 text-sm mb-4 font-medium">120% more inquiries</p>
                        </div>
                        <div className="mt-4 flex-grow relative bg-gray-50 mx-6 mb-6 rounded-xl border border-gray-100 shadow-inner overflow-hidden flex items-center justify-center">
                            {/* Abstract Visualization */}
                            <div className="relative w-3/4 h-3/4 bg-white rounded-lg shadow-sm border border-gray-100 p-3">
                                <div className="flex gap-1.5 mb-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                                </div>
                                <div className="space-y-2">
                                    <div className="h-1.5 bg-gray-100 rounded w-2/3" />
                                    <div className="h-10 bg-orange-50 rounded-lg w-full mt-3 flex items-center justify-center">
                                        <Monitor className="w-4 h-4 text-orange-200" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mt-2">
                                        <div className="h-8 bg-gray-50 rounded-md" />
                                        <div className="h-8 bg-gray-50 rounded-md" />
                                    </div>
                                </div>
                            </div>

                            {/* Connecting Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0,50 Q50,0 100,50" stroke="orange" strokeWidth="1" fill="none" />
                                <circle cx="20" cy="50" r="2" fill="orange" />
                                <circle cx="80" cy="50" r="2" fill="orange" />
                            </svg>
                        </div>
                    </Card>

                    {/* Industries Card (1 col) */}
                    <Card className="flex flex-col justify-center items-center text-center shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-8">Industries we work with</h3>
                        <div className="space-y-1 w-full flex flex-col items-center">
                            {['Education & Learning', 'Hospitality & Events', 'Lifestyle & Luxury'].map((industry, i) => (
                                <div key={i} className="group relative py-3 px-4 rounded-lg hover:bg-orange-50 transition-colors cursor-default w-full">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                    </div>
                                    <span className="text-[11px] font-bold text-gray-400 group-hover:text-orange-500 transition-colors uppercase tracking-widest">{industry}</span>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Profile Card (1 col) */}
                    <Card className="relative overflow-hidden group min-h-[300px] shadow-sm border border-gray-100" noPadding>
                        <div className="absolute inset-0 bg-orange-500" />
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                            alt="Dennis Barrett"
                            className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                        <div className="relative z-10 h-full flex flex-col justify-end p-8">
                            <h3 className="text-white text-2xl font-bold">Dennis Barrett</h3>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="h-[1px] w-6 bg-orange-500" />
                                <p className="text-orange-400 text-xs font-bold tracking-widest uppercase">CEO - ZLAARK</p>
                            </div>
                        </div>
                    </Card>

                </div>
            </div>
        </section>
    );
}
