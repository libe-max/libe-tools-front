import styled from 'styled-components'

const Wrapper = styled.button`
font-family: ${p => p.theme.fonts.easy};
font-size: ${p => p.theme.units(2)};
line-height: ${p => p.theme.units(3)};
font-weight: 400;
height: ${p => p.theme.units(4)};
background: ${p => p.theme.colors.action};
color: ${p => p.theme.colors.clearText};
padding:
  ${p => p.theme.units(0.5)}
  ${p => p.theme.units(2)};
border-radius: ${p => p.theme.units(2)};
box-shadow: ${p => p.theme.shadows.neat};
cursor: pointer;
border: none;
box-sizing: border-box;

.button__icon {
  display: none;
}

:hover {
  box-shadow: 
    ${p => p.theme.shadows.neat},
    ${p => p.theme.shadows.small};
}

&.button_minor {
  color: ${p => p.theme.colors.lightText};
  background: ${p => p.theme.colors.shadedBg};
  box-shadow: unset;
}

&.button_dangerous {
  color: ${p => p.theme.colors.clearText};
  background: ${p => p.theme.colors.dangerText};
  font-style: italic;
}

&.button_primary {
  font-size: ${p => p.theme.units(2.5)};
  font-weight: 600;
  line-height: ${p => p.theme.units(3)};
  border-radius: ${p => p.theme.units(3)};
  height: ${p => p.theme.units(6)};
  padding:
    ${p => p.theme.units(1.5)}
    ${p => p.theme.units(3)};
}

&.button_link {
  color: ${p => p.theme.colors.action};
  padding: 0;
  box-shadow: none;
  text-decoration: underline;
  height: auto;
  background: transparent;
  :hover { box-shadow: none; }
}

&.button_dangerous.button_minor {
  color: ${p => p.theme.colors.dangerText};
  background: ${p => p.theme.colors.shadedBg};
}

&.button_link.button_minor {
  color: ${p => p.theme.colors.lightText};
  background: transparent;
}

&.button_link.button_dangerous {
  color: ${p => p.theme.colors.dangerText};
}

&.button_icon {
  padding: unset;
  background: unset;
  box-shadow: unset;
  border-radius: unset;
  height: ${p => p.theme.units(3)};
}

&.button_icon.button_primary {
  height: ${p => p.theme.units(5)}; 
}

&.button_icon .button__icon {
  display: block;
  height: 100%;
}`

export default Wrapper
