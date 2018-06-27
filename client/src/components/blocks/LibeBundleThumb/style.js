import styled from 'styled-components'

const Wrapper = styled.div`
  .shadow-box {
    padding: ${p => p.theme.units(2)};
    .libe-bundle-thumb__image-slot .image {
      width: 100%;
      height: 100%;
    }
    .libe-bundle-thumb__image-slot,
    .libe-bundle-thumb__image-placeholder {
      width: ${p => p.theme.units(7)};
      height: ${p => p.theme.units(6)};
      margin-right: ${p => p.theme.units(2)};
    }
    .libe-bundle-thumb__image-slot {
      display: block;
    }
    .libe-bundle-thumb__image-placeholder {
      background: ${p => p.theme.colors.borders};
      display: none;
    }
  }

  &.libe-bundle-thumb_loading .shadow-box {
    box-shadow: unset;
    border: unset;
    background: ${p => p.theme.colors.shadedBg};
    .libe-bundle-thumb__image-slot {
      display: none;
    }
    .libe-bundle-thumb__image-placeholder {
      display: block;
    }
  }
`

export default Wrapper
