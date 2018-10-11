import styled from 'styled-components'
import greyLibeIcon from '../../assets/libe-icon-no-borders-outline.svg'

const rootClass = `.libe-insta-text-on-bg-image-display-slide-wysiwyg`

export default styled.div`
position: relative;
width: 100%;
height: 100%;

${rootClass}__background-setter,
${rootClass}__text-setter {
  position: absolute;
  display: none;
  left: ${p => p.theme.units(2)};
  bottom: ${p => p.theme.units(2)};
  width: calc(100% - ${p => p.theme.units(4)});
}

.libe-insta-text-on-bg-image-display-slide__background-images:hover,
.libe-insta-text-on-bg-image-display-slide__text:hover {
  cursor: pointer;
  box-shadow:
      0 0 5px ${p => p.theme.units(0.125)}
      ${p => p.theme.colors.actionText},
      ${p => p.theme.shadows.medium};
}

.libe-insta-text-on-bg-image-display-slide__text:hover {
  .libe-insta-text-on-bg-image-display-slide__text {
    color: ${p => p.theme.colors.actionText};
  }
}

&${rootClass}_no-text {
  .libe-insta-text-on-bg-image-display-slide__text {
    color: #999999;
  }
  .libe-insta-text-on-bg-image-display-slide__text:hover {
    color: ${p => p.theme.colors.actionText};
  }
}

&${rootClass}_bg-selected {
  ${rootClass}__background-setter {
    display: block;
  }
  .libe-insta-text-on-bg-image-display-slide__background-images {
    cursor: pointer;
    box-shadow:
        0 0 5px ${p => p.theme.units(0.125)}
        ${p => p.theme.colors.actionText},
        ${p => p.theme.shadows.medium};
  }
}

&${rootClass}_text-selected {
  ${rootClass}__text-setter {
    display: block;
  }
  .libe-insta-text-on-bg-image-display-slide__text {
    cursor: pointer;
    color: ${p => p.theme.colors.actionText};
    box-shadow:
        0 0 5px ${p => p.theme.units(0.125)}
        ${p => p.theme.colors.actionText},
        ${p => p.theme.shadows.medium};
  }
}`
