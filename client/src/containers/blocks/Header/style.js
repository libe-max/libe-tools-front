import styled from 'styled-components'

const Wrapper = styled.div`
background: ${p => p.theme.colors.baseBg};

.shadow-bar {
  display: flex;
  align-items: center;
}

.image {
  cursor: pointer;
  height: ${p => p.theme.units(7)};
}

.main-title {
  cursor: pointer;
  margin-left: ${p => p.theme.units(2)};
}

@media screen and (max-width: ${p => p.theme.breakpoints.medium}) {
  .image {
    height: ${p => p.theme.units(4)};
  }
}`

export default Wrapper
