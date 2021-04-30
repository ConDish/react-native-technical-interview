import { styled } from '../../theme';
import FastImage from 'react-native-fast-image';

export const FlatContainer = styled.View`
  flex: 1;
  padding-horizontal: 20px;
  margin-top: 10px;
`;

export const CardMainContainer = styled.View`
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
  font-size: ${(props) => props.theme.fontSize.h2}px;
  font-weight: bold;
`;

export const CardSubTitle = styled.Text`
  font-size: ${(props) => props.theme.fontSize.h6}px;
`;

export const CardRightWrapper = styled.View`
  flex: 1;
`;

export const CardLeftWrapper = styled.View`
  flex: 1;
`;
