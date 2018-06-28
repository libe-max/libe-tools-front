import styled from 'styled-components'

const Wrapper = styled.div`
h1, h2, h3, h4, h5, h6, span {
  font-size: ${p => p.theme.units(2.5)};
  line-height: ${p => p.theme.units(3)};
  font-family: ${p => p.theme.fonts.easy};
  color: ${p => p.theme.colors.text};
  font-weight: 600;
  margin: 0;
  padding: 0;
}`

export default Wrapper
