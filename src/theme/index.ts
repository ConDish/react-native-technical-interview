import { Dimensions } from 'react-native';
import baseStyled, {
  ReactNativeStyledInterface,
  ThemeContext,
  css,
} from 'styled-components/native';
const { width, height } = Dimensions.get('screen');

const colors = {
  backgroundColor: '#ffffff',
  placeholderTextColor: '#2D2D2D4D',
  backgroundLogin: '#23A3DA',
  borderColorInput: '#f1f2f3',
  bgColorMainCard: '#fafafa',
  bgColorInput: '#fafafa',
  lineColor: '#eeeeee',
  labelColor: '#2d2d2d80',
  textColorTitle: '#2d2d2de6',
  iconTitle: '#2D2D2D99',
  descriptionText: '#2d2d2db3',
  iconBlueColor: '#007EFF',
  shadowColorInput: '#A3A3A3',
  textColorSecondTitle: '#333333e6',
  secondLabelColor: '#33333399',
  textColor: '#333333',
  textColor2: '#2d2d2d',
  activeText: '#00C389',
  redText: '#FF3333',
  orangeIcon: '#EC620A',
  orangeText: '#EF812D',
  maxRedText: '#FF0000',
  maxBlueText: '#0083BF',
  maxGreenText: '#35af64',
  greenText: 'green',
  blueText: '#23A3DA',
  tabBarText: '#0080FE',
  minGraphic: '#017EFB',
  cuatrogGraphic: '#32C5FF',
  tresgGraphic: '#0E627C',
  smsGraphic: '#FA6400',
};

const fontSize = {
  icon: 36,
  iconInput: 15,
  h1: 22,
  h2: 18,
  h3: 16,
  h4: 14,
  h5: 12,
  h6: 10,
  bigTitle: 30,
  textButton: 14,
  cardTitle: 20,
};
const borderRadius = {
  button: 10,
  input: 4,
  main: 10,
};

const sizes = {
  heightButton: 44,
  heightInput: 44,
  screenWidth: width,
  screenHeight: height,
};

const theme = {
  colors,
  fontSize,
  borderRadius,
  sizes,
};

export type Theme = typeof theme;

// @ts-ignore
const styled = baseStyled as ReactNativeStyledInterface<Theme>;

export { ThemeContext, styled, theme as default, css };
