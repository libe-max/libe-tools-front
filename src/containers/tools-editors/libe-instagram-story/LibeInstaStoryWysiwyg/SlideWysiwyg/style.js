import styled from 'styled-components'
import noDisplayBg from '../assets/no-display-bg-placeholder.svg'

const r = '.libe-insta-slide-wysiwyg'

const Wrapper = styled.div`
height: 100%;
position: relative;

${r}__slide {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

${r}__editors {
  position: absolute;
  bottom: ${p => p.theme.units(1)};
  left: ${p => p.theme.units(1)};
  right: ${p => p.theme.units(1)};
}

${r}__editor .wysiwyg-editor {
  box-shadow: ${p => p.theme.shadows.small};
}

${r}__placeholder {
  width: 1080px;
  height: 1920px;
  background-image: url(${noDisplayBg});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: ${p => p.theme.colors.baseBg};
}

/* States */
${r}__placeholder {
  display: none;
}

&${r}_no-display {
  .libe-insta-slide {
    display: none;
  }
  ${r}__placeholder {
    display: block;
  }
}
`

export default Wrapper
