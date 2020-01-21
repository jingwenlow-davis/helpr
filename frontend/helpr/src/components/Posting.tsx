import React from 'react';
import styled from 'styled-components'
// import { Rating } from 'react-native-elements';
import { Card, Container, Rating, Text } from '../components';

export const Posting = (props) => (
  <Card>
    <Container row>
      <Image
        source={require('../assets/images/default-profile-picture.png')}
      />
      <Container column>
        <Text type={'header'}>{props.title}</Text>
        <Container row>
          <Rating
            readonly
            startingValue={3.5}
            // style={{ styles.rating }}
          />
          <Text>(100)</Text>
        </Container>
      </Container>
    </Container>
  </Card>
)

// STYLING
const Image = styled.Image`
  margin-right: 16px;
  height: 50px;
  width: 50px;
  border-radius: 8;
  resizeMode: contain;
`;
