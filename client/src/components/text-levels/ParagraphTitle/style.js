import styled from 'styled-components'

const Wrapper = styled.div`
  h1, h2, h3, h4, h5, h6, span {
    color: ${p => p.theme.colors.text};
    font-family: ${p => p.theme.fonts.easy};
    font-size: ${p => p.theme.units(2)};
    line-height: ${p => p.theme.units(3)};
    font-weight: 600;
    margin: 0;
    padding: 0;
  }
`

export default Wrapper
