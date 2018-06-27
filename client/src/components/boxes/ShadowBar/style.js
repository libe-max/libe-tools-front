import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  box-shadow: ${p => p.theme.shadows.medium};
  padding: ${p => p.theme.units(2)};
`

export default Wrapper
