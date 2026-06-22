'use client';

import { FaDribbble, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdCopyright } from 'react-icons/md';
import SlantDivider from '@/components/SlantDivider';

const Footer = () => {
    // const iconSize = 10;
    return (
        <div className="relative -z-10 h-[300px] w-full bg-sage-soft">
            <SlantDivider
                className="absolute inset-0 h-full w-full"
                topColor="#F7F4EF"
                bottomColor="#DEE2D8"
                leftY={0.22}
                rightY={0.38}
                stitchColor="#DEE2D8"
                stitchOffset={-16}
            />
            <div className='relative flex flex-col h-full justify-end pb-12'>
                <div className="flex items-center justify-center">
                    <MdCopyright className="text-ink-muted mr-2" />
                    <p className="font-semibold text-ink-muted">
                        Jeffrey Gatbonton - 2026
                    </p>
                </div>
                <div className="flex items-center justify-center mt-4 gap-4">
                    <a
                        href="https://github.com/jeffgat"
                        target="_blank"
                        className="text-ink/50 text-4xl hover:scale-105 hover:text-flame transition-all">
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jeff-gatbonton/"
                        target="_blank"
                        className="text-ink/50 text-4xl hover:scale-105 hover:text-sage-dark transition-all">
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://dribbble.com/jeffgat"
                        target="_blank"
                        className="text-ink/50 text-4xl hover:scale-105 hover:text-sand-dark transition-all">
                        <FaDribbble />
                    </a>
                </div>
                <a
                    href="mailto:jeff.gtbn@gmail.com"
                    className="mt-4 text-center text-sm font-semibold text-ink-muted hover:text-flame transition-colors">
                    jeff.gtbn@gmail.com
                </a>
            </div>
        </div>
    );
};

export default Footer;
