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

export const Container = styled.ScrollView`
  padding: 0 24px;
`;

export const HeroHeader = styled.View`
  flex-direction: row;
  max-height: 64px;

  padding: 20px 24px;
`;

export const BackButton = styled.TouchableOpacity``;

export const HeroBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const Info = styled.View`
  margin-top: 230px;
  max-width: 50%;
`;

export const Civil = styled.Text`
  font-family: gilroy_light;
  font-size: 16px;
  color: ${colors.white};
`;

export const Name = styled.Text`
  font-family: gilroy_extrabold;
  font-size: 40px;
  color: ${colors.white};
`;

export const AdditionalInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 48px;
  margin-bottom: 24px;
`;

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const InfoSection = styled.View`
  justify-content: space-between;
  height: 48px;
`;

export const InfoText = styled.Text`
  font-family: gilroy_light;
  font-size: 12px;
  color: ${colors.white};
`;

export const Resume = styled.Text`
  font-family: gilroy_light;
  font-size: 14px;
  color: ${colors.white};
  margin-bottom: 32px;
`;

export const AbilitiesSection = styled.View`
  margin-bottom: 32px;
`;

export const AbilityTitle = styled.Text`
  font-family: gilroy_extrabold;
  font-size: 18px;
  color: ${colors.white};
`;
export const AbilityValue = styled.View`
  flex-direction: row;
  align-items: center;
  padding-right: 24px;
  margin-top: 24px;
`;

export const AbilityName = styled.Text`
  font-family: gilroy_light;
  font-size: 12px;
  color: ${colors.white};
  width: 25%;
`;

export const TotalAbility = styled.View`
  flex-direction: row;
  width: auto;
`;
export const AbilityQuantity = styled.Text`
  color: ${colors.white};
  font-size: 10px;
  font-family: gilroy_extrabold;
  margin: 0 2px;
`;
