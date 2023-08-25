// Importing the Container component. The Container component is typically 
// used to constrain content to a maximum width and ensure consistent 
// spacing across different sections/pages.
import { Container } from '@/components/Container'

// The SimpleLayout component is a layout component that renders a title, 
// an introduction, and optional child content. It's primarily used for 
// pages or sections that require a simple, straightforward layout.

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container 
      // The content inside the SimpleLayout is given a top margin 
      // that increases in size for small screens.
      className="mt-16 sm:mt-32">
      
      <header 
        // Constrain the width of the header to make it more readable 
        // and aesthetically pleasing.
        className="max-w-2xl">
        
        <h1 
          // Style the title to be large, bold, with a tight letter spacing 
          // to make it stand out. The text color changes in dark mode.
          className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          
          {title} {/* Displaying the passed-in title */}
        </h1>
        
        <p 
          // Apply a margin at the top to separate it from the title, 
          // and style the text for better readability. The text color 
          // also changes in dark mode.
          className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          
          {intro} {/* Displaying the introductory text */}
        </p>
      </header>

      {/* If there's child content, it's rendered below the header with a 
          significant top margin to separate it from the intro. */}
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  )
}
