import React from 'react';

import {
  LinearGradientStyled,
  TextButton,
  Button,
  DisabledView,
} from './style';

type GradientButtonProps = {
  /** Texto del boton*/
  buttonText?: string;

  /** Color de fondo de la caja */
  submit: () => void;

  /** True si el boton esta bloqueado */
  isDisabled?: boolean;

  /** la altura del boton*/
  heightButton?: number;
};

function GradientButton(props: GradientButtonProps) {
  return (
    <Button
      onPress={props.submit}
      disabled={props.isDisabled}
      height={props.heightButton}>
      <LinearGradientStyled
        colors={['#0AB8EC', '#007EFF', '#197FBF']}
        useAngle={true}
        angle={272}
        angleCenter={{ x: 0.5, y: 0.5 }}
        locations={[0, 0.477, 1]}>
        {props.isDisabled ? (
          <DisabledView>
            <TextButton textColor="#fff">{props.buttonText}</TextButton>
          </DisabledView>
        ) : (
          <TextButton textColor="#fff">{props.buttonText}</TextButton>
        )}
      </LinearGradientStyled>
    </Button>
  );
}

GradientButton.defaultProps = {
  buttonText: '',
  isDisabled: false,
};

export default GradientButton;
