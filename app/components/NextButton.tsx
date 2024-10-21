import React from "react";
type NextButtonProps = {
  onClickNextButton: () => void;
};
const NextButton = ({ onClickNextButton }: NextButtonProps) => {
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={onClickNextButton}
        aria-label="go to next product"
        className="bg-paleOrange p-1 px-3 text-xs hover:bg-customOrange md:text-base"
      >
        Next Product
      </button>
    </div>
  );
};

export default NextButton;
