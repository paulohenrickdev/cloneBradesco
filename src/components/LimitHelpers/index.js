import React from 'react';

import { MaterialIcons } from '@expo/vector-icons'; 

import { Container, ContentContainer, Label } from './styles';

const LimitHelpers = ({ icon, label }) => {
  return (
    <Container>
      <ContentContainer>
        <MaterialIcons name={icon} color="#CC092F" size={20} />
        <Label>
          {label}
        </Label>
      </ContentContainer>
    </Container>
  );
}

export default LimitHelpers;