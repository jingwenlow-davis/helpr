import styled from 'styled-components'

export const Text = styled.Text`
  font-family: 'montserrat';
  font-size: ${props => { 
    switch(props.type) {
      case 'header':
        return '18px';
      case 'subheader':
        return '16px';
      case 'body':
      default: 
        return '12px';
    }
  }};
`

// font-weight: ${props => { 
//   switch(props.type) {
//     case 'title':
//       return 'bold';
//     default: 
//       return 'regular';
//   }
// }};