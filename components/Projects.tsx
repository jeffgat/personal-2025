'use client';
import { TabsContent, TabsList, TabsTrigger, Tabs } from '@/components/ui/tabs';
import {
    Atom,
    Blocks,
    CandlestickChart,
    Database,
    ExternalLink,
    HardHat,
    KeyRound,
    Layers,
    Package,
    Radio,
    Zap,
    type LucideIcon,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState, type ReactNode } from 'react';

const Projects = () => {
    return (
        <section className="mt-[160px] pb-24">
            <div className="mx-auto w-full max-w-[120ch] px-4">
                <h2 className="text-4xl font-bold uppercase mb-8 text-ink-muted text-center">
                    Recent Work
                </h2>
                <Tabs defaultValue="upside">
                    <div className="flex justify-center">
                        <TabsList className="mb-2 w-full sm:w-auto">
                            <TabsTrigger value="gat-capital">
                                Gat Capital
                            </TabsTrigger>
                            <TabsTrigger value="upside">Upside</TabsTrigger>
                            <TabsTrigger value="gameon">GameOn Live</TabsTrigger>
                            <TabsTrigger value="human-park">Human Park</TabsTrigger>
                            <TabsTrigger value="zed">ZED RUN</TabsTrigger>
                            <TabsTrigger value="vhs">VHS</TabsTrigger>
                            <TabsTrigger
                                className="hidden lg:block"
                                value="creation-crate">
                                Creation Crate
                            </TabsTrigger>
                        </TabsList>
                    </div>
                    {/* gat capital */}
                    <TabsContent value="gat-capital">
                        <ProjectLayout
                            media={
                                <Image
                                    className="h-auto w-full"
                                    src="/images/gat-capital-performance.webp"
                                    alt="Gat Capital trading dashboard showing realtime performance monitoring"
                                    width={1260}
                                    height={704}
                                />
                            }>
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
                            <p className="mb-4">
                                Built risk controls, dry-run/live execution profiles, and
                                operational tooling.
                            </p>
                            <TechStack
                                items={[
                                    'Python',
                                    'FastAPI',
                                    'React',
                                    'TypeScript',
                                    'DataBento',
                                    'WebSockets',
                                    'SQLite',
                                ]}
                            />
                            <ViewLiveButton href="https://www.gatcapital.xyz/" />
                        </ProjectLayout>
                    </TabsContent>
                    {/* upside */}
                    <TabsContent value="upside">
                        <ProjectLayout
                            media={<ProjectVideo name="upside" title="Upside" />}>

                            <p className="mb-2">
                                Upside is a web3 prediction market platform where users
                                can create, discover, and trade on markets using Privy
                                smart wallets. I built the frontend and collaboratively
                                designed the app experience, including authentication,
                                market feeds, voting and trading flows, dashboards,
                                invite-gated onboarding, leaderboards, and realtime
                                market discussion.
                            </p>
                            <TechStack
                                items={[
                                    'Next.js',
                                    'React',
                                    'TypeScript',
                                    'Tailwind CSS',
                                    'Privy',
                                    'Wagmi',
                                    'Viem',
                                    'TanStack Query',
                                    'Zustand',
                                    'Jotai',
                                    'Axios',
                                    'PostHog',
                                ]}
                            />
                        </ProjectLayout>
                    </TabsContent>
                    {/* gameon */}
                    <TabsContent value="gameon">
                        <ProjectLayout
                            media={
                                <ProjectVideo name="gameon" title="GameOn Live" />
                            }>
                            <p className="mb-2">
                                Built the frontend and collaboratively designed a fantasy
                                sports mobile platform in partnership with LaLiga serving
                                thousands of users and hundreds of daily active users.
                            </p>
                            <p className="mb-2">
                                Features included live events, chat, push notifications,
                                leaderboards, in-app purchases, and realtime scoring.
                            </p>
                            <TechStack
                                items={[
                                    'React Native',
                                    'Expo',
                                    'Golang',
                                    'Postgres',
                                    'TypeScript',
                                ]}
                            />
                        </ProjectLayout>
                    </TabsContent>
                    {/* human park */}
                    <TabsContent value="human-park">
                        <ProjectLayout
                            media={
                                <ProjectVideo name="human-park" title="Human Park" />
                            }>
                            <p className="mb-2">
                                Human Park was a AAA web3 game in development under
                                Virtually Human Studios. I worked as the sole frontend
                                developer and collaboratively designed high-fidelity
                                marketing and product experiences inspired by modern game
                                studio websites.
                            </p>
                            <TechStack
                                items={[
                                    'React',
                                    'Next.js',
                                    'Prisma',
                                    'Solidity',
                                    'Hardhat',
                                    'Ethers.js',
                                    'MySQL',
                                    'Tailwind',
                                ]}
                            />
                        </ProjectLayout>
                    </TabsContent>
                    {/* zed run */}
                    <TabsContent value="zed">
                        <ProjectLayout
                            media={
                                <ProjectVideo name="zed" title="ZED RUN" />
                            }>
                            <p className="mb-2">
                                ZED RUN was one of the early NFT gaming projects to reach
                                mainstream attention during the initial web3 gaming wave.
                            </p>
                            <p className="mb-2">
                                Worked across frontend development, platform
                                improvements, performance optimization, and NFT-related
                                product features.
                            </p>
                            <TechStack
                                items={[
                                    'React',
                                    'Storybook',
                                    'Apollo',
                                    'Firebase',
                                    'Solidity',
                                    'Hardhat',
                                    'Ethers.js',
                                    'TypeScript',
                                ]}
                            />
                        </ProjectLayout>
                    </TabsContent>
                    {/* vhs */}
                    <TabsContent value="vhs">
                        <ProjectLayout
                            media={
                                <ProjectVideo name="vhs" title="VHS" />
                            }>
                            <p className="mb-2">
                                Redesigned the Virtually Human Studios website with wallet
                                connectivity and NFT minting integrated directly into the
                                experience.
                            </p>
                            <p className="mb-2">
                                Worked closely with blockchain engineers while leading
                                frontend implementation and interaction design.
                            </p>
                            <TechStack
                                items={[
                                    'React',
                                    'Next.js',
                                    'Prisma',
                                    'Solidity',
                                    'Hardhat',
                                    'Ethers.js',
                                    'TypeScript',
                                ]}
                            />
                        </ProjectLayout>
                    </TabsContent>
                    {/* creation crate */}
                    <TabsContent value="creation-crate">
                        <ProjectLayout
                            media={
                                <Image
                                    className="h-auto w-full"
                                    src="/images/creation-crate.webp"
                                    alt="Creation Crate ecommerce and subscription platform"
                                    width={1280}
                                    height={720}
                                />
                            }>
                            <p className="mb-2">
                                Designed and developed a custom ecommerce and
                                subscription platform for a Techstars-backed startup
                                supporting over 50,000 monthly visitors and 1,500 active
                                subscribers.
                            </p>
                            <p className="mb-2">
                                Built systems for recurring billing, shipping, inventory,
                                analytics, and account management while integrating
                                multiple third-party APIs and internal tooling.
                            </p>
                            <TechStack
                                items={[
                                    'React',
                                    'Next.js',
                                    'Node.js',
                                    'GraphQL',
                                    'Postgres',
                                    'Redis',
                                    'Docker',
                                    'TypeScript',
                                ]}
                            />
                        </ProjectLayout>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

// A framed "app window" around media so it reads as a deliberate object
// rather than floating in the section. Brand-colored window controls.
const MediaFrame = ({ children }: { children: ReactNode }) => (
    <div className="relative">
        {/* one continuous offset border, two-tone: sand on the top/left (matching
            the section above), sage on the bottom/right (matching the section below) */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-3 rounded-2xl border-2 border-l-sand-soft border-t-sand-soft border-b-sage-soft border-r-sage-soft"
        />
        <div className="relative overflow-hidden rounded-xl">{children}</div>
    </div>
);

const ProjectLayout = ({
    media,
    children,
}: {
    media: ReactNode;
    children: ReactNode;
}) => (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
        <div className="lg:w-1/2">
            <MediaFrame>{media}</MediaFrame>
        </div>
        <div className="lg:w-1/2">{children}</div>
    </div>
);

// Base for self-hosted video files. Empty = served from /public/videos locally;
// set NEXT_PUBLIC_VIDEO_BASE to a CDN origin (e.g. https://media.jeffgat.com)
// in production so the mp4s stream off the CDN, not the app's bandwidth.
const VIDEO_BASE = process.env.NEXT_PUBLIC_VIDEO_BASE ?? '';

// Self-hosted player: autoplays muted + looping, but only while the clip is
// actually scrolled into view (an IntersectionObserver plays it on enter, pauses
// on exit) so off-screen videos don't burn bandwidth. Radix unmounts inactive tab
// panels, so switching tabs mounts a fresh <video> and the observer re-attaches.
// Muted + playsInline is what lets autoplay through on mobile/iOS; we set `muted`
// imperatively because React doesn't reliably reflect the muted prop to the DOM
// property. Native controls stay on so visitors can unmute or scrub.
// preload="metadata" keeps the initial load light.
const ProjectVideo = ({ name, title }: { name: string; title: string }) => {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = ref.current;
        if (!video) return;
        video.muted = true;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Browsers reject the promise if playback is blocked; the
                    // poster + controls remain as a fallback, so just swallow it.
                    video.play().catch(() => {});
                } else {
                    video.pause();
                }
            },
            // Fire once ~40% of the clip is on screen.
            { threshold: 0.4 },
        );
        observer.observe(video);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative aspect-video w-full bg-black">
            <video
                ref={ref}
                src={`${VIDEO_BASE}/videos/${name}.mp4`}
                poster={`/videos/${name}-poster.jpg`}
                aria-label={`${title} demo video`}
                muted
                loop
                playsInline
                controls
                preload="metadata"
                className="h-full w-full object-contain"
            />
        </div>
    );
};

const techLogos: Record<string, string> = {
    React: '/images/react.png',
    'React Native': '/images/react.png',
    TypeScript: '/images/typescript.png',
    'Next.js': '/images/next.png',
    Tailwind: '/images/tailwind.png',
    'Tailwind CSS': '/images/tailwind.png',
    'Node.js': '/images/node.png',
    Golang: '/images/golang.png',
    Postgres: '/images/postgres.png',
    Prisma: '/images/prisma.png',
    Solidity: '/images/solidity.png',
    Apollo: '/images/apollo.png',
    GraphQL: '/images/graphql.png',
    Redis: '/images/redis.png',
    Docker: '/images/docker.png',
    Expo: '/images/expo.png',
    Python: '/images/python.png',
    FastAPI: '/images/fastapi.png',
    SQLite: '/images/sqlite.png',
    Storybook: '/images/storybook.png',
    Firebase: '/images/firebase.png',
    MySQL: '/images/mysql.png',
    Axios: '/images/axios.png',
    PostHog: '/images/posthog.png',
    'Ethers.js': '/images/ethers.png',
    Wagmi: '/images/wagmi.png',
    'TanStack Query': '/images/tanstack-query.png',
};

// Relevant icons used when a brand logo is unavailable or fails to load.
const techIcons: Record<string, LucideIcon> = {
    Hardhat: HardHat,
    Zustand: Layers,
    Jotai: Atom,
    Viem: Blocks,
    Privy: KeyRound,
    DataBento: CandlestickChart,
    WebSockets: Radio,
    SQLite: Database,
    FastAPI: Zap,
};

// Renders a tech's brand logo, falling back to a relevant icon (or a generic
// placeholder) if there is no logo or the image fails to load.
const TechMark = ({ name }: { name: string }) => {
    const logo = techLogos[name];
    const [errored, setErrored] = useState(false);

    if (logo && !errored) {
        return (
            <Image
                src={logo}
                alt=""
                width={16}
                height={16}
                aria-hidden="true"
                unoptimized
                onError={() => setErrored(true)}
            />
        );
    }

    const Icon = techIcons[name] ?? Package;
    return <Icon size={14} className="text-ink-muted" aria-hidden="true" />;
};

const TechStack = ({ items }: { items: string[] }) => (
    <div className="mt-6 mb-8 flex flex-wrap gap-2">
        {items.map((t) => (
            <span
                key={t}
                className="inline-flex items-center gap-1.5 rounded-full border border-sand-dark/30 bg-sand-soft px-3 py-1 text-xs font-semibold text-ink">
                <TechMark name={t} />
                {t}
            </span>
        ))}
    </div>
);

const ViewLiveButton = ({ href }: { href: string }) => (
    <a
        className="inline-flex items-center gap-2 rounded-md bg-flame px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-flame-dark"
        href={href}
        target="_blank"
        rel="noreferrer">
        View Live
        <ExternalLink size={16} aria-hidden="true" />
    </a>
);

export default Projects;
