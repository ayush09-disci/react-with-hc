import React from 'react'
import { forwardRef , useId} from 'react';

function Input(
    {
        label,
        type="text",
        className="",
        ...props
    }
,ref) {

    const id = useId();   
  return (
    <div className="w-full">
        {label && <label htmlFor={id}>{label}</label>}
        <input 
            type={type}
            className={`px-6 py-1 rounded-xl bg-gray-300 text-gray-800 outline-0 ${className}`}
            {...props}
            ref={ref}
            id={id}    
        />
    </div>
  )
}

export default forwardRef(Input)