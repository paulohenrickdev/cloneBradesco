import React, { useState } from 'react';

import { EvilIcons, Feather } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container, BalanceDist, BalanceContainer, ContentContainer, Rs, Value } from './styles';

const Balance = () => {
  const [isVisible, setIsVisible] = useState(true);

  function handleVisible() {
    setIsVisible(!isVisible);
  }

  return(
    <Container>
      <BalanceDist>Saldo disponível</BalanceDist>
      <BalanceContainer>
        <ContentContainer>
          <Rs>
            R$
          </Rs>
          <Value>
            {isVisible ? '1.150.350,21' : ''}
          </Value>
        </ContentContainer>
        <TouchableOpacity onPress={handleVisible}>
          {isVisible ? <EvilIcons name="eye" color='#A4A4A4' size={35} /> : <Feather name="eye-off" color='#A4A4A4' size={24} />}
        </TouchableOpacity>
      </BalanceContainer>
    </Container>
  );
}

export default Balance;