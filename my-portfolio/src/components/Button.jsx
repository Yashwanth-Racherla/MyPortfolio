import React from "react";

const Button = ({ text, id }) => {
  const hideCards = (e) => {
    const p_button = document.querySelectorAll(".portfolio-button");
    const p_card = document.querySelectorAll(`.portfolio-card`);
    const p_card_active = document.querySelectorAll(`.portfolio-card--${id}`);

    p_button.forEach((button) => button.classList.remove("active"));
    e.target.classList.add("active");

    p_card.forEach((card) => card.classList.add("portfolio-card-not-active"));

    p_card_active.forEach((card) =>
      card.classList.remove("portfolio-card-not-active")
    );
  };

  return (
    <button
      data-button-id={id}
      className="button portfolio-button"
      onClick={(e) => hideCards(e)}
    >
      {text}
    </button>
  );
};

export default Button;
