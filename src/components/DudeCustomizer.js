import React, { useState } from 'react';
import Dude from './Dude';
import { dudeColors as colors } from '../styles/colors';
import useCustomizer from '../utils/useCustomizer';

function DudeCustomizer() {
  const [random, change] = useCustomizer(colors);

  return (
    <div className="charContainer">
      <p className="charName">Dude</p>
      <Dude
        primaryColor={random.primaryColor}
        secondaryColor={random.secondaryColor}
      />
      <button onClick={change} className="button">
        Customize
      </button>
    </div>
  );
}

export default DudeCustomizer;