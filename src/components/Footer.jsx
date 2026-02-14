'use client';
import { footer } from '@/data/content';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='border-t border-white/10 bg-black pt-20 pb-10'>
            <div className='container mx-auto px-6'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-16'>
                    <div className='space-y-6'>
                        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
                            <div className="relative w-8 h-8">
                                <Image
                                    src='/logo.jpg'
                                    alt='Zlaark'
                                    fill
                                    className='object-contain'
                                />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Zlaark</span>
                        </Link>
                        <p className='text-muted-foreground leading-relaxed'>
                            {footer.description}
                        </p>
                    </div>

                    <div>
                        <h4 className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-6'>Quick Links</h4>
                        <ul className='space-y-3'>
                            {footer.quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className='text-muted-foreground hover:text-orange-500 transition-colors'>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-6'>Services</h4>
                        <ul className='space-y-3'>
                            {footer.services.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className='text-muted-foreground hover:text-orange-500 transition-colors'>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-6'>Legal</h4>
                        <ul className='space-y-3'>
                            {footer.legal.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className='text-muted-foreground hover:text-orange-500 transition-colors'>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4'>
                    <p className='text-slate-500 text-sm'>&copy; {footer.copyright}</p>
                </div>
            </div>
        </footer>
    );
}
