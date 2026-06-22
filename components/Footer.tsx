'use client';

import { FaDribbble, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdCopyright } from 'react-icons/md';

const Footer = () => {
    // const iconSize = 10;
    return (
        <div
            className="-z-10 h-[300px] w-full"
            style={{
                backgroundImage:
                    'linear-gradient(-4deg, #DEE2D8 70%, #F7F4EF calc(70% + 2px))',
            }}>
            <div className='flex flex-col h-full justify-end pb-12'>
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
                        className="text-ink/50 text-4xl hover:scale-105 hover:text-ink transition-all">
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jeff-gatbonton/"
                        target="_blank"
                        className="text-ink/50 text-4xl hover:scale-105 hover:text-ink transition-all">
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://dribbble.com/jeffgat"
                        target="_blank"
                        className="text-ink/50 text-4xl hover:scale-105 hover:text-ink transition-all">
                        <FaDribbble />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
