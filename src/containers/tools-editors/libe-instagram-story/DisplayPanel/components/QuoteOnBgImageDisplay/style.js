import styled from 'styled-components'

const rootClass = `.libe-insta-quote-on-bg-image-display-slide`

export default styled.div`
position: relative;
height: 100%;

${rootClass}__safe-zone {
  position: absolute;
  display: none;
  width: calc(780 / 1080 * 100%);
  height: calc(1620 / 1920 * 100%);
  left: calc((1 - (780 / 1080)) / 2 * 100%);
  top: calc((1 - (1620 / 1920)) / 2 * 100%);
  box-shadow:
    0 0 0 1px #DDDDDD,
    0 0 0 1px inset #DDDDDD;
}

${rootClass}__background-images {
  position: absolute;
  opacity: 0.3;
  display: flex;
  flex-direction: column;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

${rootClass}__background-image {
  width: 100%;
  flex-grow: 1;
  background-size: cover;
  background-position: center center;
}

${rootClass}__quote-block {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 45%;
  left: 50%;
  width: calc(780 / 1080 * 100%);
  max-width: calc(780 / 1080 * 100%);
  max-height: calc(1620 / 1920 * 90%);
}

${rootClass}__quote-sign {
  position: relative;
  width: 100%;
  img {
    position: absolute;
    transform: translate(-10%, -10%);
    opacity: 0.9;
    mix-blend-mode: screen;
    width: calc(360 / 780 * 100%);
  }
}

${rootClass}__quote-and-author {
  position: relative;
}

${rootClass}__quote {
  font-family: 'Libe-Sans-Semicondensed', Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.03em;
  text-transform: normal;
  color: #212121;
}

${rootClass}__quote-author {
  font-family: 'Synthese', Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: uppercase;
  color: #212121;
  text-align: right;
}

${rootClass}__icon-signature {
  position: absolute;
  transform: translate(-50%, -50%);
  width: calc(150 / 1080 * 100%);
  left: 50%;
  top: calc(1690 / 1920 * 100%);
}`
