'use client';
import { Container } from '@chakra-ui/react';
import { TabsContent, TabsList, TabsTrigger, Tabs } from '@/components/ui/tabs';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';

const Projects = () => {
    const [hasWindow, setHasWindow] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setHasWindow(true);
        }
    }, []);

    if (!hasWindow) {
        return null;
    }

    return (
        <section className="h-[1000px] mt-[160px]">
            <Container maxW="120ch" suppressHydrationWarning>
                <h2 className="text-4xl font-bold uppercase mb-8 text-gray-600 text-center">
                    Recent Projects
                </h2>
                <Tabs defaultValue="upside" suppressHydrationWarning>
                    <TabsList className="mb-2 w-full sm:w-auto">
                        <TabsTrigger value="gat-capital">
                            Gat Capital
                        </TabsTrigger>
                        <TabsTrigger value="upside">
                            Upside
                        </TabsTrigger>
                        <TabsTrigger value="gameon">GameOn Live</TabsTrigger>
                        <TabsTrigger value="human-park">Human Park</TabsTrigger>
                        <TabsTrigger value="zed">ZED RUN</TabsTrigger>
                        <TabsTrigger value="vhs">VHS</TabsTrigger>
                        <TabsTrigger className="hidden lg:block" value="creation-crate">
                            Creation Crate
                        </TabsTrigger>
                    </TabsList>
                    {/* gat capital */}
                    <TabsContent value="gat-capital">
                        <p className="mb-2">
                            Built an end-to-end futures trading system for historical
                            market data ingestion, backtesting, optimization, and
                            supervised trade automation.
                        </p>
                        <p className="mb-2">
                            Designed Python/FastAPI services for simulation and live
                            execution alongside a React/TypeScript dashboard with
                            realtime monitoring and replay systems.
                        </p>
                        <p className="mb-8">
                            Built risk controls, dry-run/live execution profiles, and
                            operational tooling using DataBento, WebSockets, SQLite, and
                            TypeScript.
                        </p>
                        <ViewLiveButton href="https://www.gatcapital.xyz/" />
                        <Image
                            className="mt-8 w-full h-auto"
                            src="/images/gat-capital-performance.png"
                            alt="Gat Capital trading dashboard showing realtime performance monitoring"
                            width={1260}
                            height={704}
                        />
                    </TabsContent>
                    {/* upside */}
                    <TabsContent value="upside">
                        <p className="mb-2">
                            Upside is a web3 prediction market platform where users can
                            create, discover, and trade on markets using Privy smart
                            wallets. I built the frontend and collaboratively designed
                            the app experience, including authentication, market feeds,
                            voting and trading flows, dashboards, invite-gated
                            onboarding, leaderboards, and realtime market discussion.
                        </p>
                        <p className="mb-8">
                            Built using Next.js, React, TypeScript, Tailwind CSS, Privy,
                            Wagmi, Viem, TanStack Query, Zustand, Jotai, Axios, and
                            PostHog.
                        </p>
                        <Image
                            className="mt-8 w-full h-auto"
                            src="/images/upside.png"
                            alt="Upside web3 prediction market platform interface"
                            width={1920}
                            height={1196}
                        />
                    </TabsContent>
                    {/* gameon */}
                    <TabsContent value="gameon">
                        <div>
                            <p className="mb-2">
                                Built the frontend and collaboratively designed a
                                fantasy sports mobile platform in partnership with LaLiga
                                serving thousands of users and hundreds of daily active
                                users.
                            </p>
                            <p className="mb-2">
                                Features included live events, chat, push notifications,
                                leaderboards, in-app purchases, and realtime scoring.
                            </p>
                            <p className="mb-8">
                                Built using React Native, Expo, Golang, Postgres, and
                                TypeScript.
                            </p>

                            <div className="h-[600px] relative">
                                <ReactPlayer
                                    suppressHydrationWarning
                                    url="https://www.youtube.com/watch?v=knidWtHm66s"
                                    playing
                                    loop
                                    muted
                                    width="100%"
                                    height="100%"
                                    controls
                                />
                            </div>
                        </div>
                    </TabsContent>
                    {/* human park */}
                    <TabsContent value="human-park">
                        <p className="mb-2">
                            Human Park was a AAA web3 game in development under
                            Virtually Human Studios. I worked as the sole frontend
                            developer and collaboratively designed high-fidelity
                            marketing and product experiences inspired by modern game
                            studio websites.
                        </p>
                        <p className="mb-8">
                            Built using React, Next.js, Prisma, Solidity, Hardhat,
                            Ethers.js, MySQL, and Tailwind.
                        </p>

                        <div className="h-[600px] relative">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=8Co_-tK-qHg"
                                playing
                                loop
                                muted
                                width="100%"
                                height="100%"
                                controls
                            />
                        </div>
                    </TabsContent>
                    {/* zed run */}
                    <TabsContent value="zed">
                        <p className="mb-2">
                            ZED RUN was one of the early NFT gaming projects to reach
                            mainstream attention during the initial web3 gaming wave.
                        </p>
                        <p className="mb-2">
                            Worked across frontend development, platform improvements,
                            performance optimization, and NFT-related product features.
                        </p>
                        <p className="mb-8">
                            Built using React, Storybook, Apollo, Firebase, Solidity,
                            Hardhat, Ethers.js, and TypeScript.
                        </p>

                        <div className="h-[600px] relative">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=xNjnbFrjX68"
                                playing
                                loop
                                muted
                                width="100%"
                                height="100%"
                                controls
                            />
                        </div>
                    </TabsContent>
                    {/* vhs */}
                    <TabsContent value="vhs">
                        <p className="mb-2">
                            Redesigned the Virtually Human Studios website with wallet
                            connectivity and NFT minting integrated directly into the
                            experience.
                        </p>
                        <p className="mb-2">
                            Worked closely with blockchain engineers while leading
                            frontend implementation and interaction design.
                        </p>
                        <p className="mb-8">
                            Built using React, Next.js, Prisma, Solidity, Hardhat,
                            Ethers.js, and TypeScript.
                        </p>

                        <div className="h-[600px] relative">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=LPUmOS2nTCM"
                                playing
                                loop
                                muted
                                width="100%"
                                height="100%"
                                controls
                            />
                        </div>
                    </TabsContent>
                    {/* creation crate */}
                    <TabsContent value="creation-crate">
                        <p className="mb-2">
                            Designed and developed a custom ecommerce and subscription
                            platform for a Techstars-backed startup supporting over
                            50,000 monthly visitors and 1,500 active subscribers.
                        </p>
                        <p className="mb-2">
                            Built systems for recurring billing, shipping, inventory,
                            analytics, and account management while integrating multiple
                            third-party APIs and internal tooling.
                        </p>
                        <p className="mb-8">
                            Built using React, Next.js, Node.js, GraphQL, Postgres,
                            Redis, Docker, and TypeScript.
                        </p>

                        <div className="h-[600px] relative">
                            <Image
                                src="/images/creation-crate.png"
                                alt="Creation Crate ecommerce and subscription platform"
                                fill
                            />
                        </div>
                    </TabsContent>
                </Tabs>
            </Container>
        </section>
    );
};

const ViewLiveButton = ({ href }: { href: string }) => (
    <a
        className="inline-flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
        href={href}
        target="_blank"
        rel="noreferrer">
        View Live
        <ExternalLink size={16} aria-hidden="true" />
    </a>
);

export default Projects;
