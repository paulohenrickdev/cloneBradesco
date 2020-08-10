import React from 'react';
import ServicesContainer from '../ServicesContainer';

import { Container, ContainerScroll } from './styles';

import CdBarras from '../../assets/cdBarras.png';
import Docs from '../../assets/docs.png';
import Lucro from '../../assets/lucros.png';
import Out from '../../assets/transferir.png';

const Services = () => {
  return(
    <Container>
      <ContainerScroll>
        <ServicesContainer picture={Out} label="Transferir" />
        <ServicesContainer picture={CdBarras} label="Pagamentos" />
        <ServicesContainer picture={Docs} label="Extrato" />
        <ServicesContainer picture={Lucro} label="Investimentos" />
        <ServicesContainer picture={Out} label="Empréstimos" />
      </ContainerScroll>
    </Container>
  );
}

export default Services;