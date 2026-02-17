'use client';
import { motion } from 'framer-motion';
import { Check, Rocket, Flame, ArrowRight } from 'lucide-react';
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
        <section className="py-16 bg-white relative overflow-hidden text-slate-900 font-sans">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-400 font-bold tracking-[0.3em] text-[10px] uppercase mb-3 block"
                    >
                        &gt; PRICING &lt;
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight"
                    >
                        Plan that fits
                    </motion.h2>
                </div>

                <div className="max-w-4xl mx-auto bg-[#f3f4f6] rounded-2xl p-3 md:p-6 border border-slate-200/50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {pricingPlans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative rounded-xl overflow-hidden flex flex-col h-full shadow-sm
                                    ${plan.highlight
                                        ? 'bg-[#f46f17] text-white'
                                        : 'bg-white text-slate-900 border border-slate-100/50'
                                    }`}
                            >
                                {/* Card Header - Consistent light area for both cards */}
                                <div className={`p-6 md:p-8 m-2 rounded-lg ${plan.highlight ? 'bg-white' : 'bg-[#f3f4f6]/60'}`}>
                                    <div className="flex justify-between items-start mb-4">
                                        <span className={`text-[9px] font-bold tracking-[0.2em] uppercase text-slate-400`}>
                                            {plan.name}
                                        </span>
                                        {plan.badge && (
                                            <span className="bg-[#ff4d12] text-white text-[9px] font-black px-2.5 py-0.5 rounded-full tracking-tighter">
                                                {plan.badge}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-baseline gap-1 mb-3">
                                        <span className={`text-3xl md:text-4xl font-bold tracking-tighter text-slate-900`}>
                                            ${plan.price}
                                        </span>
                                        <span className={`text-xs font-semibold text-slate-400`}>/ project</span>
                                    </div>
                                    <p className={`text-xs md:text-sm leading-relaxed font-semibold text-slate-500`}>
                                        {plan.description}
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className={`h-px w-full ${plan.highlight ? 'border-t border-dashed border-white/20' : 'border-t border-dashed border-slate-100'}`} />

                                {/* Card Body */}
                                <div className="p-6 md:p-8 flex-grow relative flex flex-col">
                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3">
                                                <div className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-white' : 'bg-slate-100'}`}>
                                                    <Check className={`w-2.5 h-2.5 ${plan.highlight ? 'text-[#f46f17]' : 'text-slate-400'}`} />
                                                </div>
                                                <span className={`text-xs md:text-[13px] font-semibold tracking-tight ${plan.highlight ? 'text-white' : 'text-slate-700'}`}>
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-auto">
                                        <Link href={plan.buttonLink} className="block transition-transform active:scale-[0.98]">
                                            <div className={`w-full py-2.5 rounded-lg text-sm font-bold text-center transition-all duration-300
                                                ${plan.highlight
                                                    ? 'bg-slate-900 text-white hover:bg-black shadow-lg shadow-black/10'
                                                    : 'bg-[#f46f17] text-white hover:bg-[#e05d0e] shadow-md shadow-orange-100'
                                                }`}>
                                                {plan.buttonText}
                                            </div>
                                        </Link>
                                    </div>

                                    {/* Illustration Overlay */}
                                    <div className={`absolute bottom-3 right-3 opacity-[0.06] pointer-events-none`}>
                                        <plan.icon className="w-16 h-16 md:w-20 md:h-20" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center max-w-xl mx-auto px-4">
                    <p className="text-slate-400 font-semibold text-xs md:text-sm leading-relaxed">
                        For agencies and enterprises needing<br />
                        custom strategy and execution.<br />
                        <Link href="/contact" className="text-[#f46f17] hover:text-[#e05d0e] inline-flex items-center gap-1 font-bold mt-2 group transition-colors">
                            Contact us
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                    </p>
                </div>
            </div>

            {/* Premium Gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-50/50 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-slate-50 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}
