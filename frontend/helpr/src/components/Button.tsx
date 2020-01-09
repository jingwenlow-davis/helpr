import React from 'react';
import styled from 'styled-components'
import { Text } from '.';

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

// STYLING
const ButtonWrapper = styled.TouchableOpacity`
  background:#88B9C1;
  padding: 12px 28px;
  margin: 8px 8px;
  border-radius: 32px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;