import styled from 'styled-components'

const rootClass = `.libe-insta-cover-display-slide`

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

${rootClass}__background-images {
  position: absolute;
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

${rootClass}__title-and-text {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 45%;
  left: 50%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}

${rootClass}__title {
  position: relative;
  ${rootClass}__title-value {
    position: absolute;
    top: 20%;
    bottom: 20%;
    left: 15%;
    right: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Libe-Sans-Semicondensed', Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #FFFFFF;
    text-align: center;
  }
}

${rootClass}__text {
  background: white;
  font-family: 'Libe-Sans-Semicondensed', Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #212121;
  text-align: center;
}`
