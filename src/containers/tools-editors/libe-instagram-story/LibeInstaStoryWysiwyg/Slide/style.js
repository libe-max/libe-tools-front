import styled from 'styled-components'
import libeIcon from '../assets/libe-icon.png'

const r = '.libe-insta-slide'

export default styled.div`

/* Whole slide */
position: relative;
width: 1080px;
height: 1920px;
background: white;

// [WIP] make sure fontsfaces are inherited from here and not from the app

/* Background images */
${r}__background-images {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
}

${r}__background-image {
  width: 100%;
  height: 100%;
  flex-shrink: 1;
  background-position: center center;
  background-repeat: no-repeat;
}

/* Icon signature */
${r}__icon-signature {
  position: absolute;
  top: 1663px;
  left: calc(50% - 75px);
  width: 150px;
}

${r}__icon-signature img {
  width: 100%;
  height: auto;
}

/* Icon title */
${r}__icon-title {
  overflow: hidden;
  background-image: url(${libeIcon});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

${r}__icon-title span {
  position: absolute;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 70%;
  margin-top: auto;
  margin-bottom: auto;
  font-family: 'Libe-Sans-Semicondensed', Helvetica, Arial, sans-serif;
  font-size: 56px;
  line-height: 56px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #FFFFFF;
  text-align: center;
}

/* Text panel */
${r}__text-panel {
  background: #FFFFFF;
  padding: 24px;
  font-family: 'Libe-Sans-Semicondensed', Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 62px;
  line-height: 72px;
  font-style: normal;
  letter-spacing: 0.03em;
  text-transform: none;
  color: #212121;
  text-align: center;
}

${r}__text-panel_big {
  font-size: 108px;
  line-height: 108px;
  text-transform: uppercase;
}

/* Image */
${r}__image img {
  max-width: 100%;
  height: auto;
}

/* Label title */
${r}__label-title {
  padding: 12px;
  padding-top: 18px;
  background: #E4214B;
  font-family: 'Libe-Sans-Semicondensed', Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 50px;
  line-height: 50px;
  font-style: normal;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #FFFFFF;
  text-align: center;
}

/* Paragraph */
${r}__paragraph {
  font-family: 'Libe-Sans', Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 62px;
  line-height: 71px;
  font-style: normal;
  letter-spacing: 0.03em;
  text-transform: normal;
  color: #212121;
  text-align: center;
}

/* Quote */
${r}__quote {
  font-family: 'Libe-Sans-Semicondensed', Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 122px;
  line-height: 142px;
  font-style: normal;
  letter-spacing: 0.03em;
  text-transform: normal;
  color: #212121;
}

/* Quote sign */
${r}__quote-sign {
  width: 360px;
  opacity: 0.5;
  mix-blend-mode: multiply;
}

${r}__quote-sign img {
  width: 100%;
  height: auto;
}

/* Quote author */
${r}__quote-author {
  font-family: 'Synthese', Helvetica, Arial, sans-serif;
  font-stretch: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 60px;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: uppercase;
  color: #212121;
  text-align: right;
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  DISPLAYS
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/* Cover display */
${r}__cover-display {
  position: absolute;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  left: 50%;
  top: 45%;
  width: 100%;
  max-width: 780px;
}

${r}__cover-display
  ${r}__icon-title {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    width: 448px;
    height: 160px;
}

${r}__cover-display
  ${r}__text-panel {
    margin-left: auto;
    margin-right: auto;
    margin-top: -12px;
    width: -webkit-fit-content;
    width: fit-content;
}

/* Image and text display */
${r}__image-and-text-display {
  position: absolute;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  top: 45%;
  left: 50%;
  width: 100%;
  max-width: 780px;
}

${r}__image-and-text-display
  ${r}__image {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 54px;
    width: -webkit-fit-content;
    width: fit-content;
}

${r}__image-and-text-display
  ${r}__label-title {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 36px;
    width: -webkit-fit-content;
    width: fit-content;
}

/* Quote on background image display */
${r}__quote-on-bg-image-display {
  position: absolute;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  top: 45%;
  left: 50%;
  width: 100%;
  max-width: 780px;
}

${r}__quote-on-bg-image-display
  ${r}__quote-sign {
    position: relative;
    top: 0;
}

${r}__quote-on-bg-image-display
  ${r}__quote-sign img {
    position: absolute;
    left: -26px;
    top: -80px;
}

${r}__quote-on-bg-image-display
  ${r}__quote-and-author {
    position: relative;
}

${r}__quote-on-bg-image-display
  ${r}__quote {
    margin-bottom: 100px;
}

/* Text on background image display */
${r}__text-on-bg-image-display {
  position: absolute;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  top: 45%;
  left: 50%;
  width: 100%;
  max-width: 780px;
}

${r}__text-on-bg-image-display
  ${r}__text-panel {
    margin-left: auto;
    margin-right: auto;
    width: -webkit-fit-content;
    width: fit-content;
    background: rgba(255, 255, 255, 0.7);
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *  MODIFIERS
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/* Default */
${r}__cover-display,
${r}__image-and-text-display,
${r}__bg-image-display,
${r}__quote-on-bg-image-display,
${r}__text-on-bg-image-display {
  display: none;
}

/* Cover display */
&${r}_cover-display
  ${r}__cover-display {
    display: block;
}

&${r}_cover-display
  ${r}__icon-signature {
    display: none;
}

&${r}_cover-display${r}_hidden-title
  ${r}__icon-signature {
    display: block;
}

&${r}_cover-display${r}_hidden-title
  ${r}__icon-title {
    display: none;
}

&${r}_cover-display${r}_hidden-title
  ${r}__text-panel {
    margin-top: 0px;
}

/* Image and text display */
&${r}_image-and-text-display
  ${r}__background-images {
    display: none;
}

&${r}_image-and-text-display
  ${r}__image-and-text-display {
    display: block;
}

&${r}_image-and-text-display${r}_hidden-title
  ${r}__label-title {
    display: none;
  }
}

/* Background image display */
&${r}_bg-image-display
  ${r}__bg-image-display {
    display: block;
}

/* Quote on background image display */
&${r}_quote-on-bg-image-display
  ${r}__background-images {
    opacity: 0.3;
}

&${r}_quote-on-bg-image-display
  ${r}__quote-on-bg-image-display {
    display: block;
}

/* Text on background image display */
&${r}_text-on-bg-image-display
  ${r}__text-on-bg-image-display {
    display: block;
}`
