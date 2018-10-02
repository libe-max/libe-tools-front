import styled from 'styled-components'

const Wrapper = styled.div`
height: 100%;
overflow: hidden;
background: limegreen;

.libe-insta-story-wysiwyg__slide-controls {
  margin-top: ${p => p.theme.units(3)};
  height: ${p => p.theme.units(8)};
  grid-row: 2;
  display: flex;
  flex-direction: column;
}

.libe-insta-story-wysiwyg__slides {
  margin-top: ${p => p.theme.units(3)};
  margin-bottom: ${p => p.theme.units(3)};
  height: calc(100% - ${p => p.theme.units(17)});
  width: 200%;
  grid-row: 4;
  display: flex;
}

.libe-insta-story-wysiwyg__slides-spacer {
  height: 100%;
  width: 0px;
  background: blue;
  flex-grow: 0;
  flex-shrink: 0;
}

.libe-insta-story-wysiwyg__slide {
  margin: 0 ${p => p.theme.units(7)};
  background: grey;
  flex-grow: 0;
  flex-shrink: 0;
}

.libe-insta-story-wysiwyg__slides-navigation {
  display: flex;
  margin-bottom: ${p => p.theme.units(2)}
  justify-content: center;
  .block-title {
    margin: 0 ${p => p.theme.units(3)};
  }
}

.libe-insta-story-wysiwyg__slide-display {
  display: flex;
  justify-content: center;
}`

export default Wrapper
