// Importing the Next.js Link component for routing and the "clsx" utility for dynamic class name building.
import Link from 'next/link'
import clsx from 'clsx'

// Define a mapping of button styles (for the primary and secondary variants).
// These are predefined Tailwind CSS styles for each button variant.
const variantStyles = {
  primary:
    'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
  secondary:
    'bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
}

// Define the Button component.
export function Button({ variant = 'primary', className, ...props }) {
  // Use the clsx function to construct the class string.
  // By default, the button has some common styles. The variant styles are then appended depending on the variant prop.
  // Additionally, any custom class passed will be appended at the end.
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className,
  )

   // Check if the "href" prop is present. If it is, this means the button should be rendered as a link.
  // If not, it will render as a regular button.
  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
