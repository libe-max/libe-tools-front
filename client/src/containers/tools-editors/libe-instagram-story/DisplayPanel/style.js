import styled from 'styled-components'

const Wrapper = styled.div`
height: 100%;
overflow: hidden;

.libe-instagram-story-wysiwyg__page-controls {
  margin-top: ${p => p.theme.units(3)};
  height: ${p => p.theme.units(8)};
  grid-row: 2;
  display: flex;
  flex-direction: column;
}

.libe-instagram-story-wysiwyg__pages {
  margin-top: ${p => p.theme.units(3)};
  margin-bottom: ${p => p.theme.units(3)};
  height: calc(100% - ${p => p.theme.units(17)});
  width: 200%;
  grid-row: 4;
  display: flex;
}

.libe-instagram-story-wysiwyg__slide {
  margin: 0 ${p => p.theme.units(7)};
  background: grey;
}

.libe-instagram-story-wysiwyg__pages-navigation {
  display: flex;
  margin-bottom: ${p => p.theme.units(2)}
  justify-content: center;
  .block-title {
    margin: 0 ${p => p.theme.units(3)};
  }
}

.libe-instagram-story-wysiwyg__page-display {
  display: flex;
  justify-content: center;
}`

export default Wrapper
