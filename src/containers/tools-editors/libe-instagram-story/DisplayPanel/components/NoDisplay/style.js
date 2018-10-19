import styled from 'styled-components'

const rootClass = `.libe-insta-no-display-slide`

export default styled.div`
position: relative;
height: 100%;

${rootClass}__safe-zone {
  position: absolute;
  width: calc(780 / 1080 * 100%);
  height: calc(1620 / 1920 * 100%);
  left: calc((1 - (780 / 1080)) / 2 * 100%);
  top: calc((1 - (1620 / 1920)) / 2 * 100%);
  box-shadow:
    0 0 0 1px #DDDDDD,
    0 0 0 1px inset #DDDDDD;
}

${rootClass}__info-text {
  position: absolute;
  max-width: calc(780 / 1080 * 100%);
  max-height: calc(1620 / 1920 * 100%);
  overflow: hidden;
  transform: translate(-50%, -50%);
  top: 45%;
  left: 50%;
  font-family: 'Libe-Sans-Semicondensed', Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-style: italic;
  letter-spacing: 0.03em;
  color: #AAAAAA;
}

${rootClass}__icon-signature {
  position: absolute;
  transform: translate(-50%, -50%);
  width: calc(150 / 1080 * 100%);
  left: 50%;
  top: calc(1690 / 1920 * 100%);
}`
