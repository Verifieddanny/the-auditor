import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { Analytics } from "@vercel/analytics/react"
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'
import { ThemeProvider } from '@/components/theme-provider'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'The Auditor | Unified Multi-Chain Portfolio Intelligence' },
      {
        name: 'description',
        content: 'Audit and track your crypto portfolio across 9+ chains including Sui, Base, and Solana directly on Telegram.',
      },
      { name: 'theme-color', content: '#09080a' },
      // --- OPEN GRAPH (Facebook/Telegram/Discord) ---
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'The Auditor | Unified Multi-Chain Bot' },
      { property: 'og:description', content: 'The essential multi-chain bot for crypto enthusiasts. View-only, secure, and real-time.' },
      { property: 'og:image', content: 'https://the-auditor-liard.vercel.app/og-image.jpg' }, 
      { property: 'og:url', content: 'https://the-auditor-liard.vercel.app' },

      // --- TWITTER CARD ---
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'The Auditor | Unified Multi-Chain Bot' },
      { name: 'twitter:description', content: 'Track assets across all chains with one public address.' },
      { name: 'twitter:image', content: 'https://the-auditor-liard.vercel.app/og-image.jpg' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      // Favicon
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Analytics />
        {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'development' && (
          <TanStackDevtools
            config={{ position: 'bottom-right' }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        )}
        <Scripts />
      </body>
    </html>
  )
}
