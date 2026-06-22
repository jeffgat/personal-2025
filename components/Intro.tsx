'use client';
import { cn } from '@/utils';
import { motion } from 'motion/react';
import React from 'react';

function Intro() {
    // styles
    const headingSz = 'text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold';

    return (
        <div className="mx-auto w-full max-w-[120ch] px-4">
            <section className="flex flex-col justify-center h-screen">
                <div className="flex items-end mb-4 lg:mb-6">
                    <h1 className={cn('flex space-x-3', headingSz)}>
                        <span className='text-ink'>{`Hey, I'm`}</span>
                        <motion.span
                            transition={{ duration: 0.8, delay: 0.2 }}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={cn('text-flame block', headingSz)}>
                            Jeff Gatbonton.
                        </motion.span>
                    </h1>
                </div>
                <div className="lg:flex items-end">
                    <h1 className={cn('flex space-x-3 mr-3 mb-4 lg:mb-0', headingSz)}>
                        <span className='text-ink'>{`I'm a`}</span>
                        <motion.span
                            transition={{ duration: 0.8, delay: 0.6 }}
                            initial={{ opacity: 0, x: -8, y: -8 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            className={cn('text-sage-dark block', headingSz)}>
                            Full Stack Engineer
                        </motion.span>
                    </h1>
                    <h1 className={cn('flex space-x-3', headingSz)}>
                        <span className='text-ink'>{`and former`}</span>
                        <motion.span
                            transition={{ duration: 0.8, delay: 0.6 }}
                            initial={{ opacity: 0, x: 8, y: 8 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            className={cn('text-sand-dark block', headingSz)}>
                            Designer.
                        </motion.span>
                    </h1>
                </div>
            </section>
        </div>
    );
}

export default Intro;
