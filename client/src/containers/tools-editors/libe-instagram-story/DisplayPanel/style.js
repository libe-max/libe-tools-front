import styled from 'styled-components'
import hex2rgba from 'hex-to-rgba'

const Wrapper = styled.div`
height: 100%;
overflow: hidden;

.libe-insta-story-wysiwyg__slide-controls {
  margin-top: ${p => p.theme.units(3)};
  height: ${p => p.theme.units(8)};
  grid-row: 2;
  display: flex;
  flex-direction: column;
}

.libe-insta-story-wysiwyg__slides {
  margin-top: ${p => p.theme.units(3)};
  margin-bottom: ${p => p.theme.units(3)};
  height: calc(100% - ${p => p.theme.units(17)});
  grid-row: 4;
  display: flex;
}

.libe-insta-story-wysiwyg__slides-spacer {
  height: 100%;
  width: 0px;
  flex-grow: 0;
  flex-shrink: 0;
  transition: margin-left ${p => p.theme.transitions.quick};
}

.libe-insta-story-wysiwyg__slide,
.libe-insta-story-wysiwyg__new-slide {
  margin: 0 ${p => p.theme.units(7)};
  height: 100%;
  flex-grow: 0;
  flex-shrink: 0;
}

.libe-insta-story-wysiwyg__slide {
  opacity: 0.5;
  cursor: pointer;
  position: relative;
  box-shadow:
    ${p => p.theme.shadows.medium};
  transition: opacity ${p => p.theme.transitions.quick};
  &:hover,
  &.libe-insta-story-wysiwyg__slide_active {
    opacity: 1;
  }
  &:hover:not(.libe-insta-story-wysiwyg__slide_active) {
    box-shadow:
      0 0 5px ${p => p.theme.units(0.125)}
      ${p => p.theme.colors.actionText},
      ${p => p.theme.shadows.medium};
  }
}

.libe-insta-story-wysiwyg__delete-slide {
  position: absolute;
  left: calc(100% + ${p => p.theme.units(1)});
  top: ${p => p.theme.units(1)};
}

.libe-insta-story-wysiwyg__new-slide {
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

.libe-insta-story-wysiwyg__slides-navigation {
  display: flex;
  margin-bottom: ${p => p.theme.units(2)}
  justify-content: center;
  .block-title {
    margin: 0 ${p => p.theme.units(3)};
  }
}

.libe-insta-story-wysiwyg__slide-display {
  display: flex;
  justify-content: center;
}

/* * * * * * * States * * * * * * */

&.libe-insta-story-wysiwyg_no-slides {
  .libe-insta-story-wysiwyg__slide-controls {
    opacity: 0.5;
  }
  .libe-insta-story-wysiwyg__turn-page {
    display: none;
  }
  .libe-insta-story-wysiwyg__slide-display {
    opacity: 0;
  }
}`

export default Wrapper
