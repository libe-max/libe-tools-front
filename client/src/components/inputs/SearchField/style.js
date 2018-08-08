import styled from 'styled-components'

const Wrapper = styled.div`

position: relative;
display: flex;
align-items: center;

.search-field__magnifying-icon,
.search-field__empty-icon {
  position: absolute;
  display: flex;
  align-items: center;
  right: ${p => p.theme.units(2)};
}

.search-field__magnifying-icon {
  display: none;
}

.text-input input {
  border-style: solid;
  border-width: ${p => p.theme.units(0.25)};
  border-color: ${p => p.theme.colors.baseBorder};
  border-radius: ${p => p.theme.units(2.5)};
  background: ${p => p.theme.colors.baseAltBg};
  padding: 0 ${p => p.theme.units(2)};
  height: ${p => p.theme.units(5)};
}

&.search-field_empty {
  .search-field__magnifying-icon {
    display: flex;
  }

  .search-field__empty-icon {
    display: none;
  }
}`

export default Wrapper
