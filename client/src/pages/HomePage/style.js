import styled from 'styled-components'
import hexToRgba from 'hex-to-rgba'

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
  overflow: hidden;
  max-width: ${p => p.theme.units(200)};
  padding-top: ${p => p.theme.units(2)};
  padding-right: ${p => p.theme.units(2)};
}

.home-page__tools-panel,
.home-page__bundles-panel {
  position: relative;
  min-height: 100%;
  max-height: 100%;
  overflow: hidden;
  padding: 0 ${p =>p.theme.units(2)};
  border-right-style: solid;
  border-right:
    ${p => p.theme.units(0.25)}
    ${p => p.theme.colors.borders}
    solid;
}

.home-page__tools-panel {
  width: 65%;
}

.home-page__bundles-panel {
  width: 35%;
}

.searchable-list {
  position: relative;
  min-height: 100%;
  max-height: 100%;
  overflow-y: hidden;
}

.home-page__tools-search,
.home-page__bundles-search {
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to bottom,
    ${p => p.theme.colors.clearBg},
    ${p => hexToRgba(p.theme.colors.clearBg, 0.99)},
    ${p => hexToRgba(p.theme.colors.clearBg, 0.98)},
    ${p => hexToRgba(p.theme.colors.clearBg, 0.97)},
    ${p => hexToRgba(p.theme.colors.clearBg, 0.8)}
  );
  padding: ${p => p.theme.units(3)} 0;
}

.search-field {
  margin: 0 ${p =>p.theme.units(3)};
  max-width: ${p => p.theme.units(40)};
}

.home-page__tools-list,
.home-page__bundles-list {
  z-index: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
  overflow-scrolling: touch;
}

.home-page__tools-list::-webkit-scrollbar,
.home-page__bundles-list::-webkit-scrollbar {
  display: none;
}

.home-page__tools-list-slider,
.home-page__bundles-list-slider {
  padding-top: ${p => p.theme.units(11)};
  padding-bottom: ${p => p.theme.units(5)};
}

.home-page__tools-list-slider {
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

.libe-bundle-thumb {
  margin-bottom: ${p => p.theme.units(2)};
}

@media screen and (max-width: ${p => p.theme.breakpoints.wide}) {
  .home-page__tools-panel,
  .home-page__bundles-panel {
    width: 50%;
  }

  .libe-tool-thumb {
    width: 100%;
    margin-right: 0;
  }
}

@media screen and (max-width: ${p => p.theme.breakpoints.medium}) {
  .home-page__tools-panel,
  .home-page__bundles-panel {
    width: 100%;
  }
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
