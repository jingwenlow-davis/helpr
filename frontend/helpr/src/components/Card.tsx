import React from 'react';
import styled from 'styled-components'


export const Card = (props) => (
    <StyledCard>
      {props.children}
    </StyledCard>
  )

// STYLING
const StyledCard = styled.View`
  margin: 4px 8px;
  padding: 16px;
  border-radius: 8;
  background-color: white;
  shadow-color: #000;
  /*shadow-offset: { width: 0; height: 2 };*/
  shadow-opacity: 0.1;
  shadow-radius: 2;
  elevation: 1;
`;
