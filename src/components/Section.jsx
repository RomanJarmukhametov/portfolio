// Importing the useId hook from 'react'. This hook generates a unique 
// ID for components, which can be particularly useful for accessibility 
// purposes and associating label elements with other UI controls.
import { useId } from 'react'

// The Section component is a general-purpose component that provides 
// structure and styling for a section of content. It is designed 
// to have a title and an associated content area.

export function Section({ title, children }) {
  // Generate a unique ID for the section using the useId hook.
  // This ID is mainly used for accessibility purposes.
  let id = useId()

  return (
    <section
      // The aria-labelledby attribute establishes a relationship 
      // between this section and its label (the title). Screen 
      // readers will announce this title when the section is focused or entered.
      aria-labelledby={id}
      // Some styling is applied, especially for medium-sized screens 
      // (like tablets). This includes a border on the left, padding, 
      // and color adjustments for dark mode.
      className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
    >
      <div 
        // This div sets up a grid layout for the title and content.
        // By default, the grid has one column, which stacks the title 
        // on top of the content. On medium screens, it splits into 
        // four columns with the title taking up one column and the 
        // content taking the remaining three.
        className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        
        <h2
          // Applying the unique ID to the title ensures that it's 
          // associated with the section element via the aria-labelledby attribute.
          id={id}
          // Styling the title to be smaller than regular headers, 
          // bold, and adapting its color for dark mode.
          className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
        >
          {title} {/* Displaying the passed-in title */}
        </h2>
        
        <div className="md:col-span-3">
          {children} {/* Displaying the children content within the section */}
        </div>
      </div>
    </section>
  )
}
