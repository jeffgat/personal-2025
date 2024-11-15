'use client';
import { Box, Container } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const techStackData = [
    { img: '/images/javascript.png', text: 'Javascript' },
    { img: '/images/typescript.png', text: 'Typescript' },
    { img: '/images/react.png', text: 'React' },
    { img: '/images/node.png', text: 'Node' },
    { img: '/images/golang.png', text: 'Golang' },
    { img: '/images/next.png', text: 'Next' },
    { img: '/images/tailwind.png', text: 'Tailwind' },
    { img: '/images/expo.png', text: 'Expo' },
    { img: '/images/apollo.png', text: 'Apollo' },
    { img: '/images/figma.png', text: 'Figma' },
    { img: '/images/graphql.png', text: 'GraphQL' },
    { img: '/images/postgres.png', text: 'Postgres' },
    { img: '/images/redis.png', text: 'Redis' },
    { img: '/images/docker.png', text: 'Docker' },
    { img: '/images/solidity.png', text: 'Solidity' },
];

const IconBlock = ({ img, text }: { img: string; text: string }) => (
    <div className="flex flex-col items-center">
        <Image src={img} alt={`${text} logo`} width={40} height={40} />
        <p className="text-sm mt-2 truncate">{text}</p>
    </div>
);

function Summary() {
    return (
        <section className="bg-gray-100 py-8 relative">
            <Container maxW="120ch">
                <h2 className="text-4xl font-bold uppercase text-gray-600 text-center mb-0">
                    Summary
                </h2>
                <div className="flex items-center justify-center mt-8 flex-col lg:flex-row relative z-10">
                    <div className="h-full w-full md:w-[450px] rounded-md relative aspect-square">
                        <Image
                            className="rounded-md"
                            src="/images/headshot.jpg"
                            alt="Jeff Gatbonton headshot"
                            fill
                            sizes="450px"
                        />
                    </div>

                    <div className="w-full lg:w-1/2 lg:px-8 mt-6 lg:mt-0">
                        <p className="mb-4">
                            I began as a self-taught graphic designer, creating visuals
                            across a wide spectrum. Working at an early stage startup
                            taught me how to be involved in every part of the process of a
                            project. And how to pick up new skills along the way.
                        </p>
                        <p className="mb-4">
                            Through that, I picked up front-end development and dove deep
                            into web development. At a production level, I have worked on
                            frontend, backend and mobile applications.
                        </p>
                        <p className="font-semibold text-sm">{`Technologies that I've worked with in production apps:`}</p>
                        <div className="grid grid-cols-3 md:grid-cols-5 mt-6 gap-4">
                            {techStackData.map((t) => (
                                <IconBlock key={t.text} text={t.text} img={t.img} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
            <Box
                position="absolute"
                bottom="-160px"
                left="0"
                bgGradient="linear-gradient(176deg, #f3f4f6 70%, #fafafa calc(70% + 2px))"
                h="300px"
                w="100%"
            />
        </section>
    );
}

export default Summary;
