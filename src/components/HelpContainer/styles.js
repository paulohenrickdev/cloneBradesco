import styled from 'styled-components/native';

export const Container = styled.View`
  background: #FFFFFF;
  padding: 16px;
  height: 150px;
  width: 220px;
  margin: 15px;
`;

export const Help = styled.Text`
  font-size: 12px;
  color: #6D6E71;
`;

export const ContentContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
`;

export const Message = styled.Text`
  font-size: 16px;
  color: #6D6E71;
  font-weight: bold;
  max-width: 128px;
`;

export const Footer = styled.Text`
  text-align: right;
  margin: 15px 5px 0 0;  
  color: #CC092F;
  font-weight: 500;
`;