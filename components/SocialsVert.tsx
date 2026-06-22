'use client';
import React from 'react';
import { FaDribbble, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'motion/react';

function SocialsVert() {
    // styles

    return (
        <motion.div
            className="absolute left-4 md:left-6 top-6 flex flex-col gap-4"
            transition={{ duration: 0.8, delay: 0.6 }}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}>
            <a
                href="https://github.com/jeffgat"
                target="_blank"
                className="text-flame text-4xl hover:scale-105 hover:text-flame-dark transition-all">
                <FaGithub />
            </a>
            <a
                href="https://www.linkedin.com/in/jeff-gatbonton/"
                target="_blank"
                className="text-sage-dark text-4xl hover:scale-105 hover:text-ink transition-all">
                <FaLinkedin />
            </a>
            <a
                href="https://dribbble.com/jeffgat"
                target="_blank"
                className="text-sand-dark text-4xl hover:scale-105 hover:text-ink transition-all">
                <FaDribbble />
            </a>
        </motion.div>
    );
}

export default SocialsVert;
