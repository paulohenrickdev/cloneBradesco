import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient)`
  height: 200px;
  width: 350px;
  border-radius: 30px;
  margin-right: 30px;
`;

export const HeaderCard = styled.View`
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Bandeira = styled.Image`
  height: 60px;
  width: 60px;
  margin-left: 30px;
`;

export const Type = styled.Text`
  padding: 16px;
  font-size: 16px;
  font-weight: bold;
  color: #FFFFFF;
  margin-right: 30px;
`;

export const NumberCard = styled.Text`
  font-size: 20px;
  color: #F8F8F8;
  text-align: center;
  font-weight: bold;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #F8F8F8;
  text-align: center;
  font-weight: bold;
  margin-left: 30px;
`;

export const Validate = styled.Text`
  font-size: 18px;
  color: #F8F8F8;
  text-align: center;
  font-weight: bold;
  margin-right: 45px;
`;
