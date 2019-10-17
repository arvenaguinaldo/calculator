import React from 'react';
import './Button.css'

const isOperator = val => {
  return !isNaN(val) || val === "." || val === "AC" || val === "%";
}

const Button = (props) => (
  <div
    {...props}
    style={props.style}
    className={`button ${isOperator(props.children) ? null : 'operator'}`}
  >
    {props.children}
  </div>
)

export default Button;

