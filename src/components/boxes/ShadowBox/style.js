import styled from 'styled-components'

const Wrapper = styled.div`
border-radius: ${p => p.theme.units(1)};
box-shadow: ${p => p.theme.shadows.small};
background: ${p => p.theme.colors.baseBg};
box-sizing: border-box;
overflow: hidden;
border:
  ${p => p.theme.units(0.25)}
  ${p => p.theme.colors.baseBorder}
  solid;
/* Compensation of border thickness in padding */
padding: ${p => p.theme.units(2 - 0.25)};`

export default Wrapper
