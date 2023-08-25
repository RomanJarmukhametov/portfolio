// Importing required modules and components
import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout' // The main layout component for styling and structure.

import '@/styles/tailwind.css' // Importing the TailwindCSS styles.

export const metadata = {
  title: {
    template: '%s - Roman Jarmukhametov',  // Template for the title. %s will be replaced with the actual title of the content.
    default:   // Default title if none is provided.
      'Roman Jarmukhametov - a Dedicated Front-End Developer and Designer.',
  },
  description:
    'I’m Roman Jarmukhametov, a front-end developer hailing from Kazakhstan. In the vast expanse of the digital realm, I use my chosen quartet: Vue, Nuxt, Strapi, and Tailwind to compose interactive masterpieces. Every line of code I write and every interface I design resonates with the symphony of my passion and dedication. Journey with me as we build immersive web experiences that strike a chord with users globally.',
  alternates: {
    types: {
      'application/rss+xml': // Specifies alternate content type (here, it's for an RSS feed).
        `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`, // The URL for the RSS feed.
    },
  },
}

// RootLayout component: This is the top-level layout for the application or site.
// It wraps around all other components and defines the overall structure and style.
export default function RootLayout({ children }) {
  return (
     // Setting the language and some CSS classes for styling. suppressHydrationWarning is used to suppress hydration warning.
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
