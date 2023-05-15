import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    type:"submit" | "reset" | "button" | undefined;
    className:string;
    children: React.ReactNode;
  onClick?: () => void;
}

const Button:React.FC<ButtonProps> = ({type,className,children,...rest}) => {
  return (
    <div>
    <button type={type} className={className} {...rest}>{children}</button>
  </div>
  )
}

export default Button