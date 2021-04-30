import React, { useContext, useState } from 'react';
import { Controller } from 'react-hook-form';

import { ThemeContext } from '../../theme';

import {
  Container,
  LabelView,
  InputView,
  ErrorText,
  ContainerLabel,
  TextInputContent,
} from './style';

type InputTextProps = {
  labelText: string;

  errors: any;

  control: any;

  placeholderText: string;

  placeholderTextColor?: string;

  autoCapitalize: 'none' | 'sentences' | 'words' | 'characters';

  name: string;

  defaultValue: string;

  iconSize?: number;

  /* custom height */
  customHeight?: number;

  /* */
  keyboardType:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | 'visible-password';

  /* maxlength */
  maxLength?: number;
};

function InputText(props: InputTextProps): JSX.Element {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <ContainerLabel>
        <LabelView>{props.labelText}</LabelView>
      </ContainerLabel>

      <InputView
        customHeight={props.customHeight}
        error={
          props.errors && props.errors[props.name] !== undefined ? true : false
        }>
        <Controller
          control={props.control}
          render={({ field: { onChange, value } }) => (
            <TextInputContent
              placeholder={props.placeholderText}
              placeholderTextColor={
                theme.colors.placeholderTextColor || props.placeholderTextColor
              }
              autoCapitalize={props.autoCapitalize}
              underlineColorAndroid="transparent"
              onChangeText={(text: string) => onChange(text)}
              value={value}
              keyboardType={props.keyboardType}
              textAlignVertical="top"
              maxLength={props.maxLength}
            />
          )}
          name={props.name}
          rules={{ required: true }}
          defaultValue={props.defaultValue}
        />
      </InputView>
      {props.errors && props.errors[props.name] !== undefined ? (
        <ErrorText>{props.errors[props.name].message}</ErrorText>
      ) : null}
    </Container>
  );
}
InputText.defaultProps = {
  placeholderText: '',
  autoCapitalize: 'sentences',
  defaultValue: '',
  keyboardType: 'default',
};

export default InputText;
