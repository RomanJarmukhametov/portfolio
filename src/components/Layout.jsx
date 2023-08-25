// Importing necessary components.
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

// The Layout component provides a consistent structure to pages using it. 
// This structure includes the header, footer, and main content area (children).

export function Layout({ children }) {
  return (
    <>
      {/* Background Layer */}
      <div className="fixed inset-0 flex justify-center sm:px-8">
        {/* This container stretches to a maximum width of 7xl. */}
        <div className="flex w-full max-w-7xl lg:px-8">
          {/* This div acts as a background, which adapts its colors based on the theme. 
               In the light theme, it has a white background and a light gray ring. 
               In the dark theme, it gets a dark background with a dark gray ring. */}
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      
      {/* Main Content Layer */}
      <div className="relative flex w-full flex-col">
        {/* Inserting the Header component at the top */}
        <Header />

        {/* This is where the main content of any page using the Layout will appear. 
             It is passed as the 'children' prop when the Layout component is used. */}
        <main className="flex-auto">{children}</main>

        {/* Inserting the Footer component at the bottom */}
        <Footer />
      </div>
    </>
  )
}
