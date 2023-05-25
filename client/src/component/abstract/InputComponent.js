const InputComponent = ({fieldName, onTextChange, customName}) => {
  return (
    <div>
      <label>{fieldName}</label>
      <input name={customName} type="text" onChange={e => onTextChange(e.target)}/>
    </div>
  )
}

export default InputComponent;
