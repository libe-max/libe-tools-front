import styled from 'styled-components'

const Wrapper = styled.div`
width: 100%;

.image {
  width: calc(100% + ${p => p.theme.units(4)});
  height: ${p => p.theme.units(20)};
  margin-left: ${p => p.theme.units(-2)};
  margin-top: ${p => p.theme.units(-2)};
}

.libe-tool-thumb__content {
  margin-top: ${p => p.theme.units(2)};
}

.libe-tool-thumb__content > .block-title { 
  margin-bottom: ${p => p.theme.units(1)};
}

.libe-tool-thumb__content > .paragraph {
  margin-bottom: ${p => p.theme.units(2)};
}

.libe-tool-thumb__actions {
  display: flex;
  justify-content: space-between;
}

.libe-tool-thumb__actions > button:first-child { 
  margin-right: ${p => p.theme.units(2)};
}`

export default Wrapper
