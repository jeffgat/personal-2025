'use client';

import { Box } from '@chakra-ui/react';
import { FaDribbble, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdCopyright } from 'react-icons/md';

const Footer = () => {
    // const iconSize = 10;
    return (
        <Box
            zIndex={-1}
            bgGradient="linear-gradient(-4deg, #EDF2F7 70%, #fafafa calc(70% + 2px))"
            h="300px"
            w="100%">
            <div className='flex flex-col h-full justify-end pb-12'>
                <div className="flex items-center justify-center">
                    <MdCopyright className="text-gray-500 mr-2" />
                    <p className="font-sembiold text-gray-500">
                        Jeffrey Gatbonton - 2024
                    </p>
                </div>
                <div className="flex items-center justify-center mt-4 gap-4">
                    <a
                        href="https://github.com/jeffgat"
                        target="_blank"
                        className="text-gray-400 text-4xl hover:scale-105 hover:text-gray-500 transition-all">
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jeff-gatbonton/"
                        target="_blank"
                        className="text-gray-400 text-4xl hover:scale-105 hover:text-gray-500 transition-all">
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://dribbble.com/jeffgat"
                        target="_blank"
                        className="text-gray-400 text-4xl hover:scale-105 hover:text-gray-500 transition-all">
                        <FaDribbble />
                    </a>
                </div>
            </div>
        </Box>
    );
};

export default Footer;
