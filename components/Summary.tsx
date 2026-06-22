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
    { img: '/images/prisma.png', text: 'Prisma' },
    { img: '/images/postgres.png', text: 'Postgres' },
    { img: '/images/redis.png', text: 'Redis' },
    { img: '/images/docker.png', text: 'Docker' },
    { img: '/images/solidity.png', text: 'Solidity' },
    { img: '/images/vitest.png', text: 'Vitest' },
    { img: '/images/rtl.png', text: 'RTL' },
    { img: '/images/playwright.png', text: 'Playwright' },
];

const IconBlock = ({ img, text }: { img: string; text: string }) => (
    <div className="inline-flex items-center gap-2 rounded-full border border-sand-dark/30 bg-cream px-3 py-1.5">
        <Image src={img} alt={`${text} logo`} width={18} height={18} />
        <span className="text-xs font-semibold text-ink">{text}</span>
    </div>
);

function Summary() {
    return (
        <section className="bg-sand-soft py-8 relative">
            <div className="mx-auto w-full max-w-[120ch] px-4">
                <h2 className="text-4xl font-bold uppercase text-ink-muted text-center mb-0">
                    Summary
                </h2>
                <div className="mt-8 relative z-10">
                    <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 md:flex-row md:items-center md:gap-8">
                        <div className="relative aspect-square w-full max-w-[220px] flex-none rounded-md">
                            <Image
                                className="rounded-md"
                                src="/images/headshot.jpg"
                                alt="Jeff Gatbonton headshot"
                                fill
                                sizes="220px"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="mb-4">
                                I started in graphic design before gradually moving into
                                software engineering through early-stage startup work.
                            </p>
                            <p className="mb-4">
                                Over the last 8 years I’ve worked across consumer
                                products, realtime systems, mobile apps, ecommerce
                                platforms, and blockchain applications with a strong
                                focus on product quality, UX, and rapid iteration.
                            </p>
                            <p>
                                Most of my work has been in small startup teams,
                                including Techstars and a16z-backed companies, where I’ve
                                contributed across frontend, backend, infrastructure, and
                                product development.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10">
                        <p className="font-semibold text-sm text-center">{`Technologies that I've worked with in production apps:`}</p>
                        <div className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-2.5">
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
                        'linear-gradient(176deg, #EFE6D8 70%, #F7F4EF calc(70% + 2px))',
                }}
            />
        </section>
    );
}

export default Summary;
