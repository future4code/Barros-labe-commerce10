import React from 'react';
import { FeatureContainer, FeatureButton } from './Style';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Estrela da morte</h1>
      <p>Destruição de planetas apenas com um clique.</p>
      <FeatureButton><b>Comprar Agora!</b></FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;