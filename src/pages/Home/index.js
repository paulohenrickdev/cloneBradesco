import React from 'react';

import { ScrollView } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Help from '../../components/Help';
import Services from '../../components/Services';
import Card from '../../components/Card';
import Limit from '../../components/Limit';

// import { Container } from './styles';

const Home = () => {
  return(
    <>
      <ScrollView>
        <Header />
        <Balance />
        <Help />
        <Services />
        <Card />
        <Limit />
      </ScrollView>
    </>
  );
}

export default Home;