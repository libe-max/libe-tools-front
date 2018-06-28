import styled from 'styled-components'

const Wrapper = styled.p`
margin: 0;
padding: 0;
font-family: ${p => p.theme.fonts.easy};
line-height: ${p => p.theme.units(3)};
font-size: ${p => p.theme.units(2)};
color: ${p => p.theme.colors.text};

&.paragraph_small {
  line-height: ${p => p.theme.units(2)};
  font-size: ${p => p.theme.units(1.75)};
}

&.paragraph_light {
  color: ${p => p.theme.colors.lightText};
}`

export default Wrapper
