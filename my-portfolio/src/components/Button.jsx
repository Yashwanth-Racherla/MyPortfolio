import React from "react";

const Button = ({ text, id, onButtonClick, className }) => {
  return (
    <button
      data-button-id={id}
      className={`button ${className}`}
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
};

export default Button;
