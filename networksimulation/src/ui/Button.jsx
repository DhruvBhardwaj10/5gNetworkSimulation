import React from 'react'

const Button = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = 'Button'

export { Button }