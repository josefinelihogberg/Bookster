import React from "react";

const PopUpComponent = ({ onOkClick, onCancelClick, insertText }) => {
  return (
    <div className="pop-up">
      <p>{insertText}</p>
      <button onClick={onOkClick()}>OK</button>
      <button onClick={onCancelClick()}>Cancel</button>
    </div>
  );
};

export default PopUpComponent;
