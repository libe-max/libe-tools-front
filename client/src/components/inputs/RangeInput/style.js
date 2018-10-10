import styled from 'styled-components'

const Wrapper = styled.div`

/* ---------- STYLES ---------- */

width: 100%;
box-sizing: border-box;

.range-input__input-wrapper {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  border: none;
  height: ${p => p.theme.units(5)};
  padding: 0 ${p => p.theme.units(1)};
  background: ${p => p.theme.colors.baseBg};
  transition: background ${p => p.theme.transitions.quick};
}

.range-input__input-wrapper:hover {
  cursor: pointer;
  background: ${p => p.theme.colors.baseAltBg};
}

.range-input__fake-gauge {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.05;
  background: ${p => p.theme.colors.baseInvertedBg};
}

.range-input__value-displayer-wrapper {
  position: absolute;
  top: 0;
  left: 0;
}

.range-input__input-wrapper
  input {
    position: absolute;
    transform: translateY(50%);
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    cursor: pointer;
    box-sizing: border-box;
}

.input-label {
  display: none;
}

/* ---------- COMPONENT STATES ---------- */

&.range-input_with-label {
  .input-label {
    display: block;
  }
}`

export default Wrapper
