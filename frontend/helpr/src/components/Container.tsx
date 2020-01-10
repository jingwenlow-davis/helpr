import styled from 'styled-components'

export const Container = styled.View`
  background-color: ${props => props.backgroundColor || 'white'};
  flex: 1;
  justifyContent: center;
  ${props => { if(props.center) return 'align-items: center;'}}
padding-top: 30px;
`
