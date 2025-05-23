/* eslint-disable no-unused-vars */
import React from 'react';
import ButtonComp from '../common/ButtonComp';

const CardComponent = ({ image, title, text, isActive}) => {
  return (
    <article className="p-3 border border-gray-300 rounded-2xl bg-white w-full md:w-[450px] max-w-[450px]   h-[200px] flex flex-col justify-between">
      <div className="w-full flex items-start justify-start gap-2.5">
        <div>
          <img src={image} alt={title} />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-base text-[#09153e] font-semibold">{title}</h3>
          <p className="text-[#545969] text-xs font-normal w-[250px] max-w-[300px]">{text}</p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <ButtonComp text="Remove" />
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer"  checked={isActive}/>
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#c7221a] dark:peer-checked:bg-[#c7221a]"></div>
        </label>
      </div>
    </article>
  );
};

export default CardComponent;
