import React from 'react';

import { Entypo } from '@expo/vector-icons';

import CardContainer from '../CardContainer';

import { Container, HeaderCard, MyCards, ScrollCards } from './styles';

const Card = () => {
  return (
    <Container>
      <HeaderCard>
        <MyCards>
          Meus cartões
        </MyCards>

        <Entypo name="dots-three-horizontal" size={24} color="#B4B4B4" />
      </HeaderCard>

      <ScrollCards>
        <CardContainer 
          type="Gold" 
          number="1234 1234 1234 1234" 
          name="Paulo Henrick" 
          validate="10/50" 
        />

        <CardContainer 
          type="Black" 
          number="1234 1234 1234 1234" 
          name="Paulo Henrick" 
          validate="10/50" 
        />
      </ScrollCards>
    </Container>
  );
}

export default Card;