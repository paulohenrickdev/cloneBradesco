import React from 'react';

import { FontAwesome } from '@expo/vector-icons'; 

import { Container, Help, ContentContainer, Message, Footer } from './styles';

const HelpContainer = ({ help, icon, message, footer }) => {
  return(
    <Container>
      <Help>
        {help}
      </Help>
      <ContentContainer>
        <FontAwesome name={icon} color='#CC092F' size={40} />
        <Message>
          {message}
        </Message>
      </ContentContainer>
      { footer && (
        <Footer>
          {footer}
        </Footer>
      ) }
    </Container>
  )
}

export default HelpContainer;