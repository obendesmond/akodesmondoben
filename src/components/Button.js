import React from "react";

export default function Button({ text }) {
  return (
    <button className="py-3 px-5 font-bold text-white border-2 border-myYellow bg-myGreen rounded-full hover:text-black hover:bg-myYellow hover:border-myGreen">
      {text}
    </button>
  );
}
