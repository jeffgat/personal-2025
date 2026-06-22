import React from 'react';

type Props = {
    /** Color filling the area above the slanted line. */
    topColor: string;
    /** Color filling the area below the slanted line. */
    bottomColor: string;
    /** Line height at the left edge, as a fraction (0–1) of the divider height. */
    leftY?: number;
    /** Line height at the right edge, as a fraction (0–1) of the divider height. */
    rightY?: number;
    /** Optional hairline echoing a section color, offset into the lighter side. */
    stitchColor?: string;
    /** Hairline offset from the boundary in viewBox units; negative = above. */
    stitchOffset?: number;
    className?: string;
};

const VB_W = 1000;
const VB_H = 300;

// A diagonal section divider drawn with preserveAspectRatio="none" so the slant's
// endpoints stay pinned to the left/right edges at fixed heights. The vertical rise
// is therefore constant at every viewport width — it never balloons into a wedge or
// flattens off-screen the way a fixed-angle linear-gradient does on ultrawide screens.
function SlantDivider({
    topColor,
    bottomColor,
    leftY = 0.5,
    rightY = 0.5,
    stitchColor,
    stitchOffset = 16,
    className,
}: Props) {
    const lY = leftY * VB_H;
    const rY = rightY * VB_H;
    const thickness = 1.2;

    return (
        <svg
            className={className}
            width="100%"
            height="100%"
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            preserveAspectRatio="none"
            aria-hidden="true">
            <rect x="0" y="0" width={VB_W} height={VB_H} fill={bottomColor} />
            <polygon
                points={`0,0 ${VB_W},0 ${VB_W},${rY} 0,${lY}`}
                fill={topColor}
            />
            {stitchColor && (
                <polygon
                    points={`0,${lY + stitchOffset} ${VB_W},${rY + stitchOffset} ${VB_W},${
                        rY + stitchOffset + thickness
                    } 0,${lY + stitchOffset + thickness}`}
                    fill={stitchColor}
                />
            )}
        </svg>
    );
}

export default SlantDivider;
