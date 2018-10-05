import styled from 'styled-components'

const Wrapper = styled.div`
height: 100%;
position: relative;
background: ${p => p.theme.colors.baseBg};

/* States */

&.libe-insta-slide-wysiwyg_cover {
  .libe-insta-wysiwyg-component[data-name="multiple-image"] {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .libe-insta-multiple-image-wysiwyg {
      width: 100%;
      height: 100%;
    }
  }

  .libe-insta-wysiwyg-component[data-name="title-plus-heading-block"] {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .libe-insta-wysiwyg-component[data-name="title-in-logo"] {
    z-index: 2;
    // .libe-insta-wysiwyg-component[data-name="title-in-logo"] {
    //   top: 20%;
    //   left: 50%;
    //   transform: translateX(-50%);
    //   max-width: calc(100% * 39/54);
  }

  .libe-insta-wysiwyg-component[data-name="main-heading-panel"] {
    z-index: 3;
  //   top: 50%;
  //   left: 50%;
  //   transform: translateX(-50%);
  //   max-width: calc(100% * 39/54);
  }
}`

export default Wrapper
