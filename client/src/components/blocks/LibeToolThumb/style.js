import styled from 'styled-components'

const Wrapper = styled.div`
width: 100%;

.image {
  width: 100%;
  height: ${p => p.theme.units(20)};
  /* [WARN]
   * Trick here to compensate the border
   * width in ShadowBox component, since
   * its height is not constrained */
  margin-top: ${p => p.theme.units(-0.25)};
}

.libe-tool-thumb__content {
  /* [WARN]
   * Trick here to compensate the border
   * width in ShadowBox component, since
   * its height is not constrained */
  padding: ${p => p.theme.units(2 - 0.25)};
  padding-top: ${p => p.theme.units(2)};
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
