import React, { Component } from 'react';
import Owlet from './Owlet';
import { owletColors as colors } from '../styles/colors';
import useCustomizer from '../utils/useCustomizer';

function OwletCustomizer() {
  const [random, change] = useCustomizer(colors);
  
  return (
    <div className="charContainer">
      <p className="charName">Owlet</p>
      <Owlet
        primaryColor={random.primaryColor}
        secondaryColor={random.secondaryColor}
      />
      <button onClick={change} className="button">
        Customize
      </button>
    </div>
  );
}

export default OwletCustomizer;