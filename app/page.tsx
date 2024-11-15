"use client"
import Footer from '@/components/Footer';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import SocialsVert from '@/components/SocialsVert';
import Summary from '@/components/Summary';

export default function Home() {
    return (
        <>
            <Intro />
            <SocialsVert />
            <Summary />
            <Projects />
            <Footer />
        </>
    );
}
