import styled from 'styled-components'

const Wrapper = styled.div`

/* ---------- STYLES ---------- */

width: 100%;
box-sizing: border-box;

input {
  width: 100%;
  box-sizing: border-box;
  border: none;
  height: ${p => p.theme.units(5)};
  padding: 0 ${p => p.theme.units(1)};
  color: ${p => p.theme.colors.text};
  font-family: ${p => p.theme.fonts.easy};
  font-size: ${p => p.theme.units(2)};
  line-height: ${p => p.theme.units(5)};
  border-bottom-style: solid;
  border-bottom-width: ${p => p.theme.units(0.25)};
  border-bottom-color: ${p => p.theme.colors.borders};
  background: transparent;
}

input::placeholder {
  color: ${p => p.theme.colors.lightText};
}

.input-label {
  display: none;
}

/* ---------- COMPONENT STATES ---------- */

&.text-input_with-label {
  .input-label {
    display: block;
  }
}`

export default Wrapper
