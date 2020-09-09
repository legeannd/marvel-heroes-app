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

export const Container = styled.View`
  padding: 0 24px;
`;

export const Subtitle = styled.Text`
  font-family: gilroy_light;
  font-size: 14px;
  color: ${colors.grey};
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-family: gilroy_extrabold;
  font-size: 32px;
  color: ${colors.dark};
`;
