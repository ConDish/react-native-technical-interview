import { styled } from '../../theme';
import FastImage from 'react-native-fast-image';

export const FlatContainer = styled.View`
  flex: 1;
  padding-horizontal: 20px;
  margin-top: 10px;
`;

export const CardMainContainer = styled.TouchableOpacity`
  border-radius: ${(props) => props.theme.borderRadius.main}px;
  width: 100%;
  margin-vertical: 10px;
  height: 70px;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  flex-direction: row;
  shadow-color: ${(props) => props.theme.colors.shadowColorInput};
  shadow-offset: 0px 3px;
  shadow-opacity: 0.2;
  elevation: 2;
`;

export const CardImage = styled(FastImage)`
  width: 50px;
  height: 50px;
`;

export const CardTitle = styled.Text`
  font-size: ${(props) => props.theme.fontSize.h3}px;
  color: ${(props) => props.theme.colors.textColorTitle};
`;

export const CardSubTitle = styled.Text`
  font-size: ${(props) => props.theme.fontSize.h6}px;
  color: ${(props) => props.theme.colors.labelColor};
`;

export const CardRightWrapper = styled.View`
  flex: 2;
  justify-content: center;
`;

export const CardLeftWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
