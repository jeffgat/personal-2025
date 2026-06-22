'use client';
import React from 'react';
import { FaDribbble, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'motion/react';

const socials = [
    {
        href: 'https://github.com/jeffgat',
        label: 'GitHub',
        Icon: FaGithub,
        color: 'text-flame hover:text-flame-dark',
    },
    {
        href: 'https://www.linkedin.com/in/jeff-gatbonton/',
        label: 'LinkedIn',
        Icon: FaLinkedin,
        color: 'text-sage-dark hover:text-sage-darker',
    },
    {
        href: 'https://dribbble.com/jeffgat',
        label: 'Dribbble',
        Icon: FaDribbble,
        color: 'text-sand-dark hover:text-sand-darker',
    },
];

function SocialsVert() {
    return (
        <motion.div
            className="absolute left-4 md:left-6 top-6 flex flex-col gap-4"
            transition={{ duration: 0.8, delay: 0.6 }}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}>
            {socials.map(({ href, label, Icon, color }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className={`group inline-flex w-fit items-center gap-2 transition-colors ${color}`}>
                    <Icon className="text-4xl" />
                    <span className="-translate-x-2 text-sm font-semibold opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        {label}
                    </span>
                </a>
            ))}
        </motion.div>
    );
}

export default SocialsVert;
