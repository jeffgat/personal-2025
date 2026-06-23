'use client';
import { TabsContent, TabsList, TabsTrigger, Tabs } from '@/components/ui/tabs';
import FadeIn from '@/components/FadeIn';
import {
    Atom,
    Blocks,
    CandlestickChart,
    Database,
    ExternalLink,
    HardHat,
    KeyRound,
    Layers,
    Maximize2,
    Minimize2,
    Package,
    Radio,
    Zap,
    type LucideIcon,
} from 'lucide-react';
import Image from 'next/image';
import {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
    type ReactNode,
} from 'react';

// Shared so the expanded/collapsed media state survives tab switches (Radix
// unmounts inactive tab panels, so a per-panel state would reset every switch).
const MediaExpandContext = createContext<{
    expanded: boolean;
    toggle: () => void;
}>({ expanded: false, toggle: () => {} });

const Projects = () => {
    const [mediaExpanded, setMediaExpanded] = useState(false);

    return (
        <MediaExpandContext.Provider
            value={{
                expanded: mediaExpanded,
                toggle: () => setMediaExpanded((v) => !v),
            }}>
            <section className="mt-[160px] pb-24">
            <div className="mx-auto w-full max-w-[120ch] px-4">
                <FadeIn>
                    <h2 className="text-4xl font-bold uppercase mb-8 text-ink-muted text-center">
                        Recent Work
                    </h2>
                </FadeIn>
                <FadeIn delay={0.1}>
                <Tabs defaultValue="upside">
                    <div className="flex justify-center">
                        <TabsList className="mb-2">
                            <TabsTrigger value="gat-capital">
                                Gat Capital
                            </TabsTrigger>
                            <TabsTrigger value="upside">Upside</TabsTrigger>
                            <TabsTrigger value="gameon">GameOn Live</TabsTrigger>
                            <TabsTrigger value="human-park">Human Park</TabsTrigger>
                            <TabsTrigger value="zed">ZED RUN</TabsTrigger>
                            <TabsTrigger value="vhs">VHS</TabsTrigger>
                            <TabsTrigger value="creation-crate">
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
                                    src="/images/gat-capital-performance-2.webp"
                                    alt="Gat Capital trading dashboard showing realtime performance monitoring"
                                    width={2494}
                                    height={1478}
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
                            vertical
                            media={
                                <ProjectVideo
                                    name="gameon"
                                    title="GameOn Live"
                                    vertical
                                />
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
                </FadeIn>
            </div>
        </section>
        </MediaExpandContext.Provider>
    );
};

// A framed "app window" around media so it reads as a deliberate object
// rather than floating in the section. Brand-colored window controls.
const MediaFrame = ({
    children,
    className,
    action,
}: {
    children: ReactNode;
    className?: string;
    // Optional overlay control (e.g. the expand toggle) pinned to the frame's
    // top-right; rendered outside the clipping container so it isn't cut off.
    action?: ReactNode;
}) => (
    <div className={`relative ${className ?? ''}`}>
        {/* one continuous offset border, two-tone: sand on the top/left (matching
            the section above), sage on the bottom/right (matching the section below) */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-3 rounded-2xl border-2 border-l-sand-soft border-t-sand-soft border-b-sage-soft border-r-sage-soft"
        />
        <div className="relative overflow-hidden rounded-xl">{children}</div>
        {action}
    </div>
);

const ProjectLayout = ({
    media,
    children,
    // Mobile-app demos are shot in portrait, so cap the frame to a phone-ish
    // width and center it in the column instead of stretching it landscape-wide.
    vertical = false,
}: {
    media: ReactNode;
    children: ReactNode;
    vertical?: boolean;
}) => {
    // Expanding hands the media the full row width and collapses the description.
    // Landscape media animates its flex-basis to 100%; portrait phones don't go
    // full-width (it'd look stranded), they just grow to a larger capped width.
    // State is shared via context so it persists across tab switches.
    const { expanded, toggle } = useContext(MediaExpandContext);
    const descRef = useRef<HTMLDivElement>(null);

    // Pin the description to the width it has (or will have) when open so its text
    // can't reflow — and thrash its height — while the column animates; that reflow
    // is what made the collapse look janky. We compute the open width from the row
    // rather than reading offsetWidth, which would be 0 when reopening a panel that
    // mounted already-collapsed (after switching tabs while expanded). The pin is
    // released shortly after reopening so the resting layout stays responsive.
    const handleToggle = () => {
        const inner = descRef.current;
        const willExpand = !expanded;
        if (inner && window.matchMedia('(min-width: 1024px)').matches) {
            const rowWidth = inner.parentElement?.parentElement?.clientWidth ?? 0;
            const rem =
                parseFloat(getComputedStyle(document.documentElement).fontSize) ||
                16;
            const openWidth = vertical
                ? Math.min(28 * rem, rowWidth)
                : (rowWidth - 40) / 2; // 40 = lg:gap-10 between the open columns
            inner.style.width = `${openWidth}px`;
            if (!willExpand) {
                window.setTimeout(() => {
                    if (descRef.current) descRef.current.style.width = '';
                }, 520);
            }
        }
        toggle();
    };

    const expandButton = (
        <button
            type="button"
            onClick={handleToggle}
            aria-pressed={expanded}
            aria-label={expanded ? 'Collapse media' : 'Expand media'}
            className="absolute right-2 top-2 z-10 hidden h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-ink/40 text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-ink/60 lg:inline-flex">
            {expanded ? (
                <Minimize2 size={16} aria-hidden="true" />
            ) : (
                <Maximize2 size={16} aria-hidden="true" />
            )}
        </button>
    );

    return (
        <div
            className={`flex flex-col gap-6 transition-[gap] duration-500 ease-in-out lg:flex-row lg:items-center ${
                vertical ? 'lg:justify-center' : ''
            } ${expanded ? 'lg:gap-0' : vertical ? 'lg:gap-14' : 'lg:gap-10'}`}>
            <div
                className={
                    vertical
                        ? 'flex w-full justify-center lg:w-auto'
                        : `transition-[flex-basis] duration-500 ease-in-out ${
                              expanded ? 'lg:basis-full' : 'lg:basis-1/2'
                          }`
                }>
                <MediaFrame
                    action={expandButton}
                    className={
                        vertical
                            ? `max-w-full transition-[width] duration-500 ease-in-out ${
                                  expanded ? 'w-[420px]' : 'w-[300px]'
                              }`
                            : ''
                    }>
                    {media}
                </MediaFrame>
            </div>
            <div
                className={`transition-[flex-basis] duration-500 ease-in-out lg:overflow-hidden ${
                    expanded
                        ? `pointer-events-none max-lg:hidden lg:max-h-0 ${
                              vertical ? 'lg:basis-[0rem]' : 'lg:basis-[0%]'
                          }`
                        : vertical
                          ? 'lg:max-w-md lg:basis-[28rem]'
                          : 'lg:basis-1/2'
                }`}>
                <div
                    ref={descRef}
                    className={`transition-opacity duration-300 ease-in-out lg:w-full ${
                        expanded ? 'lg:opacity-0' : 'lg:opacity-100'
                    }`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

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
const ProjectVideo = ({
    name,
    title,
    vertical = false,
}: {
    name: string;
    title: string;
    vertical?: boolean;
}) => {
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
        <div
            className={`relative w-full bg-black ${
                vertical ? 'aspect-[494/992]' : 'aspect-video'
            }`}>
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
        className="inline-flex items-center gap-2 rounded-md border-2 border-flame px-4 py-2 text-sm font-semibold text-flame transition-colors hover:bg-flame hover:text-white"
        href={href}
        target="_blank"
        rel="noreferrer">
        View Live
        <ExternalLink size={16} aria-hidden="true" />
    </a>
);

export default Projects;
