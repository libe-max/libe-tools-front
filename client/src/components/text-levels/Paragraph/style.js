import styled from 'styled-components'

const Wrapper = styled.p`
margin: 0;
padding: 0;
font-family: ${p => p.theme.fonts.easy};
line-height: ${p => p.theme.units(3)};
font-size: ${p => p.theme.units(2)};
color: ${p => p.theme.colors.baseText};

&.paragraph_small {
  font-size: ${p => p.theme.units(1.75)};
}

&.paragraph_light {
  color: ${p => p.theme.colors.baseLightText};
}

&.paragraph_italic {
  font-style: italic;
}

&.paragraph_error {
 color: ${p => p.theme.colors.dangerText}; 
}

&.paragraph_action {
  color: ${p => p.theme.colors.actionText};
}`

export default Wrapper
