import React from 'react';
import { ButtonWrapper, ButtonText, Text } from '../../theme';

export const Button = (props) => (
  <ButtonWrapper>
    <ButtonText>
      <Text>
        {props.title}
      </Text>
    </ButtonText>
  </ButtonWrapper>
)

