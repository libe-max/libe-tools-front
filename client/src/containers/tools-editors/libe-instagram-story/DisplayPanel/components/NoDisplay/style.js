import styled from 'styled-components'

const Wrapper = styled.div`
position: relative;
height: 100%;

.libe-insta-no-display-slide__safe-zone {
  position: absolute;
  width: calc(780 / 1080 * 100%);
  height: calc(1620 / 1920 * 100%);
  left: calc((1 - (780 / 1080)) / 2 * 100%);
  top: calc((1 - (1620 / 1920)) / 2 * 100%);
  box-shadow:
    0 0 0 1px #CCCCCC,
    0 0 0 1px inset #CCCCCC;
}

.libe-insta-no-display-slide__info-text {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 45%;
  font-family: 'Libe-Sans', Helvetica, Arial, sans-serif;
  font-style: italic;
  color: #999999;
  left: 50%;
}

.libe-insta-no-display-slide__icon-signature {
  position: absolute;
  transform: translate(-50%, -50%);
  width: calc(150 / 1080 * 100%);
  left: 50%;
  top: calc(1690 / 1920 * 100%);
}`

export default Wrapper
