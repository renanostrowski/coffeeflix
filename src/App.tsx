import React from 'react';

import ButtonCoffee from './components/ButtonCoffee';
import FooterCoffee from './components/FooterCoffee';
import HeaderCoffee from './components/HeaderCoffee';
import LinkCoffee from './components/LinkCoffee';
import LogoCoffee from './components/LogoCoffee';
import LogoFooterCoffee from './components/LogoFooterCoffee';
import TagCoffee from './components/TagCoffee';
import BannerCoffee from './components/BannerCoffee';
import TitleCoffee from './components/TitleCoffee';
import DescriptionCoffee from './components/DescriptionCoffee';

function App() {
  return (
    <>
      <HeaderCoffee>
        <LogoCoffee />
        <ButtonCoffee>Novo Vídeo</ButtonCoffee>
      </HeaderCoffee>

      <BannerCoffee>
        <TagCoffee>FrontEnd</TagCoffee>
        <TitleCoffee>SEO com React</TitleCoffee>
        <DescriptionCoffee>
        Eu to aqui pra nesse vídeo dizer que 
        a gente vai aprender a começar uma app 
        inspirada no desenho Pokémon com Nextjs e React.
        </DescriptionCoffee>
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
