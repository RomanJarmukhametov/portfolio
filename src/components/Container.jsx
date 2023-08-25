// Import necessary functions and utilities.
import { forwardRef } from 'react'
import clsx from 'clsx'

// Outer container component.
// This uses `forwardRef` to allow forwarding refs to the wrapped DOM element.
export const ContainerOuter = forwardRef(function OuterContainer(
  { className, children, ...props },
  ref,
) {
  return (
    // Container with some default horizontal padding for small screens.
    // Users can override/add to this styling by providing a `className`.
    <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
      {/* Inner div to control the maximum width and center the content. */}
      <div className="mx-auto w-full max-w-7xl lg:px-8">{children}</div>
    </div>
  )
})

// Inner container component. 
// Provides a slightly different layout and padding than the outer container.
export const ContainerInner = forwardRef(function InnerContainer(
  { className, children, ...props },
  ref,
) {
  return (
    // Container with relative positioning and varying padding across screen sizes.
    <div
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      {/* Inner div to control the maximum width for larger screens. */}
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  )
})

// Main Container component that wraps the content inside both the Outer and Inner containers.
export const Container = forwardRef(function Container(
  { children, ...props },
  ref,
) {
  return (
    // First, wrap the content in the Outer container.
    <ContainerOuter ref={ref} {...props}>
      {/* Then, nest the Inner container inside. */}
      <ContainerInner>{children}</ContainerInner>
    </ContainerOuter>
  )
})
