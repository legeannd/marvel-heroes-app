import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.View`
  background: ${colors.black};
  flex: 1;
  padding-top: ${`${statusBarHeight}px`};
`;

export const Container = styled.View`
  padding: 0 24px;
`;

export const HeroHeader = styled.View`
  flex-direction: row;
  max-height: 64px;
  justify-content: space-between;
  align-content: center;

  padding: 20px 24px;
`;

export const BackButton = styled.TouchableOpacity``;

export const HeroBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;
