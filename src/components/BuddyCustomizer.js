import React, { Component } from 'react';
import Buddy from './Buddy';
import { buddyColors as colors } from '../styles/colors';
import useCustomizer from '../utils/useCustomizer';

function BuddyCustomizer() {
  const [random, change] = useCustomizer(colors);
  
  return (
    <div className="charContainer">
      <p className="charName">Buddy</p>
      <Buddy
        primaryColor={random.primaryColor}
        secondaryColor={random.secondaryColor}
      />
      <button onClick={change} className="button">
        Customize
      </button>
    </div>
  );
}

export default BuddyCustomizer;