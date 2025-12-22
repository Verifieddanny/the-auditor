import { Logo } from "./logo";

export function Footer() {
    return (
        <footer className="dark:border-t border-gray-900 dark:bg-[#09080a] bg-white py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start">
                    <Logo />
                    <p className="dark:text-gray-500 text-gray-950 text-xs mt-2 font-mono">© 2025 SECURE_AUDIT_PROTOCOL</p>
                </div>
                
                <div className="flex gap-6 text-sm font-mono dark:text-gray-400 text-gray-950">
                    <a href="https://x.com/dannyclassi_c" className="hover:text-primary transition-colors">Twitter</a>
                    <a href="https://t.me/DevDanny0" className="hover:text-primary transition-colors">Telegram</a>
                    <a href="https://github.com/Verifieddanny/the-auditor-bot" className="hover:text-primary transition-colors">Docs</a>
                </div>

                <a 
                    href="https://t.me/The_MultiChainAuditorBot" 
                    className="bg-primary/10 border border-primary/20 text-primary px-6 py-2 rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300"
                >
                    Launch Bot
                </a>
            </div>
        </footer>
    );
}