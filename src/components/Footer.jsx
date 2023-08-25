// Importing necessary modules and components.
import Link from 'next/link'
import { ContainerInner, ContainerOuter } from '@/components/Container'

// NavLink is a utility component for footer navigation links.
// It wraps content inside a `next/link` and provides styling to the link.
function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

// The main Footer component definition.
export function Footer() {
  return (
    // Basic footer structure with a margin-top value and flex behavior.
    <footer className="mt-32 flex-none">
      
      {/* Outer container for the footer's content. */}
      <ContainerOuter>
        
        {/* A div containing the footer content, with a top border. */}
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          
          {/* Inner container to center and structure the actual content. */}
          <ContainerInner>
            
            {/* Flexbox to structure the content and ensure responsive behavior. */}
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              
              {/* Group of navigation links structured in a flex layout. */}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                {/* <NavLink href="/speaking">Speaking</NavLink> */}
                <NavLink href="/uses">Uses</NavLink>
              </div>
              
              {/* Copyright notice with the current year. */}
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Roman Jarmukhametov. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
