// import React from 'react'
import "./MyButton.css";
import PropTypes from "prop-types";

const MyButton = ({primary,text, size, bgColor,disabled, onClickFunc,...args}) => {

let variant = primary ? "primary" : "secondary";

  return (
    <button
     onClick={onClickFunc} 
     disabled={disabled}
     className={`${size} ${variant}`}
     style={{ backgroundColor:bgColor}}
     {...args}
     > 
     {text} 
     </button>
  )
}

export default MyButton


MyButton.propTypes ={
    primary: PropTypes.bool,
    text: PropTypes.string.isRequired,
    size:PropTypes.oneOf(["small", "medium", "large"]),
    bgColor:PropTypes.string,
    disabled:PropTypes.bool,
    onClickFunc: PropTypes.func.isRequired,

}