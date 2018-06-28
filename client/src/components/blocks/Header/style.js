import styled from 'styled-components'

const Wrapper = styled.div`
background: ${p => p.theme.colors.clearBg};

.shadow-bar {
  display: flex;
  align-items: center;
}

.image {
  height: ${p => p.theme.units(7)};
}

.main-title {
  margin-left: ${p => p.theme.units(2)};
}

@media screen and (max-width: ${
  p => p.theme.breakpoints.medium
}) {
  .image {
    height: ${p => p.theme.units(4)};
  }
}
`

export default Wrapper
