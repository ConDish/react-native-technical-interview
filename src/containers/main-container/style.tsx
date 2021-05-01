import FastImage from 'react-native-fast-image';
import { styled } from '../../theme';

type WrapperProps = {
  flex?: number;
};

export const Container = styled.View`
  flex: 1;
`;

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled(FastImage)`
  height: 100px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  align-items: center;
  flex-direction: row;
`;

export const Body = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.backgroundColor};
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.backgroundColor};
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSize.h3}px;
`;

export const Wrapper = styled.View<WrapperProps>`
  flex: ${(props) => props.flex};
  justify-content: center;
  align-items: center;
`;

export const TouchIcon = styled.TouchableOpacity``;

export const Icon = styled(FastImage)`
  height: 20px;
  width: 20px;
`;

export const SearchWrapper = styled.View`
  width: 100%;
  height: 50px;
  background-color: 'rgba(0,0,0,.4)';
  padding-horizontal: 10px;
  flex-direction: row;
  align-items: center;
`;

export const InputSearch = styled.TextInput`
  flex: 1;
  color: ${(props) => props.theme.colors.backgroundColor};
`;
