import React from 'react';

import { Container, ContentContainer, Picture, Label } from './styles';

const ServicesContainer = ({ picture, label }) => {
  return (
    <Container>
      <Picture source={picture} resizeMode="contain" />
      <Label>
        {label}
      </Label>
    </Container>
  );
}

export default ServicesContainer;