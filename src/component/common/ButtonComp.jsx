import React from 'react';

const ButtonComp = ({ text, currentBtn, handleBtnClick }) => {
  return (
    <button type='button' onClick={() => handleBtnClick(text)} className={`w-auto py-1.5 px-3.5 border border-gray-400 ${currentBtn == 'All' && text == 'All' ? 'bg-[red] text-white' : currentBtn == 'Active' && text == 'Active' ? 'bg-[red] text-white' : currentBtn == 'Inactive' && text == 'Inactive' ? 'bg-[red] text-white' : 'bg-[white] text-[black]'}  rounded-3xl`}>
      {text}
    </button>
  );
};

export default ButtonComp;
