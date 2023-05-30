import React from "react";
import "../main.css";

const PopUpComponent = ({ onOkClick, onCancelClick, insertText }) => {
  return (
    <div className="pop-up">
      <p className="pop-up-text">{insertText}</p>
      <div className="flex">
        <button className="pop-up-btn button-effect" onClick={onOkClick()}>
          OK
        </button>
        <button className="pop-up-btn button-effect" onClick={onCancelClick()}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PopUpComponent;
