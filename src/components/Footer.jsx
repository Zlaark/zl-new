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
                        <Link href='/' className='block relative w-32 h-10'>
                            <Image 
                                src='/images/zlaark.jpeg' 
                                alt='Zlaark' 
                                fill 
                                className='object-contain invert mix-blend-screen' 
                            />
                        </Link>
                        <p className='text-muted-foreground leading-relaxed'>
                            {footer.description}
                        </p>
                    </div>
                    
                    <div>
                        <h4 className='font-semibold text-foreground mb-6'>Quick Links</h4>
                        <ul className='space-y-3'>
                            {footer.quickLinks.map((link) => (
                               <li key={link.name}>
                                   <Link href={link.href} className='text-muted-foreground hover:text-foreground transition-colors'>
                                       {link.name}
                                   </Link>
                               </li> 
                            ))}
                        </ul>
                    </div>
                    
                     <div>
                        <h4 className='font-semibold text-foreground mb-6'>Services</h4>
                         <ul className='space-y-3'>
                            {footer.services.map((link) => (
                               <li key={link.name}>
                                   <Link href={link.href} className='text-muted-foreground hover:text-foreground transition-colors'>
                                       {link.name}
                                   </Link>
                               </li> 
                            ))}
                        </ul>
                    </div>

                     <div>
                        <h4 className='font-semibold text-foreground mb-6'>Legal</h4>
                         <ul className='space-y-3'>
                            {footer.legal.map((link) => (
                               <li key={link.name}>
                                   <Link href={link.href} className='text-muted-foreground hover:text-foreground transition-colors'>
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
