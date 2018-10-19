import styled from 'styled-components'
import greyLibeIcon from '../../assets/libe-icon-no-borders-outline.svg'

const rootClass = `.libe-insta-quote-on-bg-image-display-slide-wysiwyg`

export default styled.div`
position: relative;
width: 100%;
height: 100%;

${rootClass}__background-setter,
${rootClass}__quote-setter,
${rootClass}__author-setter {
  position: absolute;
  display: none;
  left: ${p => p.theme.units(2)};
  bottom: ${p => p.theme.units(2)};
  width: calc(100% - ${p => p.theme.units(4)});
}

.libe-insta-quote-on-bg-image-display-slide__background-images:hover,
.libe-insta-quote-on-bg-image-display-slide__quote:hover,
.libe-insta-quote-on-bg-image-display-slide__quote-author:hover {
  cursor: pointer;
  box-shadow:
      0 0 5px ${p => p.theme.units(0.125)}
      ${p => p.theme.colors.actionText},
      ${p => p.theme.shadows.medium};
}

.libe-insta-quote-on-bg-image-display-slide__quote:hover {
  color: ${p => p.theme.colors.actionText};
}

.libe-insta-quote-on-bg-image-display-slide__quote-author:hover {
  .libe-insta-quote-on-bg-image-display-slide__quote-author {
    color: ${p => p.theme.colors.actionText};
  }
}

&${rootClass}_no-bg {
  .libe-insta-quote-on-bg-image-display-slide__background-images {
    opacity: 1;
  }
}

&${rootClass}_no-quote {
  .libe-insta-quote-on-bg-image-display-slide__quote {
    color: #999999;
    .libe-icon-signature {
      background-image: url(${greyLibeIcon});
      background-repeat: no-repeat;
      background-position: center top;
      img { opacity: 0 }
    }
  }
  .libe-insta-quote-on-bg-image-display-slide__quote:hover {
    color: ${p => p.theme.colors.actionText};
  }
}

&${rootClass}_no-author {
  .libe-insta-quote-on-bg-image-display-slide__quote-author {
    color: #999999;
  }
  .libe-insta-quote-on-bg-image-display-slide__quote-author:hover {
    color: ${p => p.theme.colors.actionText};
  }
}

&${rootClass}_bg-selected {
  ${rootClass}__background-setter {
    display: block;
  }
  .libe-insta-quote-on-bg-image-display-slide__background-images {
    cursor: pointer;
    box-shadow:
        0 0 5px ${p => p.theme.units(0.125)}
        ${p => p.theme.colors.actionText},
        ${p => p.theme.shadows.medium};
  }
}

&${rootClass}_quote-selected {
  ${rootClass}__quote-setter {
    display: block;
  }
  .libe-insta-quote-on-bg-image-display-slide__quote {
    cursor: pointer;
    box-shadow:
        0 0 5px ${p => p.theme.units(0.125)}
        ${p => p.theme.colors.actionText},
        ${p => p.theme.shadows.medium};
    color: ${p => p.theme.colors.actionText};
  }
}

&${rootClass}_author-selected {
  ${rootClass}__author-setter {
    display: block;
  }
  .libe-insta-quote-on-bg-image-display-slide__quote-author {
    cursor: pointer;
    color: ${p => p.theme.colors.actionText};
    box-shadow:
        0 0 5px ${p => p.theme.units(0.125)}
        ${p => p.theme.colors.actionText},
        ${p => p.theme.shadows.medium};
  }
}`
