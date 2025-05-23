import React from 'react';
import ButtonComp from '../common/ButtonComp';
import CardComponent from './CardComponent';
import { datas } from '../../utils/data';

const GRidComponent = () => {  
  return (
    <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-1">
      {datas.map((data, index) => (
        <CardComponent image={data.image} title={data.title} text={data.text} isActive={data.isActive} key={index}/>
      ))}
    </section>
  );
};

export default GRidComponent;
