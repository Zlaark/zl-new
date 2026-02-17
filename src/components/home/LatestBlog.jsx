'use client';
import { motion } from 'framer-motion';
import { blogs } from '@/data/content';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const BlogCard = ({ item, isFeatured }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-slate-200/90 rounded-3xl p-5 h-full group"
    >
        <div className={cn(
            "bg-white rounded-2xl h-full flex flex-col md:flex-row justify-between shadow-sm border border-slate-100/50 overflow-hidden relative",
            !isFeatured && "items-end"
        )}>
            <div className={cn(
                "flex flex-col justify-between",
                isFeatured ? "w-full md:w-1/2 p-8 md:p-12" : "w-full md:w-2/3 p-6 md:p-8"
            )}>
                <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-4 block">
                        {item.tag}
                    </span>
                    <h3 className={cn(
                        "text-slate-900 font-bold leading-tight mb-4 tracking-tight group-hover:text-[#f46f17] transition-colors",
                        isFeatured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
                    )}>
                        {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                        {item.date}
                    </p>
                </div>

                {isFeatured && item.author && (
                    <div className="mt-8 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400 border border-slate-200 overflow-hidden">
                             {item.author.charAt(0)}
                        </div>
                        <span className="text-xs font-semibold text-slate-700">{item.author}</span>
                    </div>
                )}
            </div>

            <div className={cn(
                "relative bg-slate-50",
                isFeatured ? "w-full md:w-1/2 min-h-[300px]" : "w-24 h-24 md:w-32 md:h-20 mb-6 mr-6 rounded-xl overflow-hidden shrink-0"
            )}>
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
        </div>
    </motion.div>
);

export default function LatestBlog() {
    const featuredPost = blogs.items.find(item => item.featured);
    const otherPosts = blogs.items.filter(item => !item.featured);

    return (
        <section className="py-24 bg-white relative overflow-hidden font-sans">
            <div className="container mx-auto px-4 relative z-10 w-full">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight"
                    >
                        {blogs.title}
                    </motion.h2>
                </div>

                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Featured Post */}
                    <div className="lg:col-span-2">
                        {featuredPost && <BlogCard item={featuredPost} isFeatured={true} />}
                    </div>

                    {/* Other Posts */}
                    <div className="flex flex-col gap-8">
                        {otherPosts.map((post) => (
                            <div key={post.id} className="h-full">
                                <BlogCard item={post} isFeatured={false} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
