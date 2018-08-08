import styled from 'styled-components'

const Wrapper = styled.div`
h1, h2, h3, h4, h5, h6, span {
  font-size: ${p => p.theme.units(3)};
  line-height: ${p => p.theme.units(4)};
  font-family: ${p => p.theme.fonts.brand};
  color: ${p => p.theme.colors.baseText};
  font-weight: 600;
  margin: 0;
  padding: 0
  @media screen and (max-width: ${p => p.theme.breakpoints.medium}) {
    font-size: ${p => p.theme.units(2.75)};
    line-height: ${p => p.theme.units(3)};
  }
}`

export default Wrapper
