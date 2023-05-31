//Simple input components

const InputComponent = ({ fieldName, onTextChange, customName, oldName }) => {
  return (
    <div>
      <label className="pop-up-label">{fieldName} {oldName}</label>
      <input className="pop-up-input" name={customName} type="text" onChange={e => onTextChange(e.target)} />
    </div>
  )
}

export default InputComponent;
