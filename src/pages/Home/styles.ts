import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.View`
  background: ${colors.silver};
  flex: 1;
  padding-top: ${`${statusBarHeight}px`};
`;

export const Container = styled.View``;

export const CustomText = styled.Text`
  font-family: gilroy_light;
`;
