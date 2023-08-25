'use client'

// Import necessary hooks and components.
// "useContext" is a React hook that provides access to context.
import { useContext } from 'react'

// "useRouter" is a Next.js hook for accessing the router instance.
import { useRouter } from 'next/navigation'

// Import custom context and components. 
// These components and utilities are specific to the project.
import { AppContext } from '@/app/providers'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { formatDate } from '@/lib/formatDate'

// Define an SVG component for the arrow left icon.
function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Define the main ArticleLayout component.
export function ArticleLayout({ article, children }) {
  // Access the router instance.
  let router = useRouter()

  // Destructure the previousPathname value from the AppContext.
  let { previousPathname } = useContext(AppContext)

  return (
    // Using the Container component to wrap the main content.
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
           {/* Check if there's a previousPathname to display a "go back" button */}
          {previousPathname && (
            <button
              type="button"
              // Go back in the navigation stack when the button is clicked.
              onClick={() => router.back()}
              aria-label="Go back to articles"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
            >
              {/* Render the ArrowLeftIcon inside the button */}
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </button>
          )}
          <article>
            <header className="flex flex-col">
               {/* Display the article title */}
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                {article.title}
              </h1>

              {/* Display the article's date in a formatted way */}
              <time
                dateTime={article.date}
                className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                <span className="ml-3">{formatDate(article.date)}</span>
              </time>
            </header>

            {/* Prose component is responsible for styling and rendering the article's content */}
            <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose>
          </article>
        </div>
      </div>
    </Container>
  )
}
