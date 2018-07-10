import styled from 'styled-components'

const Wrapper = styled.label`
display: block;
box-sizing: border-box;
color: ${p => p.theme.colors.lightText};
font-family: ${p => p.theme.fonts.easy};
font-size: ${p => p.theme.units(1.5)};
line-height: ${p => p.theme.units(2)};
text-transform: uppercase;
font-weight: 600;
margin-bottom: ${p => p.theme.units(1)};`

export default Wrapper
