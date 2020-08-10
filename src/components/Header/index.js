import React from 'react';

import { MaterialCommunityIcons, EvilIcons, SimpleLineIcons, AntDesign } from '@expo/vector-icons'; 

import { Container, ContainerRow, ContainerSearch, Talk, Bold, Divider, Name } from './styles';

const Header = () => {
  return(
    <Container
      colors={['#B2207B', '#CC092F']}
    >
      <ContainerRow>
        <MaterialCommunityIcons name="qrcode-scan" size={24} color="#fff" />

        <ContainerSearch>
          <EvilIcons name="search" size={24} color="#B2207B" />
          <Talk>
            Fale com o <Bold>Paulo</Bold>
          </Talk>

          <Divider />

          <SimpleLineIcons name="microphone" size={22} color="#B2207B" />
        </ContainerSearch>

        <AntDesign name="message1" size={24} color="#fff" />
      </ContainerRow>

      <Name>Paulo Henrick F.C</Name>
    </Container>
  );
}

export default Header;