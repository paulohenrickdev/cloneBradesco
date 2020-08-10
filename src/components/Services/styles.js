import styled from 'styled-components/native';

export const Container = styled.View`
  background: #FFFFFF;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 140px;
  width: 100%;
  margin-bottom: 30px;
`;

export const ContainerScroll = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
}))``;
