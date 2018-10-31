import styled from 'styled-components'

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
  top: 0;
  left: 0;
}

/* States */

`

export default Wrapper
