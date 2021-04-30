import LinearGradient from 'react-native-linear-gradient';

import { styled } from '../../theme';
type TextButtonProps = {
  /** Color de texto */
  textColor: string;
};

type ButtonProps = {
  /** altura de boton */
  height: number | undefined;
};

export const TextButton = styled.Text<TextButtonProps>`
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.theme.fontSize.textButton + 2}px;
  align-self: center;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  height: ${(props) =>
    props.height ? props.height : props.theme.sizes.heightButton}px;
  border-radius: ${(props) => props.theme.borderRadius.button}px;
  justify-content: center;
  margin-vertical: 10px;
  shadow-color: #6d6d6d;
  shadow-offset: 0 3px;
  shadow-opacity: 0.53;
  shadow-radius: 5px;
`;

export const DisabledView = styled.View`
  background-color: #ffffff80;
  flex: 1;
  border-radius: ${(props) => props.theme.borderRadius.button}px;
  justify-content: center;
`;

export const LinearGradientStyled = styled(LinearGradient)`
  flex: 1;
  border-radius: 10px;
  justify-content: center;
`;
