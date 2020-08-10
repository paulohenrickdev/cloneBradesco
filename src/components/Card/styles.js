import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 18px;
`;

export const HeaderCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const MyCards = styled.Text`
  font-size: 14px;
  color: #6D6E71;
  font-weight: bold;
`;

export const ScrollCards = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
}))``;

