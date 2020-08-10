import React from 'react';

import LimitHelpers from '../LimitHelpers';

import { Container, LimitText, LimitHeader, ValueOne, ValueTwo, ContainerColor, ContainerAll, ContainerLimit, ContainerLimitsCard } from './styles';

const Limit = () => {
  return(
    <Container>
      <LimitText>
        Limite
      </LimitText>
      <LimitHeader>
        <ValueOne>
          R$ 9.500,00
        </ValueOne>

        <ValueTwo>
          R$ 20.000,00
        </ValueTwo>
      </LimitHeader>

      <ContainerColor>
        <ContainerAll>
          <ContainerLimit>

          </ContainerLimit>
        </ContainerAll>
      </ContainerColor>

      <ContainerLimitsCard>
          <LimitHelpers icon="lock-outline" label="Pagar Fatura" />
          <LimitHelpers icon="credit-card" label="Cartão virtual" />
          <LimitHelpers icon="filter-list" label="Ajustar limite" />
      </ContainerLimitsCard>
      
    </Container>
  );
}

export default Limit;