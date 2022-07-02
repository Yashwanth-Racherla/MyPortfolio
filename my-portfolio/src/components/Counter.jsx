import React from "react";
import { useEffect } from "react";

const Counter = () => {
  useEffect(() => {
    const counterSection = document.querySelector(".counter-section");

    const countObserver = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;

        const counterNum = document.querySelectorAll(".counter-numbers");

        counterNum.forEach((counterNum) => {
          const updateCounterNum = () => {
            const initialNum = parseInt(counterNum.innerText);
            const targetNum = parseInt(counterNum.dataset.number);

            const speed = 200;
            const incrementNum = targetNum / speed;

            if (initialNum < targetNum) {
              counterNum.innerText = `${initialNum + incrementNum}+`;
              setTimeout(updateCounterNum, 10);
            }
          };
          updateCounterNum();
        });

        observer.unobserve(counterSection);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    countObserver.observe(counterSection);
  }, []);
  return (
    <div className="section counter-section">
      <div className="container text-white grid grid-cols-2 lg:grid-cols-4 gap-10 lg:py-6">
        <div className="text-center">
          <span className="counter-numbers" data-number="4000">
            0
          </span>
          <p className="mt-4">Projects Completed</p>
        </div>
        <div className="text-center">
          <span className="counter-numbers" data-number="2000">
            0
          </span>
          <p className="mt-4">Happy Clients</p>
        </div>
        <div className="text-center">
          <span className="counter-numbers" data-number="5000">
            0
          </span>
          <p className="mt-4">Cups of Coffee</p>
        </div>
        <div className="text-center">
          <span className="counter-numbers" data-number="1000">
            0
          </span>
          <p className="mt-4">Real Professionals</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
