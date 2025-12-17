import { cn } from '@/lib/utils'

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <svg
            viewBox="0 0 180 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('text-foreground h-6 w-auto', className)}>
            
            {/* NEW BRAND ICON: THE AUDIT SHIELD */}
            <g transform="translate(0, 2)">
                {/* Shield Outline */}
                <path
                    d="M10 0L2 4V10C2 15.55 5.41 20.73 10 22C14.59 20.73 18 15.55 18 10V4L10 0Z"
                    stroke={uniColor ? 'currentColor' : 'url(#logo-gradient)'}
                    strokeWidth="2"
                    fill="none"
                />
                {/* Internal Scan Line (The Audit Beam) */}
                <rect 
                    x="5" 
                    y="9" 
                    width="10" 
                    height="2" 
                    rx="1"
                    fill={uniColor ? 'currentColor' : 'url(#logo-gradient)'}
                >
                    <animate 
                        attributeName="y" 
                        values="6;14;6" 
                        dur="3s" 
                        repeatCount="indefinite" 
                    />
                </rect>
            </g>

            {/* THE AUDITOR Text */}
            <text
                x="28"
                y="19"
                fill="currentColor"
                style={{
                    fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
                    fontWeight: 900,
                    fontSize: '17px',
                    letterSpacing: '-0.04em',
                    textTransform: 'uppercase'
                }}
            >
                The Auditor<tspan className="text-primary">.</tspan>
            </text>

            <defs>
                <linearGradient
                    id="logo-gradient"
                    x1="2"
                    y1="0"
                    x2="18"
                    y2="22"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9B99FE" />
                    <stop offset="1" stopColor="#2BC8B7" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('size-6', className)}>
            <path
                d="M12 2L4 6V12C4 17.55 7.41 22.73 12 24C16.59 22.73 20 17.55 20 12V6L12 2Z"
                stroke={uniColor ? 'currentColor' : 'url(#logo-gradient)'}
                strokeWidth="2"
                fill="none"
            />
            <rect x="7" y="11" width="10" height="2" rx="1" fill={uniColor ? 'currentColor' : 'url(#logo-gradient)'} />
            <defs>
                <linearGradient id="logo-gradient" x1="4" y1="2" x2="20" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9B99FE" />
                    <stop offset="1" stopColor="#2BC8B7" />
                </linearGradient>
            </defs>
        </svg>
    )
}