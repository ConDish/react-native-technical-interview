import React, { useState, useMemo, useContext, useEffect } from 'react';
import I18n from '../../I18n';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { login } from '../../redux/customer';
import { SpinnerStyled } from '../../containers/app-container/style';
import {
  SafeAreaContainer,
  ButtonsWrapper,
  ButtonLanguage,
  TextButtonLanguage,
  Container,
  ButtonView,
  ScrollViewContainer,
  DropDown,
  DropWrapper,
  DropLabel,
  DropView,
  TermCheck,
  TermView,
  TermLabel,
} from './style';
import { ThemeContext } from '../../theme';
import useYupValidationResolver from '../../utils/use-yup-validation-resolver';
import InputText from '../../components/input-text';
import GradientButton from '../../components/gradient-button';
import { changeLanguage } from '../../redux/app';
import { useTypedSelector } from '../../hooks';
import { selectAppPartLoading } from '../../redux/app';

type FormValues = {
  email: string;
  name: string;
  last_name: string;
};

function LoginHome() {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const [_, setLanguage] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const isLoadingVisible = useTypedSelector((state) =>
    selectAppPartLoading(state, 'login'),
  );
  const [ages, setAges] = useState([{ label: '0', value: '0' }]);
  const [age, setAge] = useState({ label: '18', value: '18' });
  useEffect(() => {
    let addAges: { label: string; value: string }[] = [];
    for (let i = 18; i < 100; i++) {
      addAges.push({ label: i.toString(), value: i.toString() });
      setAges(addAges);
    }
  }, []);
  const validationSchema = useMemo(
    () =>
      yup.object({
        name: yup.string().required(I18n.t('name_error')),
        last_name: yup.string().required(I18n.t('last_name_error')),
        email: yup.string().email().required(I18n.t('email_error')),
      }),
    [_],
  );
  const resolver = useYupValidationResolver(validationSchema);
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    resolver,
  });
  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    if (toggleCheckBox) {
      dispatch(
        login({ ...data, age: age.value, termsAndCond: toggleCheckBox }),
      );
    }
  };
  watch();
  return (
    <SafeAreaContainer>
      <ScrollViewContainer>
        <ButtonsWrapper>
          <ButtonLanguage
            onPress={() => {
              setLanguage('es');
              dispatch(changeLanguage({ language: 'es' }));
              I18n.locale = 'es';
            }}>
            <TextButtonLanguage>{I18n.t('language_es')}</TextButtonLanguage>
          </ButtonLanguage>
          <ButtonLanguage
            onPress={() => {
              setLanguage('en');
              dispatch(changeLanguage({ language: 'en' }));
              I18n.locale = 'en';
            }}>
            <TextButtonLanguage>{I18n.t('language_en')}</TextButtonLanguage>
          </ButtonLanguage>
        </ButtonsWrapper>
        <Container>
          <InputText
            labelText={I18n.t('name')}
            errors={errors}
            control={control}
            placeholderText={I18n.t('name_p')}
            placeholderTextColor={theme.colors.placeholderTextColor}
            autoCapitalize="none"
            name="name"
          />
          <InputText
            labelText={I18n.t('last_name')}
            errors={errors}
            control={control}
            placeholderText={I18n.t('last_name_p')}
            placeholderTextColor={theme.colors.placeholderTextColor}
            autoCapitalize="none"
            name="last_name"
          />
          <InputText
            labelText={I18n.t('email')}
            errors={errors}
            control={control}
            placeholderText={I18n.t('email_p')}
            keyboardType="email-address"
            placeholderTextColor={theme.colors.placeholderTextColor}
            autoCapitalize="none"
            name="email"
          />
          <DropWrapper>
            <DropLabel>{I18n.t('age')}</DropLabel>
            <DropView>
              <DropDown
                selectedValue={age.label}
                onValueChange={(itemValue, itemIndex) => setAge(itemValue)}>
                {ages.map((item) => (
                  <DropDown.Item
                    key={item.value}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </DropDown>
            </DropView>
          </DropWrapper>
          <TermView>
            <TermCheck
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <TermLabel>{I18n.t('terms')}</TermLabel>
          </TermView>
          <ButtonView>
            <GradientButton
              submit={handleSubmit(onSubmit)}
              buttonText={I18n.t('button_login')}
              isDisabled={!Object.keys(errors).length ? false : true}
            />
          </ButtonView>
        </Container>
      </ScrollViewContainer>
      <SpinnerStyled
        visible={isLoadingVisible}
        textContent={I18n.t('loading')}
      />
    </SafeAreaContainer>
  );
}

export default LoginHome;
