import React from 'react';
import styled from 'styled-components'
import { Card, Text } from '../components';

export const Posting = (props) => (
  <Card>
    {/* <Image
      source={require('../assets/images/default-profile-picture.png')}
    /> */}
    <Text>{props.title}</Text>
  </Card>
)

// STYLING
const Image = styled.Image`
  height: 30px;
  width: 30px;
  border-radius: 8;
`;
