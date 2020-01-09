import React from 'react';
import { ButtonWrapper, ButtonText, Text } from '../../theme';

interface ButtonProps {
  title: string;
  onPress?: Function;
}

export const Button = (props: ButtonProps) => (
  <ButtonWrapper onPress={props.onPress}>
    <ButtonText>
      <Text>
        {props.title}
      </Text>
    </ButtonText>
  </ButtonWrapper>
)

