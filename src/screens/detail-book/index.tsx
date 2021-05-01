import React from 'react';
import { Text, View } from 'react-native';
import GradientButton from '../../components/gradient-button';
import MainContainer from '../../containers/main-container';
import I18n from '../../I18n';
import { BookData } from '../../redux/book/initial-state';
import {
  CardAvailableHeader,
  CardHeader,
  CardLeftWrapper,
  CardMainContainer,
  CardRightWrapper,
  CardSubTitleHeader,
  CardTitleHeader,
  Container,
  CardBody,
  CardImageHeader,
  ButtonWishList,
  LabelButtonWishList,
  ScrollViewContainer,
  CardComments,
  CardImageComments,
  CardTitleComments,
  CardSubtitleComments,
  CardContainerComments,
} from './style';

function DetailBookScreen({ route }) {
  const book: BookData = route.params.book;
  console.log(book);
  return (
    <MainContainer title={I18n.t('book_detail').toUpperCase()}>
      <ScrollViewContainer>
        <Container>
          <CardMainContainer>
            <CardHeader>
              <CardLeftWrapper>
                <CardImageHeader
                  source={
                    book.image_url
                      ? { uri: book.image_url }
                      : require('../../../assets/General/default_book.png')
                  }
                />
              </CardLeftWrapper>
              <CardRightWrapper>
                <CardTitleHeader>{book.title}</CardTitleHeader>
                <CardAvailableHeader>Available</CardAvailableHeader>
                <CardSubTitleHeader>{book.publisher}</CardSubTitleHeader>
                <CardSubTitleHeader>{book.year}</CardSubTitleHeader>
                <CardSubTitleHeader>{book.genre}</CardSubTitleHeader>
              </CardRightWrapper>
            </CardHeader>
            <CardBody>
              <ButtonWishList>
                <LabelButtonWishList>
                  {I18n.t('button_wishlist').toUpperCase()}
                </LabelButtonWishList>
              </ButtonWishList>
              <GradientButton
                buttonText={I18n.t('button_rent').toUpperCase()}
                submit={() => console.log('Into here')}
              />
            </CardBody>
          </CardMainContainer>
          {book.comments && (
            <CardComments>
              {book.comments.map((item, index) => (
                <CardContainerComments key={index}>
                  <CardLeftWrapper>
                    <CardImageComments
                      source={
                        index === 0
                          ? require('../../../assets/General/img_user1.png')
                          : require('../../../assets/General/img_user2.png')
                      }
                    />
                  </CardLeftWrapper>
                  <CardRightWrapper flexFlag={true}>
                    <CardTitleComments>{item.name}</CardTitleComments>
                    <CardSubtitleComments>{item.comment}</CardSubtitleComments>
                  </CardRightWrapper>
                </CardContainerComments>
              ))}
            </CardComments>
          )}
        </Container>
      </ScrollViewContainer>
    </MainContainer>
  );
}

export default DetailBookScreen;
