import styled from 'styled-components'

export const Container = styled.View`
  padding-top: 50px;
  background-color: ${props => props.backgroundColor || 'white'};
  flex: 1;
  justifyContent: center;
  ${props => { if(props.center) 
    return 'align-items: center;'}
  }
  ${props => { if(props.row) 
    return 'flex-direction: row; justifyContent: flex-start; padding-top: 0;'}
  }
  ${props => { if(props.column) 
    return 'justifyContent: flex-start; padding-top: 0;'}
  }
`
