const InputComponent = ({ fieldName, onTextChange, customName, oldName }) => {
  return (
    <div>
      <label>
        {fieldName} {oldName}
      </label>
      <input name={customName} type="text" onChange={(e) => onTextChange(e.target)} />
    </div>
  );
};

export default InputComponent;
