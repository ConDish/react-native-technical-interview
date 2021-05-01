import { styled } from '../../theme';
import FastImage from 'react-native-fast-image';

type CardRightWrapperProps = {
  flexFlag?: boolean;
};

export const CardMainContainer = styled.View`
  border-radius: ${(props) => props.theme.borderRadius.main}px;
  width: 100%;
  height: 300px;
  margin-vertical: 10px;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  shadow-color: ${(props) => props.theme.colors.shadowColorInput};
  shadow-offset: 0px 3px;
  shadow-opacity: 0.2;
  elevation: 2;
`;

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 20px;
`;

export const CardHeader = styled.View`
  flex: 1;
  flex-direction: row;
`;
export const CardLeftWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CardRightWrapper = styled.View<CardRightWrapperProps>`
  flex: ${(props) => (props.flexFlag ? 2 : 1)};
  justify-content: center;
`;

export const CardImageHeader = styled(FastImage)`
  width: 100px;
  height: 100px;
`;

export const CardTitleHeader = styled.Text`
  color: ${(props) => props.theme.colors.textColor2};
  font-size: ${(props) => props.theme.fontSize.h2}px;
  font-weight: bold;
`;

export const CardAvailableHeader = styled.Text`
  color: ${(props) => props.theme.colors.maxGreenText};
  font-size: ${(props) => props.theme.fontSize.h4}px;
`;

export const CardSubTitleHeader = styled.Text`
  color: ${(props) => props.theme.colors.labelColor};
  font-size: ${(props) => props.theme.fontSize.h4}px;
`;

export const CardBody = styled.View`
  flex: 1;
  padding-horizontal: 30px;
  justify-content: center;
`;

export const ButtonWishList = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  border-color: ${(props) => props.theme.colors.maxBlueText};
  border-radius: ${(props) => props.theme.borderRadius.button}px;
  border-width: 1px;
  justify-content: center;
  align-items: center;
`;

export const LabelButtonWishList = styled.Text`
  color: ${(props) => props.theme.colors.maxBlueText};
`;

export const ScrollViewContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
  },
}))`
  background-color: #fff;
`;

export const CardComments = styled.View`
  border-radius: ${(props) => props.theme.borderRadius.main}px;
  width: 100%;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  shadow-color: ${(props) => props.theme.colors.shadowColorInput};
  shadow-offset: 0px 3px;
  shadow-opacity: 0.2;
  elevation: 2;
`;

export const CardContainerComments = styled.View`
  flex: 1;
  flex-direction: row;
  margin-vertical: 10px;
`;

export const CardImageComments = styled(FastImage)`
  width: 40px;
  height: 40px;
`;

export const CardTitleComments = styled.Text`
  font-size: ${(props) => props.theme.fontSize.h4}px;
`;

export const CardSubtitleComments = styled.Text`
  font-size: ${(props) => props.theme.fontSize.h5}px;
  color: ${(props) => props.theme.colors.labelColor};
`;
