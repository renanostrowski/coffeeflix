import React from 'react';

import HeaderCoffee from './components/HeaderCoffee';
import LogoCoffee from './components/LogoCoffee';
import ButtonCoffee from './components/ButtonCoffee';
import FooterCoffee from './components/FooterCoffee';
import LogoFooterCoffee from './components/LogoFooterCoffee';

function App() {
  return (
    <>
      <HeaderCoffee>
        <LogoCoffee />
        <ButtonCoffee>Novo Vídeo</ButtonCoffee>
      </HeaderCoffee>

      <FooterCoffee>
        <p>
          Site feito na: 
        </p>
        <LogoFooterCoffee />
      </FooterCoffee>
    </>
  );
}

export default App;
