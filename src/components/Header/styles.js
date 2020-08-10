import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';


export const Container = styled(LinearGradient)`
  height: 150px;
`;

export const ContainerRow = styled.View`
  align-items: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 14px;
  margin-top: 20px;
`;

export const ContainerSearch = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  background: #F8F8F8;
  width: 250px;
  height: 40px;
  border-radius: 50px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const Talk = styled.Text`
  font-size: 12px;
  color: #DADADA;
  margin-right: 70px;
`;

export const Bold = styled.Text`
  font-weight: bold;
  color: #CC092F;
`;

export const Divider = styled.View`
  width: 2px;
  height: 13px;
  background: #CC092F;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  padding: 14px;
  margin-left: 12px;
`;