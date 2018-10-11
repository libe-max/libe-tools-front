import styled from 'styled-components'

const rootClass = `.libe-insta-full-image-display-slide-wysiwyg`

export default styled.div`
position: relative;
width: 100%;
height: 100%;

${rootClass}__background-setter {
  position: absolute;
  display: none;
  left: ${p => p.theme.units(2)};
  bottom: ${p => p.theme.units(2)};
  width: calc(100% - ${p => p.theme.units(4)});
}

.libe-insta-full-image-display-slide__background-images:hover {
  cursor: pointer;
  box-shadow:
      0 0 5px ${p => p.theme.units(0.125)}
      ${p => p.theme.colors.actionText},
      ${p => p.theme.shadows.medium};
}

&${rootClass}_bg-selected {
  ${rootClass}__background-setter {
    display: block;
  }
  .libe-insta-full-image-display-slide__background-images {
    cursor: pointer;
    box-shadow:
        0 0 5px ${p => p.theme.units(0.125)}
        ${p => p.theme.colors.actionText},
        ${p => p.theme.shadows.medium};
  }
}`
