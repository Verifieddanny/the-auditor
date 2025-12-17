import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

const FAQS = [
    {
        q: "Is my wallet safe?",
        a: "Absolutely. The Auditor is strictly view-only. We never ask for private keys, seed phrases, or permission to spend tokens. You only provide your public address."
    },
    {
        q: "Which chains are currently supported?",
        a: "We support 4+ networks including Ethereum, Sui, Celo, Base, Solana, and Starknet, with more being added monthly."
    },
    {
        q: "Is there a usage fee?",
        a: "The core auditing features are free to use. Premium tracking and automated alert features may be introduced for power users in the future."
    }
];

export function FAQSection() {
    return (
        <section className="py-24 dark:bg-[#09080a] bg-[#ffffff] ">
            <div className="max-w-3xl mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Questions // Ops</h2>
                    <h3 className="text-3xl font-bold dark:text-white text-[#09080a]">Common Inquiries</h3>
                </motion.div>

                <div className="space-y-4">
                    {FAQS.map((faq, i) => (
                        <div key={i} className="border border-gray-800 rounded-xl p-6 dark:bg-gray-950/50 hover:border-gray-700 transition-colors">
                            <h4 className="dark:text-white text-[#09080a] font-bold text-lg mb-2 flex justify-between items-center">
                                {faq.q}
                                <Plus className="size-4 text-primary" />
                            </h4>
                            <p className="dark:text-gray-400 text[#09080a] text-sm leading-relaxed">
                                {faq.a}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}