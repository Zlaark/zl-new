'use client';
import { motion } from 'framer-motion';
import { Check, Rocket, Flame } from 'lucide-react';
import Link from 'next/link';

const pricingPlans = [
    {
        name: 'STARTER',
        price: '999',
        description: 'Perfect for startups and small teams launching their first project.',
        features: [
            '1 Landing Page Design',
            'Basic Brand Guidelines',
            'Mobile Responsive Layout',
            '2 Revisions',
            'Delivery in 7 days'
        ],
        buttonText: 'Get started now',
        buttonLink: '/contact',
        icon: Rocket,
        highlight: false
    },
    {
        name: 'GROWTH',
        price: '2499',
        description: 'Best for growing brands looking to scale their digital presence.',
        features: [
            'Multi-page Website Design',
            'Brand Strategy Session',
            'Web Animations & Interactions',
            '4 Revisions',
            'Delivery in 14 days'
        ],
        buttonText: 'Start your project',
        buttonLink: '/contact',
        icon: Flame,
        highlight: true,
        badge: 'POPULAR'
    }
];

export default function Pricing() {
    return (
        <section className="py-24 bg-white relative overflow-hidden text-slate-900 font-sans">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-orange-600 font-bold tracking-[0.2em] text-sm uppercase mb-4 block"
                    >
                        &gt; PRICING &lt;
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight"
                    >
                        Plan that fits
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative rounded-[3rem] p-8 md:p-14 border transition-all duration-500 hover:shadow-2xl group overflow-hidden
                                ${plan.highlight 
                                    ? 'bg-[#f97316] border-[#f97316] text-white' 
                                    : 'bg-[#f8f9fa] border-slate-100 text-slate-900'
                                }`}
                        >
                            {plan.badge && (
                                <div className="absolute top-10 right-10 bg-white text-[#f97316] text-[10px] font-black px-4 py-2 rounded-full tracking-tighter shadow-xl z-20">
                                    {plan.badge}
                                </div>
                            )}

                            <div className="relative z-10">
                                <span className={`text-[12px] font-black tracking-[0.3em] uppercase mb-6 block ${plan.highlight ? 'text-white/80' : 'text-slate-400'}`}>
                                    {plan.name}
                                </span>
                                <div className="flex items-baseline gap-2 mb-8">
                                    <span className="text-7xl md:text-8xl font-black tracking-tighter">${plan.price}</span>
                                    <span className={`text-xl font-bold ${plan.highlight ? 'text-white/70' : 'text-slate-400'}`}>/ project</span>
                                </div>
                                <p className={`text-xl md:text-2xl leading-relaxed font-bold mb-10 ${plan.highlight ? 'text-white/90' : 'text-slate-500'}`}>
                                    {plan.description}
                                </p>

                                <div className="relative mb-10 h-px">
                                    <div className={`absolute inset-0 border-t-2 border-dashed ${plan.highlight ? 'border-white/20' : 'border-slate-200'}`} />
                                </div>

                                <ul className="space-y-6 mb-14">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-5">
                                            <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-white/20' : 'bg-slate-900'}`}>
                                                <Check className={`w-3.5 h-3.5 ${plan.highlight ? 'text-white' : 'text-white'}`} />
                                            </div>
                                            <span className={`text-lg md:text-xl font-black tracking-tight ${plan.highlight ? 'text-white' : 'text-slate-800'}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href={plan.buttonLink} className="block group/btn">
                                    <div className={`w-full py-6 rounded-3xl text-xl font-black text-center transition-all duration-500 transform group-hover/btn:-translate-y-2 group-active/btn:scale-[0.98]
                                        ${plan.highlight 
                                            ? 'bg-slate-900 text-white hover:bg-black shadow-2xl' 
                                            : 'bg-[#f46f17] text-white hover:bg-[#e05d0e] shadow-2xl shadow-orange-300/50'
                                        }`}>
                                        {plan.buttonText}
                                    </div>
                                </Link>
                            </div>

                            {/* Background Illustrations */}
                            <div className={`absolute bottom-[-10%] right-[-5%] opacity-[0.05] transition-transform duration-1000 group-hover:scale-125 group-hover:-rotate-12 pointer-events-none z-0`}>
                                <plan.icon className="w-80 h-80 md:w-[400px] md:h-[400px]" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-28 text-center max-w-2xl mx-auto px-4">
                    <p className="text-slate-400 font-extrabold text-xl md:text-2xl leading-tight">
                        For agencies and enterprises needing custom strategy and execution.
                    </p>
                    <Link href="/services" className="text-[#f46f17] font-black mt-6 inline-flex items-center gap-2 text-xl hover:text-[#e05d0e] transition-all transform hover:translate-x-2 group">
                        Contact us 
                        <span className="text-2xl transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                </div>
            </div>

            {/* Premium Gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-50/50 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-slate-50 blur-[150px] rounded-full pointer-events-none" />
        </section>
    );
}
