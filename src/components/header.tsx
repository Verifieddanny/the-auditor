import { Link } from '@tanstack/react-router'
import { Logo } from '@/components/logo'
import { Menu, X, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
import { ThemeSwitcher } from './kibo-ui/theme-switcher'

const menuItems = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Networks', href: '#features' },
    { name: 'Docs', href: 'https://github.com/Verifieddanny/the-auditor-bot' },
]

const BOT_LINK = "https://t.me/The_AuditorBot"

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-50 w-full px-2">
                <div className={cn(
                    'mx-auto mt-2 max-w-6xl px-6 transition-all duration-500 lg:px-12',
                    isScrolled && 'bg-background/60 max-w-4xl rounded-2xl border border-white/10 backdrop-blur-xl lg:px-5 py-0'
                )}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link to="/" className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                {menuState ? <X className="size-6" /> : <Menu className="size-6" />}
                            </button>
                        </div>

                        {/* DESKTOP NAVIGATION */}
                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm font-medium tracking-tight">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="text-muted-foreground hover:text-primary transition-colors duration-200">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={cn(
                            "bg-background lg:bg-transparent mb-6 hidden w-full flex-wrap items-center justify-end rounded-3xl border p-6 lg:m-0 lg:flex lg:w-fit lg:gap-4 lg:p-0 lg:border-none",
                            menuState && "block absolute top-full left-0 mt-4 w-full border-white/10 shadow-2xl"
                        )}>
                            <div className="lg:hidden mb-8">
                                <ul className="space-y-6 text-lg font-semibold">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.href} onClick={() => setMenuState(false)} className="text-foreground">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex items-center gap-3">
                                <ThemeSwitcher />

                                <Button
                                    asChild
                                    size="sm"
                                    className="rounded-full bg-primary hover:bg-primary/90 px-5 shadow-lg shadow-primary/20">
                                    <a href={BOT_LINK} target="_blank" rel="noopener noreferrer">
                                        <span className="flex items-center gap-2">
                                            Launch Bot <ExternalLink className="size-3" />
                                        </span>
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}