import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

const LOGO_MAP: Record<string, { color: string; logo: (props: any) => React.ReactNode }> = {
    'Sui': { color: 'text-teal-400', logo: (props) => <img src="/logos/sui.webp" {...props} alt="Sui" /> },
    'Celo': { color: 'text-[#fbff00]', logo: (props) => <img src="/logos/celo.webp" {...props} alt="Celo" /> },
    'Base': { color: 'text-blue-500', logo: (props) => <img src="/logos/base.webp" {...props} alt="Base" /> },
};

interface InlineLogoTransformProps {
    chainName: 'Sui' | 'Celo' | 'Base';
    className?: string;
}

export function InlineLogoTransform({ chainName, className }: InlineLogoTransformProps) {
    const { logo: LogoComponent, color } = LOGO_MAP[chainName];
    const [isHovered, setIsHovered] = React.useState(false);

    const [logoTextSize, setLogoTextSize] = React.useState(50);
    const spanRef = React.useRef<HTMLSpanElement>(null);


    React.useEffect(() => {
        const calculateTextSize = () => {
            if (spanRef.current) {
                const computedStyle = window.getComputedStyle(spanRef.current.parentElement as Element);
                const parentFontSize = parseFloat(computedStyle.fontSize);

                setLogoTextSize(parentFontSize * 0.8);
            }
        };

        calculateTextSize();

        window.addEventListener('resize', calculateTextSize);
        return () => window.removeEventListener('resize', calculateTextSize);
    }, []);

    return (
        <motion.span
            className={cn(
                "relative inline-flex align-middle cursor-pointer mx-1 h-12 w-12 md:h-20 md:w-20 lg:h-24 lg:w-24", // Responsive size
                className
            )} // Span container needs space
            ref={spanRef}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Logo Layer (Fades/Scales down on hover) */}
            <motion.span
                className="absolute inset-0 flex items-center justify-center"
                initial={false}
                animate={{
                    opacity: isHovered ? 0 : 1,
                    scale: isHovered ? 0.6 : 1,
                    filter: isHovered ? 'blur(5px)' : 'blur(0px)',
                }}
                transition={{ duration: 0.3 }}
            >
                <LogoComponent className={cn("size-full  max-w-[70%]", color, chainName === "Sui" ? "max-h-[80%]" : "max-h-[70%]")} />
            </motion.span>

            <AnimatePresence>
                {isHovered && (
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                        className={cn(
                            "absolute inset-0 flex items-center justify-center font-extrabold whitespace-nowrap",
                            color
                        )}
                        style={{
                            fontSize: `${logoTextSize}px`,
                            lineHeight: 1.2,
                            letterSpacing: '-0.075em',
                        }}
                    >
                        {chainName}
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.span>
    );
}