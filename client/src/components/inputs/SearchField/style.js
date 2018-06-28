import styled from 'styled-components'

const Wrapper = styled.div`
.text-input input {
  border-style: solid;
  border-width: ${p => p.theme.units(0.25)};
  border-color: ${p => p.theme.colors.borders};
  border-radius: ${p => p.theme.units(2.5)};
  background: ${p => p.theme.colors.shadedBg};
  padding: 0 ${p => p.theme.units(2)};
}`

export default Wrapper
