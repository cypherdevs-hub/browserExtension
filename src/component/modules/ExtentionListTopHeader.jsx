/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ButtonComp from '../common/ButtonComp';

const ExtentionListTopHeader = () => {
  const [currentBtn, setCurrentBtn] = useState('All')
  
  const handleBtnClick = (state) => {
    setCurrentBtn(state)
  }
  return (
    <section className="flex items-center justify-between">
      <h2 className="text-base lg:text-2xl text-[#09153e] font-bold capitalize">
        Extension list
      </h2>
      <div className="flex items-center justify-end gap-2.5">
        <ButtonComp text="All" currentBtn={currentBtn} handleBtnClick={handleBtnClick} />
        <ButtonComp text="Active" currentBtn={currentBtn} handleBtnClick={handleBtnClick}/>
        <ButtonComp text="Inactive" currentBtn={currentBtn} handleBtnClick={handleBtnClick}/>
      </div>
    </section>
  );
};

export default ExtentionListTopHeader;
