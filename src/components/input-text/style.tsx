import { styled } from '../../theme';

type InputViewProps = {
  /** si tiene error es true y pondra el borde color rojo*/
  error: boolean;

  /** custom height */
  customHeight?: number;

  isEmpty?: boolean;
};

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding-vertical: 5px;
`;

export const ContainerLabel = styled.View`
  flex-direction: row;
  align-self: flex-start;
`;

export const InputView = styled.View<InputViewProps>`
  height: ${(props) => props.customHeight || props.theme.sizes.heightInput}px;
  margin-vertical: 10px;
  border-radius: ${(props) => props.theme.borderRadius.input}px;
  justify-content: center;
  flex-direction: row;
  border-width: 1px;
  border-color: ${(props) =>
    !props.error
      ? props.theme.colors.borderColorInput
      : props.theme.colors.redText};
  background-color: ${(props) =>
    props.isEmpty
      ? props.theme.colors.bgColorInput
      : props.theme.colors.backgroundColor};
  padding-vertical: 11px;
  shadow-color: ${(props) =>
    props.isEmpty ? 'transparent' : props.theme.colors.shadowColorInput};
  shadow-offset: ${(props) => (props.isEmpty ? '0px 0px' : '0px 8px')};
  shadow-opacity: 0.47;
  shadow-radius: 4px;
  elevation: ${(props) => (props.isEmpty ? '0' : '6')};
`;

export const LabelView = styled.Text`
  font-size: ${(props) => props.theme.fontSize.h5}px;
  color: ${(props) => props.theme.colors.labelColor};
  align-self: flex-start;
`;

export const IconView = styled.TouchableOpacity`
  flex: 2;
  flex-direction: row;
  justify-content: flex-end;
  align-self: center;
  margin-right: 12px;
`;
export const ErrorText = styled.Text`
  color: red;
  align-self: flex-start;
  font-size: ${(props) => props.theme.fontSize.h5}px;
`;

export const TextInputContent = styled.TextInput`
  border-top-right-radius: ${(props) => props.theme.borderRadius.input}px;
  border-bottom-right-radius: ${(props) => props.theme.borderRadius.input}px;
  padding-left: 20px;
  color: #000;
  flex: 1;
  padding-vertical: 0;
`;

export const TextTooltip = styled.Text`
  color: ${(props) => props.theme.colors.backgroundColor};
`;

InputView.defaultProps = {
  error: false,
  isEmpty: true,
};
