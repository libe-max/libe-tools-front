import styled from 'styled-components'
import hex2rgba from 'hex-to-rgba'

const rootClass = `.libe-insta-story-wysiwyg`

const Wrapper = styled.div`
height: 100%;
overflow: hidden;

${rootClass}__slide-controls {
  margin-top: ${p => p.theme.units(3)};
  height: ${p => p.theme.units(10)};
  display: flex;
  flex-direction: column;
}

${rootClass}__slides-navigation {
  display: flex;
  margin-bottom: ${p => p.theme.units(2)}
  justify-content: center;
  .block-title {
    margin: 0 ${p => p.theme.units(3)};
  }
}

${rootClass}__slide-display {
  display: flex;
  justify-content: center;
  margin: ${p => p.theme.units(1)} auto;
  width: unset;
}

${rootClass}__slides {
  margin-top: ${p => p.theme.units(3)};
  margin-bottom: ${p => p.theme.units(3)};
  height: calc(100% - ${p => p.theme.units(19)});
  display: flex;
}

${rootClass}__slides-spacer {
  height: 100%;
  width: 0px;
  flex-grow: 0;
  flex-shrink: 0;
  transition: margin-left ${p => p.theme.transitions.quick};
}

${rootClass}__slide,
${rootClass}__new-slide {
  margin: 0 ${p => p.theme.units(7)};
  height: 100%;
  flex-grow: 0;
  flex-shrink: 0;
}

${rootClass}__slide {
  opacity: 0.3;
  cursor: pointer;
  position: relative;
  box-shadow:
    ${p => p.theme.shadows.medium};
  transition: opacity ${p => p.theme.transitions.quick};
  &:hover,
  &${rootClass}__slide_active {
    opacity: 1;
  }
  &${rootClass}__slide_active {
    cursor: unset;
    ${rootClass}__blocker {
      display: none;
    }
  }
  &:hover:not(${rootClass}__slide_active) {
    box-shadow:
      0 0 5px ${p => p.theme.units(0.125)}
      ${p => p.theme.colors.actionText},
      ${p => p.theme.shadows.medium};
  }
}

${rootClass}__side-actions {
  position: absolute;
  left: calc(100% + ${p => p.theme.units(1)});
  top: ${p => p.theme.units(1)};
}

${rootClass}__side-actions > * {
  margin-bottom: ${p => p.theme.units(1)};
}

${rootClass}__blocker {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

${rootClass}__new-slide {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border:
    dashed
    ${p => p.theme._shade().colors.actionBorder}
    ${p => p.theme.units(0.25)};
  border-radius: ${p => p.theme.units(2)};
  background: ${p => hex2rgba(p.theme._shade().colors.actionLightText, 0.1)};
  transition:
    background ${p => p.theme.transitions.flash},
    border ${p => p.theme.transitions.flash};
  &:hover {
    border:
      dashed
      ${p => p.theme._shade().colors.actionLightText}
      ${p => p.theme.units(0.25)};
    background: ${p => hex2rgba(p.theme._shade().colors.actionLightText, 0.2)};
  }
}

/* * * * * * * States * * * * * * */

&${rootClass}_no-slides {
  ${rootClass}__slide-controls {
    opacity: 0.5;
  }
  ${rootClass}__turn-page {
    display: none;
  }
  ${rootClass}__slide-display {
    opacity: 0;
  }
}`

export default Wrapper
