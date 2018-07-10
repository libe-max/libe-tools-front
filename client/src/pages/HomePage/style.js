import styled from 'styled-components'

const Wrapper = styled.div`

.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
}

.home-content {
  display: flex;
  z-index: 1;
  margin-top: ${p => p.theme.units(16)};
  box-sizing: border-box;
  padding-right: ${p => p.theme.units(2)};
  max-width: ${p => p.theme.units(200)};
  #tools, #bundles {
    border-right-style: solid;
    border-right:
      ${p => p.theme.units(0.25)}
      ${p => p.theme.colors.borders}
      solid;
  }
  #tools {
    box-sizing: border-box;
    flex-grow: 0;
    width: calc((100% - ${p => p.theme.units(10)}) * 0.6 + ${p => p.theme.units(6)});
    #tools-list > * {
      width: calc(50% - ${p => p.theme.units(1)});
      margin-bottom: ${p => p.theme.units(2)};
    }
    #tools-list > *:nth-child(odd) {
      margin-right: ${p => p.theme.units(2)};
    }
    @media screen and (max-width: ${p => p.theme.breakpoints.wide}) {
      #tools-list > * { width: 100%; }
      #tools-list > *:nth-child(odd) { margin-right: 0; }
    }
  }
  #tools-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  #bundles {
    box-sizing: border-box;
    flex-grow: 0;
    width: calc((100% - ${p => p.theme.units(10)}) * 0.4 + ${p => p.theme.units(4)});
    #bundles-list > * {
      margin-bottom: ${p => p.theme.units(2)};
    }
  }
  @media screen and (max-width: ${p => p.theme.breakpoints.medium}) {
    flex-direction: column;
    padding-right: 0;
    margin-top: ${p => p.theme.units(13)};
    #tools, #bundles {
      width: 100%;
      border: none
    }
    #bundles {
      margin-top: ${p => p.theme.units(5)};
    }
  }
}

.searchable-list {
  box-sizing: border-box;
  padding: 0 ${p => p.theme.units(2)};
  .search-field {
    max-width: ${p => p.theme.units(40)};
    margin-left: ${p => p.theme.units(3)};
    margin-right: ${p => p.theme.units(3)};
    margin-bottom: ${p => p.theme.units(3)};
  }
}
`

export default Wrapper
