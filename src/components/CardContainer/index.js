import React from 'react';

import Master from '../../assets/master.png'

import { Container, HeaderCard, Bandeira, Type, NumberCard, CardFooter, Name, Validate } from './styles';

const CardContainer = ({ type, number, name, validate }) => {
  return (
    <Container
      colors={(type === 'Gold') 
        && ['#F2E466', '#CC9209'] 
        || (type === 'Black') && ['#0D0D0D', '#333']
      }
    >
      <HeaderCard>
        <Bandeira source={Master} resizeMode="contain" />
        <Type>
          {type}
        </Type>
      </HeaderCard>

      <NumberCard>
        {number}
      </NumberCard>
      <CardFooter>
        <Name>
          {name}
        </Name>

        <Validate>
          {validate}
        </Validate>
      </CardFooter>
      
    </Container>
  );
}

export default CardContainer;