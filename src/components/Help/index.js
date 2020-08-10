import React from 'react';

import { Container } from './styles';

import HelpContainer from '../HelpContainer';

const Help = () => {
  return(
    <Container>
      <HelpContainer
        help="Precisa de Ajuda ?" 
        icon="calendar-check-o" 
        message="Prorrogue seus financiamentos" 
        footer="Solicitar"
      />

      <HelpContainer
        help="Saúde Financeira" 
        icon="bar-chart-o" 
        message="Prorrogue seus financiamentos" 
      />

      <HelpContainer
        help="Simule agora" 
        icon="car" 
        message="Alugue um carro agora pelo app" 
      />
    </Container>
  );
}

export default Help;