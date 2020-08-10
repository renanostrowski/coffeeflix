import React from 'react';

import react2 from './assets/img/react2.png'

import ButtonCoffee from './components/ButtonCoffee';
import FooterCoffee from './components/FooterCoffee';
import {HeaderCoffee, Wrapper} from './components/HeaderCoffee';
import LinkCoffee from './components/LinkCoffee';
import LogoCoffee from './components/LogoCoffee';
import LogoFooterCoffee from './components/LogoFooterCoffee';
import TagCoffee from './components/TagCoffee';
import {BannerCoffee, Text} from './components/BannerCoffee';
import TitleCoffee from './components/TitleCoffee';
import DescriptionCoffee from './components/DescriptionCoffee';
import marcobruno from './assets/img/marco-bruno.png';
import ThumbCoffee from './components/ThumbCoffee';

function App() {
  return (
    <>
    <HeaderCoffee>
      <Wrapper>
        <LogoCoffee />
        <ButtonCoffee>Novo Vídeo</ButtonCoffee>
      </Wrapper>
    </HeaderCoffee>
    
      <BannerCoffee>
        <Text>
          <TagCoffee>FrontEnd</TagCoffee>
          <TitleCoffee>SEO com React</TitleCoffee>
          <DescriptionCoffee>
            Eu to aqui pra nesse vídeo dizer que 
          </DescriptionCoffee>
        </Text>
        <ThumbCoffee 
        src={react2} 
        alt='Marco Bruno React'
        avatar={marcobruno}
        channelname="MarcoBruno"
        />  
      </BannerCoffee>
      
      <FooterCoffee>
        <LogoCoffee />
        <p>
          Site feito na: <LinkCoffee href='https://www.alura.com.br'><LogoFooterCoffee /></LinkCoffee> 
        </p>
      </FooterCoffee>
    </>
  );
}

export default App;
