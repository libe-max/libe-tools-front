import styled from 'styled-components'

const Wrapper = styled.div`

/* ---------- STYLES ---------- */

width: 100%;
box-sizing: border-box;

select {
  width: 100%;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  height: ${p => p.theme.units(5)};
  padding: 0 ${p => p.theme.units(1)};
  color: ${p => p.theme.colors.baseText};
  font-family: ${p => p.theme.fonts.easy};
  font-size: ${p => p.theme.units(2)};
  line-height: ${p => p.theme.units(5)};
  border-bottom-style: solid;
  border-bottom-width: ${p => p.theme.units(0.25)};
  border-bottom-color: ${p => p.theme.colors.baseBorder};
  background: ${p => p.theme.colors.baseBg};
  transition: background ${p => p.theme.transitions.quick};
}

select:hover {
  background: ${p => p.theme.colors.baseAltBg};
}

/* ---------- COMPONENT STATES ---------- */

.input-label {
  display: none;
}

&.select-list_with-label {
  .input-label {
    display: block;
  }
}

&.select-list_placeholder-selected {
  select {
    color: ${p => p.theme.colors.baseLightText};
  }
}`

export default Wrapper
