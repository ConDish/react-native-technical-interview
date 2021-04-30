import { styled } from '../../theme';
import CheckBox from '@react-native-community/checkbox';

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
`;

export const ButtonsWrapper = styled.View`
  height: 30px;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

export const ButtonLanguage = styled.TouchableOpacity`
  width: 90px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const TextButtonLanguage = styled.Text`
  color: ${(props) => props.theme.colors.backgroundLogin};
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 20px;
`;

export const ButtonView = styled.View`
  width: 100%;
`;

export const ScrollViewContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
  },
}))`
  background-color: #fff;
`;

export const DropDown = styled.Picker``;

export const DropWrapper = styled.View`
  width: 100%;
`;

export const DropView = styled.View`
  border-radius: ${(props) => props.theme.borderRadius.input}px;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.borderColorInput};
  margin-vertical: 10px;
`;

export const DropLabel = styled.Text`
  font-size: ${(props) => props.theme.fontSize.h5}px;
  color: ${(props) => props.theme.colors.labelColor};
  align-self: flex-start;
`;

export const TermView = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TermLabel = styled.Text``;

export const TermCheck = styled(CheckBox)``;
