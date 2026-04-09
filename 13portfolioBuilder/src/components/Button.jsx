import React from 'react'

function Button(
    {   
        children,
        type="submit",
        bgColor="blue",
        textColor="white",
        className="",
        ...props
    }
) {
  return (
    <button
    className={`py-6 px-1 bg-blue-600 hover:bg-blue-700 roundex-xl ${className}`}
    {...props}
    >{children}</button>
  )
}

export default Button