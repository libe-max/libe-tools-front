import styled from 'styled-components'

const Wrapper = styled.div`

display: grid;
min-height: 100vh;
max-height: 100vh;
grid-template-rows: auto 1fr;

.home-page__header {
  grid-row: 1;
}

.home-page__content {
  display: flex;
  grid-row: 2;
  min-height: 100%;
  max-height: 100%;
  max-width: ${p => p.theme.units(200)};
  padding-top: ${p => p.theme.units(5)};
  padding-right: ${p => p.theme.units(2)};
}

.home-page__tools-panel,
.home-page__bundles-panel {
  position: relative;
  min-height: 100%;
  max-height: 100%;
  overflow-y: scroll;
  overflow-scrolling: touch;
  padding: 0 ${p =>p.theme.units(2)};
  border-right-style: solid;
  border-right:
    ${p => p.theme.units(0.25)}
    ${p => p.theme.colors.borders}
    solid;
}

.home-page__tools-panel::-webkit-scrollbar,
.home-page__bundles-panel::-webkit-scrollbar {
  display: none;
}

.home-page__tools-panel {
  width: 65%;
}

.home-page__bundles-panel {
  width: 35%;
}

@media screen and (max-width: ${p => p.theme.breakpoints.wide}) {
  .home-page__tools-panel,
  .home-page__bundles-panel {
    width: 50%;
  }
}

@media screen and (max-width: ${p => p.theme.breakpoints.medium}) {
  .home-page__tools-panel,
  .home-page__bundles-panel {
    width: 100%;
  }
}

.home-page__tools-list {
  display: flex;
  flex-wrap: wrap;
}

.libe-tool-thumb {
  flex-grow: 0;
  flex-shrink: 0;
  width: calc(50% - ${p => p.theme.units(1)});
  margin-bottom: ${p => p.theme.units(2)};
}

.libe-tool-thumb:nth-child(odd) {
  margin-right: ${p => p.theme.units(2)};
}

@media screen and (max-width: ${p => p.theme.breakpoints.wide}) {
  .libe-tool-thumb {
    width: 100%;
    margin-right: 0;
  }
}

.libe-bundle-thumb {
  margin-bottom: ${p => p.theme.units(2)};
}




/*
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
}

.home-page__content {
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
*/
`

export default Wrapper
