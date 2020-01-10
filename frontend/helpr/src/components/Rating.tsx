import React from 'react';
import { Rating as ReactRating } from 'react-native-elements';

export const Rating = (props) => (
  <ReactRating
    readonly={props.readonly}
    startingValue={props.value}
    imageSize={16}
    fractions={2}
    // style={{ paddingVertical: 4 }}
  />
)