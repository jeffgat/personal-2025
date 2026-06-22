'use client';
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
            <div className="mx-auto w-full max-w-[120ch] px-4">
                <h2 className="text-4xl font-bold uppercase text-gray-600 text-center mb-0">
                    Summary
                </h2>
                <div className="flex items-center justify-center mt-8 flex-col lg:flex-row relative z-10">
                    <div className="h-full w-full md:w-[540px] rounded-md relative aspect-square">
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
                            I started in graphic design before gradually moving into
                            software engineering through early-stage startup work.
                        </p>
                        <p className="mb-4">
                            Over the last 8 years I’ve worked across consumer products,
                            realtime systems, mobile apps, ecommerce platforms, and
                            blockchain applications with a strong focus on product
                            quality, UX, and rapid iteration.
                        </p>
                        <p className="mb-4">
                            Most of my work has been in small startup teams, including
                            Techstars and a16z-backed companies, where I’ve contributed
                            across frontend, backend, infrastructure, and product
                            development.
                        </p>
                        <p className="font-semibold text-sm">{`Technologies that I've worked with in production apps:`}</p>
                        <div className="grid grid-cols-3 md:grid-cols-5 mt-6 gap-4">
                            {techStackData.map((t) => (
                                <IconBlock key={t.text} text={t.text} img={t.img} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="absolute bottom-[-160px] left-0 h-[300px] w-full"
                style={{
                    backgroundImage:
                        'linear-gradient(176deg, #f3f4f6 70%, #fafafa calc(70% + 2px))',
                }}
            />
        </section>
    );
}

export default Summary;
