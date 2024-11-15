import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Provider } from '@/components/ui/provider';

const montserrat = Montserrat({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Jeff Gabonton',
    description: 'Software engineer',
    icons: {
        icon: '/favicon.png',
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
