// Importing the clsx library, which is a utility for conditionally 
// constructing classNames. Essentially, it's a way to combine class 
// names in a clean manner without unnecessary spaces or issues.
import clsx from 'clsx'

// The Prose component is a wrapper around a div that applies some 
// styling, specifically related to prose (or written content). 
// The purpose is to standardize the look of written content 
// across the application, potentially making it adapt to themes 
// like light or dark mode.

export function Prose({ className, ...props }) {
  return (
    // This div will have the 'prose' class by default, which likely 
    // provides some base styling for written content. 
    // If the theme is dark, it also applies the 'prose-invert' class 
    // to adapt the content's styling for better readability.
    // Additionally, any passed in className will be applied, 
    // and any other props will be spread onto the div.
    <div className={clsx(className, 'prose dark:prose-invert')} {...props} />
  )
}
