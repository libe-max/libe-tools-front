import styled from 'styled-components'

const Wrapper = styled.div`
padding: ${p => p.theme.units(1)};
border-radius: ${p => p.theme.units(0.5)};
background: ${p => p.theme.colors.actionAltBg};
border:
  ${p => p.theme.colors.actionBorder}
  ${p => p.theme.units(0.25)}
  solid;

&.notification_danger {
  background: ${p => p.theme.colors.dangerAltBg};
  border-color: ${p => p.theme.colors.dangerBorder};
}
`

export default Wrapper
