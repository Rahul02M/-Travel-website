import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        className={`${props.backgroundColor} text-black rounded-full px-8 py-1  hover:bg-[#8482ff] hover:text-white transition-all font-semibold`}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
