import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import {
  CardImage,
  CardLeftWrapper,
  CardMainContainer,
  FlatContainer,
  CardTitle,
  CardSubTitle,
  CardRightWrapper,
} from './style';
import MainContainer from '../../containers/main-container';
import I18n from '../../I18n';
import filter from 'lodash.filter';
import { useDispatch } from 'react-redux';
import { getBooks } from '../../redux/book';
import { useTypedSelector } from '../../hooks';
import { BookData } from '../../redux/book/initial-state';

type FlatItemBook = {
  item: BookData;
};

function HomeScree({ navigation }): JSX.Element {
  const dispatch = useDispatch();
  const books = useTypedSelector((state) => state.book.books);
  const [filterBooks, setFilterBooks] = useState(books);
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  useEffect(() => {
    setFilterBooks(books);
  }, [books]);

  const bookItem = ({ item }: FlatItemBook) => (
    <CardMainContainer
      onPress={() => navigation.navigate('DetailBook', { book: item })}>
      <CardLeftWrapper>
        <CardImage
          source={
            item.image_url
              ? { uri: item.image_url }
              : require('../../../assets/General/default_book.png')
          }
        />
      </CardLeftWrapper>
      <CardRightWrapper>
        <CardTitle>{item.title?.split('\n')}</CardTitle>
        <CardSubTitle>{item.author?.split('\n')}</CardSubTitle>
      </CardRightWrapper>
    </CardMainContainer>
  );
  const contains = ({ title }: BookData, query: string) => {
    if (title?.toLowerCase().includes(query)) {
      return true;
    }
    return false;
  };
  const handleSearch = (text: string) => {
    const formattedQuery = text.toLowerCase();
    const data = filter(books, (book: BookData) => {
      return contains(book, formattedQuery);
    });
    setFilterBooks(data);
  };
  return (
    <MainContainer
      title={I18n.t('home_title').toUpperCase()}
      leftIcon
      handleSearch={handleSearch}
      rightIcon>
      <FlatContainer>
        <FlatList
          data={filterBooks}
          renderItem={bookItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </FlatContainer>
    </MainContainer>
  );
}

export default HomeScree;
