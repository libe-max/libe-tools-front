import styled from 'styled-components'

const Wrapper = styled.div`
padding: ${p => p.theme.units(1)};
border-radius: ${p => p.theme.units(0.5)};
background: ${p => p.theme.colors.actionBg};
border:
  ${p => p.theme.colors.actionBorders}
  ${p => p.theme.units(0.25)}
  solid;

&.notification_danger {
  background: ${p => p.theme.colors.dangerBg};
  border-color: ${p => p.theme.colors.dangerBorders};
}
`

export default Wrapper
