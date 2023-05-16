import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
      id:string;
      label:string;
      name:string;
      type:string;
      labelClass:string;
      value:string;
      onChange:(event:React.ChangeEvent<HTMLInputElement>) => void
}

const Input:React.FC<InputProps> = ({name,type,label,id,labelClass,onChange,...rest}) => {
  return (
    <div>
        <label htmlFor={name} className={labelClass}>{label}</label>
        <div className="mt-2">
          <input id={id} name={name} type={type} onChange={event => onChange(event)} {...rest}/>
        </div>
    </div>
  )
}

export default Input