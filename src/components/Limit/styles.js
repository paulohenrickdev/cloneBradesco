import styled from 'styled-components/native';

export const Container = styled.View`
  
`;

export const LimitText = styled.Text`
  padding: 16px 16px 0 16px;
  font-size: 16px;
  font-weight: bold;
  color: #6D6E71;
  margin-right: 30px;
`;

export const LimitHeader = styled.View`
  padding: 16px;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
`;

export const ValueOne = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: #6D6E71;
`;

export const ValueTwo = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: #6D6E71;
`;

export const ContainerColor = styled.View`
  margin-left: 16px;
`;

export const ContainerAll = styled.View`
  background: #DEDEDE;
  height: 10px;
  width: 340px;
  border-radius: 16px;
`;

export const ContainerLimit = styled.View`
  background: #B2207B;
  height: 10px;
  width: 180px;
  border-radius: 16px;

`;

export const ContainerLimitsCard = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ScrollCards = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
}))