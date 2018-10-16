import styled from 'styled-components'
import greyLibeIcon from '../../assets/libe-icon-no-borders-outline.svg'

const rootClass = `.libe-insta-img-and-text-display-slide-wysiwyg`

export default styled.div`
position: relative;
width: 100%;
height: 100%;

${rootClass}__image-setter,
${rootClass}__title-setter,
${rootClass}__text-setter {
  position: absolute;
  display: none;
  left: ${p => p.theme.units(2)};
  bottom: ${p => p.theme.units(2)};
  width: calc(100% - ${p => p.theme.units(4)});
}

.libe-insta-img-and-text-display-slide__image:hover,
.libe-insta-img-and-text-display-slide__title:hover,
.libe-insta-img-and-text-display-slide__text:hover {
  cursor: pointer;
  box-shadow:
      0 0 5px ${p => p.theme.units(0.125)}
      ${p => p.theme.colors.actionText},
      ${p => p.theme.shadows.medium};
}

.libe-insta-img-and-text-display-slide__title:hover {
  color: ${p => p.theme.colors.actionText};
}

.libe-insta-img-and-text-display-slide__text:hover {
  color: ${p => p.theme.colors.actionText};
}

&${rootClass}_no-title {
  .libe-insta-img-and-text-display-slide__title {
    color: #999999;
    .libe-icon-signature {
      background-image: url(${greyLibeIcon});
      background-repeat: no-repeat;
      background-position: center top;
      img { opacity: 0 }
    }
  }
  .libe-insta-img-and-text-display-slide__title:hover {
    color: ${p => p.theme.colors.actionText};
  }
}

&${rootClass}_no-text {
  .libe-insta-img-and-text-display-slide__text {
    color: #999999;
  }
  .libe-insta-img-and-text-display-slide__text:hover {
    color: ${p => p.theme.colors.actionText};
  }
}

&${rootClass}_img-selected {
  ${rootClass}__image-setter {
    display: block;
  }
  .libe-insta-img-and-text-display-slide__image {
    cursor: pointer;
    box-shadow:
        0 0 5px ${p => p.theme.units(0.125)}
        ${p => p.theme.colors.actionText},
        ${p => p.theme.shadows.medium};
  }
}

&${rootClass}_title-selected {
  ${rootClass}__title-setter {
    display: block;
  }
  .libe-insta-img-and-text-display-slide__title {
    cursor: pointer;
    box-shadow:
        0 0 5px ${p => p.theme.units(0.125)}
        ${p => p.theme.colors.actionText},
        ${p => p.theme.shadows.medium};
    color: ${p => p.theme.colors.actionText};
  }
}

&${rootClass}_text-selected {
  ${rootClass}__text-setter {
    display: block;
  }
  .libe-insta-img-and-text-display-slide__text {
    cursor: pointer;
    color: ${p => p.theme.colors.actionText};
    box-shadow:
        0 0 5px ${p => p.theme.units(0.125)}
        ${p => p.theme.colors.actionText},
        ${p => p.theme.shadows.medium};
  }
}`
