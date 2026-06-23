'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type FadeInProps = {
    children: ReactNode;
    className?: string;
    /** Small stagger (seconds) for a subtle cascade between sibling blocks. */
    delay?: number;
};

// Subtle scroll reveal: a short opacity + 12px rise. The fade fires as soon as a
// sliver of the element crosses into the viewport (`amount: 0`, with a small
// negative bottom margin so it's just inside the fold) — early enough that it's
// effectively never a wait, but late enough that the user actually watches it
// play instead of it completing off-screen.
function FadeIn({ children, className, delay = 0 }: FadeInProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0, margin: '0px 0px -80px 0px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}>
            {children}
        </motion.div>
    );
}

export default FadeIn;
