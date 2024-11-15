'use client';
import { Container, List } from '@chakra-ui/react';
import { TabsContent, TabsList, TabsTrigger, Tabs } from '@/components/ui/tabs';
import { LuCheckCircle } from 'react-icons/lu';
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
                <Tabs defaultValue="gameon" suppressHydrationWarning>
                    <TabsList className="mb-2">
                        <TabsTrigger value="gameon">GameOn Live</TabsTrigger>
                        <TabsTrigger value="human-park">Human Park</TabsTrigger>
                        <TabsTrigger value="zed">ZED RUN</TabsTrigger>
                        <TabsTrigger value="vhs">VHS</TabsTrigger>
                        <TabsTrigger value="creation-crate">Creation Crate</TabsTrigger>
                        <TabsTrigger value="cevnn">Cevnn</TabsTrigger>
                        <TabsTrigger value="cevnn-dashboard">Cevnn Dashboard</TabsTrigger>
                    </TabsList>
                    {/* gameon */}
                    <TabsContent value="gameon">
                        <div>
                            <p className="mb-2">
                                Tech stack: Typescript, React Native, Expo, Postgres,
                                Golang, Python
                            </p>
                            <p>
                                {`GameOn Live was a sports fantasy React Native mobile
                                  application partnered with the Spanish soccer league, LaLiga. Users
                                  could select 4 players for an upcoming match, and receive
                                  points in real time based on the player's actions during
                                  the game. I lead the frontend development for this project. Features included:`}
                            </p>
                            <List.Root fontSize="15px" marginTop={4} marginBottom={8}>
                                <List.Item className="flex">
                                    <List.Indicator as={LuCheckCircle} color="blue.400" />
                                    Real time events/scoring
                                </List.Item>
                                <List.Item className="flex">
                                    <List.Indicator as={LuCheckCircle} color="blue.400" />
                                    Live chat
                                </List.Item>
                                <List.Item className="flex">
                                    <List.Indicator as={LuCheckCircle} color="blue.400" />
                                    Leaderboards
                                </List.Item>
                                <List.Item className="flex">
                                    <List.Indicator as={LuCheckCircle} color="blue.400" />
                                    Push notifications
                                </List.Item>
                                <List.Item className="flex">
                                    <List.Indicator as={LuCheckCircle} color="blue.400" />
                                    In-app purchases
                                </List.Item>
                                <List.Item className="flex">
                                    <List.Indicator as={LuCheckCircle} color="blue.400" />
                                    App inbox notifications
                                </List.Item>
                            </List.Root>

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
                            Tech stack: Typescript/React, Next.js, Prisma, MySQL,
                            Solidity, Hardhat, Ethers.js, Tailwind
                        </p>
                        <p className="mb-8">
                            Human Park was a web3 AAA game in development under Virtually
                            Human Studios. This was our first website design that was more
                            than an email opt-in landing page. We wanted to have that
                            high-fidelity look that other video games such as Fortnite or
                            League of Legends have. I was the sole front-end developer on
                            this project.
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
                            Tech stack: Typescript/React, Storybook, Jest, Apollo,
                            Firebase, Solidity, Hardhat, Ethers.js, Sass
                        </p>
                        <p className="mb-8">
                            ZED RUN is an NFT digital horse racing platform. One of the
                            early P2E projects that made a big splash in the NFT gaming
                            space. I had worked on bug fixes, general optimization and the
                            NFT XP feature.
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
                            Tech stack: Typescript/React, Next.js, Prisma, MySQL,
                            Solidity, Hardhat, Ethers.js
                        </p>
                        <p className="mb-8">
                            Virtually Human Studios is the studio that created ZED RUN and
                            Human Park. This website redesign had a single carousel as the
                            entire website. We had implemented wallet connection and NFT
                            minting directly on some of the carousel slides. I was the
                            sole front-end developer on this project. this website,
                            working with our blockchain engineer to implement the
                            contracts.
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
                            Built using Typescript/React, Next.js, Node, GraphQL, Redis,
                            Postgres, and Docker.
                        </p>
                        <p className="mb-8">
                            Creation Crate is a subscription box service that combines
                            hands-on learning with online lessons. This project is a
                            custom built e-commerce solution built from scratch. It
                            integrates with multiple platforms and APIs, managing things
                            like recurring payments, shipping, inventory, and accounts. I
                            designed and developed this as the sole developer at the
                            company.
                        </p>

                        <div className="h-[600px] relative">
                            <Image src="/images/creation-crate.png" alt="" fill />
                        </div>
                    </TabsContent>
                    {/* cevnn */}
                    <TabsContent value="cevnn">
                        <p className="mb-2">Built using Javascript/React.</p>
                        <p className="mb-8">
                            Cevnn Payments was a fintech startup that works in the
                            Canadian payment processing space. The goal here was to create
                            a quick landing page and portal for our dashboard. I designed
                            and developed this website.
                        </p>

                        <div className="h-[600px] relative">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=HwO5hh0Eygo"
                                playing
                                loop
                                muted
                                width="100%"
                                height="100%"
                                controls
                            />
                        </div>
                    </TabsContent>
                    {/* cevnn dashboard */}
                    <TabsContent value="cevnn-dashboard">
                        <p className="mb-2">
                            Built using Typescript/React, PHP, and MySQL.
                        </p>
                        <p className="mb-8">
                            {`This project was a client facing dashboard, showing
                                various analytics and charts for the merchant's payments. I designed and developed the frontend for this project.`}
                        </p>

                        <div className="h-[600px] relative">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=AmSI7wH-EmI"
                                playing
                                loop
                                muted
                                controls
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </TabsContent>
                </Tabs>
            </Container>
        </section>
    );
};

export default Projects;
