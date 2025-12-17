import { motion } from 'motion/react';

const FEATURES = [
    {
        id: 1,
        symbol: "///",
        title: "Unified Multi-Chain Audit",
        description: "Fetch token balances, native coin amounts, and USD valuations across 9+ disparate networks: Ethereum, Solana, Starknet, Sui, Base, and more.",
        delay: 0.1
    },
    {
        id: 2,
        symbol: "<:>",
        title: "Real-Time Speed & Reliability",
        description: "Leveraging premium RPCs (Alchemy, Chainstack, CoinGecko) to deliver immediate, accurate data, minimizing latency and transaction errors.",
        delay: 0.2
    },
    {
        id: 3,
        symbol: "[LOCK]",
        title: "Zero-Risk, View-Only Security",
        description: "The Auditor bot only requires your public wallet address. It is non-custodial and never asks for private keys or sensitive information.",
        delay: 0.3
    },
];

export function FeaturesSection() {
    return (

        <section id="features" className="py-24 md:py-40 dark:bg-[#09080a] bg-white border-t border-b dark:border-[#09080a]/50 border-white/50">

            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <h2 className="text-sm font-mono font-semibold text-primary uppercase tracking-widest mb-1">
                        &gt; CORE.PROTOCOL.INTEGRITY
                    </h2>
                    <p className="text-4xl md:text-5xl font-extrabold dark:text-gray-50 text-black tracking-tight">
                        Why The Auditor Bot?
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {FEATURES.map((feature) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: feature.delay }}
                            className="p-8 space-y-4 bg-gray-950/70 border border-gray-800 rounded-xl shadow-xl shadow-black/30 hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="text-4xl font-mono text-primary mb-3">
                                {feature.symbol}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-50">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400">
                                {feature.description}
                            </p>

                            <div className="pt-4">
                                <div className="h-0.5 w-12 bg-primary/20 rounded-full" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}