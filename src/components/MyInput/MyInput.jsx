import PropTypes from "prop-types";
import "./MyInput.css"

const MyInput = ({placeholderText, size, padding, textSize, labelText, type,...args}) => {
  return (
    <div>
        <label> {labelText} </label>
       <input 
       type={type} 
       placeholder={placeholderText}  
       className={`${size} ${textSize}`}
       style={{padding:padding}}
       {...args}
       />
    </div>
   
  )
}

export default MyInput


MyInput.propTypes ={
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(["small, medium, large"]),
    padding:PropTypes.number,
    textSize: PropTypes.number,
    labelText: PropTypes.string,
    type:PropTypes.oneOf(["text", "email", "password"])
}