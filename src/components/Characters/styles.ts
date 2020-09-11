import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View``;

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;
export const SectionName = styled.Text`
  font-family: gilroy_extrabold;
  font-size: 18px;
  color: ${colors.red};
`;
export const AllCharacters = styled.Text`
  font-family: gilroy_light;
  font-size: 14px;
  color: ${colors.grey};
`;

export const CharacterRow = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex-direction: row;
  width: 100%;
  margin-bottom: 40px;
`;

export const CharacterContainer = styled.TouchableOpacity`
  width: 140px;
  height: 230px;
  margin-right: 16px;
`;

export const CharacterImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const CharacterInfo = styled.View`
  position: absolute;
  bottom: 0;
  margin: 0 0 12px 12px;
`;

export const CharacterCivilName = styled.Text`
  font-family: gilroy_light;
  font-size: 12px;
  color: ${colors.white};
  margin-bottom: 2px;
`;

export const CharacterName = styled.Text`
  font-family: gilroy_extrabold;
  font-size: 20px;
  color: ${colors.white};
  max-width: 90px;
`;
