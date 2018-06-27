import styled from 'styled-components'

const Wrapper = styled.div`
  border-radius: ${p => p.theme.units(1)};
  box-shadow: ${p => p.theme.shadows.small};
  box-sizing: border-box;
  overflow: hidden;
  border:
    ${p => p.theme.units(0.25)}
    ${p => p.theme.colors.borders}
    solid;
`

export default Wrapper
