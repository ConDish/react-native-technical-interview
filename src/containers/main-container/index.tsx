import React, { useState } from 'react';
import FastImage from 'react-native-fast-image';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';
import I18n from '../../I18n';
import {
  Container,
  Header,
  Body,
  Title,
  Wrapper,
  TouchIcon,
  Icon,
  SearchWrapper,
  InputSearch,
} from './style';

type MainContainerProps = {
  title?: string;

  children: JSX.Element | JSX.Element[];

  leftIcon?: boolean;
  handleSearch?: (value: string) => void;

  rightIcon?: boolean;
};

function MainContainer(props: MainContainerProps) {
  const [searchFlag, setSearchFlag] = useState(false);
  return (
    <Container>
      <Header
        source={require('../../../assets/General/bc_nav_bar.png')}
        resizeMode={FastImage.resizeMode.cover}>
        {!searchFlag ? (
          <>
            <Wrapper flex={0.5}>
              <TouchIcon>
                {props.leftIcon ? (
                  <Icon
                    source={require('../../../assets/NavigationBar/ic_notifications.png')}
                  />
                ) : (
                  <Icon
                    source={require('../../../assets/NavigationBar/ic_back.png')}
                  />
                )}
              </TouchIcon>
            </Wrapper>
            <Wrapper flex={2}>
              <Title>{props.title}</Title>
            </Wrapper>
            {props.rightIcon && (
              <Wrapper flex={0.5}>
                <TouchIcon onPress={() => setSearchFlag(true)}>
                  <Icon
                    source={require('../../../assets/NavigationBar/ic_search.png')}
                  />
                </TouchIcon>
              </Wrapper>
            )}
          </>
        ) : (
          <SearchWrapper
            as={Animatable.View}
            animation="slideInRight"
            duration={1000}>
            <Icon
              source={require('../../../assets/NavigationBar/ic_search.png')}
            />
            <InputSearch
              placeholder={I18n.t('search_p')}
              placeholderTextColor="white"
              onChangeText={(value) =>
                props.handleSearch && props.handleSearch(value)
              }
            />
            <TouchIcon onPress={() => setSearchFlag(false)}>
              <IconAntDesign name="close" size={20} color="white" />
            </TouchIcon>
          </SearchWrapper>
        )}
      </Header>
      <Body>{props.children}</Body>
    </Container>
  );
}

export default MainContainer;
