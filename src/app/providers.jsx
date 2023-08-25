// This directive specifies that the code should be executed in "strict mode", which can catch common coding bugs and prevent the use of potentially problematic features.
'use client'

// Importing required modules and hooks from React and Next.js libraries.
import { createContext, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { ThemeProvider, useTheme } from 'next-themes'

// A custom hook to store and return the previous value of a given variable.
function usePrevious(value) {
  // useRef is used to persist values across re-renders without causing re-renders itself.
  let ref = useRef()

  // useEffect runs side effects after rendering. In this case, it updates the ref to store the latest value.
  useEffect(() => {
    ref.current = value
  }, [value])

  // Return the previous value.
  return ref.current
}

// Component to watch for system-level theme changes and updates the theme if necessary.
function ThemeWatcher() {
  // Using the useTheme hook from next-themes to get the current theme and a setter function.
  let { resolvedTheme, setTheme } = useTheme()

  // useEffect to listen for system-level theme preference changes.
  useEffect(() => {
    // Check if the user's preference is for a dark theme.
    let media = window.matchMedia('(prefers-color-scheme: dark)')

    // Function to run when the media query status changes.
    function onMediaChange() {
      // Determine the current system theme based on the media query.
      let systemTheme = media.matches ? 'dark' : 'light'
      // If the resolved theme is the same as the system theme, set the theme to 'system'.
      if (resolvedTheme === systemTheme) {
        setTheme('system')
      }
    }

    // Initialize the listener to set the correct theme initially.
    onMediaChange()
    // Attach the event listener to respond to future changes.
    media.addEventListener('change', onMediaChange)

    // Cleanup: remove the event listener when the component is unmounted.
    return () => {
      media.removeEventListener('change', onMediaChange)
    }
  }, [resolvedTheme, setTheme])

  // This component doesn't render anything to the DOM.
  return null
}

// Create a context to share some application-wide data.
export const AppContext = createContext({})

// Main provider component to wrap around the entire application and provide context and theming.
export function Providers({ children }) {
  // Using a custom hook to get the current route.
  let pathname = usePathname()
  // Use the custom hook to get the previous route.
  let previousPathname = usePrevious(pathname)

  return (
    // Provide the previous pathname to any components that are interested.
    <AppContext.Provider value={{ previousPathname }}>
      {/* ThemeProvider from next-themes to manage theming. Setting the theme is reflected in the 'class' attribute of the root element. */}
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {/* Component to watch and reflect system-level theme preference changes. */}
        <ThemeWatcher />
        {/* Render children inside the Providers. This is where the rest of the application would be rendered. */}
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  )
}
