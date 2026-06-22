import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Provider } from '@/components/ui/provider';

const montserrat = Montserrat({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const title = 'Jeff Gatbonton — Full Stack Engineer';
const description =
    'Full stack engineer and former designer with 8+ years building consumer products, realtime systems, mobile apps, and web3 across early-stage startups including Techstars and a16z-backed companies.';
const url = 'https://www.jeffgat.com/';

export const metadata: Metadata = {
    metadataBase: new URL(url),
    title,
    description,
    icons: {
        icon: '/favicon.png',
    },
    openGraph: {
        title,
        description,
        url,
        siteName: 'Jeff Gatbonton',
        type: 'website',
        images: [
            {
                url: '/images/headshot.jpg',
                width: 1200,
                height: 1200,
                alt: 'Jeff Gatbonton',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: ['/images/headshot.jpg'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html suppressHydrationWarning lang="en" className={montserrat.className}>
            <body>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
