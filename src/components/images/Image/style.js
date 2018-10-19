import styled from 'styled-components'

const Wrapper = styled.div`
overflow: hidden;

img {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  opacity: 0;
}

&.image_contained {
  img {
    width: auto;
    height: 100%;
  }
}`

export default Wrapper
