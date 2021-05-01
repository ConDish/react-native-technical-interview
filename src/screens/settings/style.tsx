import { styled } from '../../theme';

export const CardTitleUser = styled.Text`
  font-size: ${(props) => props.theme.fontSize.h4}px;
`;

export const CardUser = styled.View`
  border-radius: ${(props) => props.theme.borderRadius.main}px;
  width: 100%;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  shadow-color: ${(props) => props.theme.colors.shadowColorInput};
  shadow-offset: 0px 3px;
  shadow-opacity: 0.2;
  elevation: 2;
`;
