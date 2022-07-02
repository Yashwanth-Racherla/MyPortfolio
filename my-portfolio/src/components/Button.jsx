import React from "react";

const Button = ({ text, id, onButtonClick }) => {
  return (
    <button
      data-button-id={id}
      className="button portfolio-button"
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
};

export default Button;
