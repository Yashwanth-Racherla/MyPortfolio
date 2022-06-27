import React from "react";

const Freelance = ({ scroll }) => {
  return (
    <div className="section freelance-section">
      <div className="container text-center relative py-10">
        <h3 className="font-black text-3xl sm:text-4xl md:text-5xl">
          I am <span className="text-[#a0f669]">available</span> for freelancing
        </h3>
        <p className="my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          nihil excepturi dicta iusto facere l
        </p>
        <button className="button" onClick={() => scroll()}>
          HIRE ME
        </button>
      </div>
    </div>
  );
};

export default Freelance;
