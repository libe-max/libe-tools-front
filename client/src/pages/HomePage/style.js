import styled from 'styled-components'
import hexToRgba from 'hex-to-rgba'

const Wrapper = styled.div`

/* ---------- STYLES ---------- */

display: grid;
min-height: 100vh;
max-height: 100vh;
grid-template-rows: auto 1fr;

.home-page__header {
  grid-row: 1;
  z-index: 2;
}

.home-page__content {
  display: flex;
  position: relative;
  grid-row: 2;
  z-index: 1;
  min-height: 100%;
  max-height: 100%;
  overflow: hidden;
  padding-top: ${p => p.theme.units(2)};
  padding-right: ${p => p.theme.units(2)};
}

.home-page__notifications {
  position: absolute;
  z-index: 2;
  bottom: ${p => p.theme.units(2)};
  right: ${p => p.theme.units(2)};
  width: calc(100% - ${p => p.theme.units(4)});
  max-width: ${p => p.theme.units(40)};
}

.home-page__create-bundle-loader {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${p => hexToRgba(p.theme.colors.clearBg, 0.8)};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.home-page__create-bundle-loader img {
  height: ${p => p.theme.units(1)};
}

.home-page__tools-panel,
.home-page__bundles-panel {
  position: relative;
  min-height: 100%;
  max-height: 100%;
  padding: 0 ${p => p.theme.units(2)};
  border-right-style: solid;
  border-right:
    ${p => p.theme.units(0.25)}
    ${p => p.theme.colors.borders}
    solid;
}

.home-page__tools-panel {
  width: 65%;
  max-width: ${p => p.theme.units(130)};
}

.home-page__bundles-panel {
  width: 35%;
  max-width: ${p => p.theme.units(70)};
}

.searchable-list {
  position: relative;
  min-height: 100%;
  max-height: 100%;
  display: grid;
  grid-template-rows: auto auto auto auto 1fr;
  overflow-y: hidden;
}

.home-page__tools-search,
.home-page__bundles-search {
  padding: ${p => p.theme.units(3)} 0;
  grid-row: 1;
}

.search-field {
  margin: 0 ${p => p.theme.units(3)};
  max-width: ${p => p.theme.units(40)};
}

.home-page__bundles-loader {
  grid-row: 2;
}

.home-page__bundles-empty {
  grid-row: 3;
}

.home-page__bundles-error {
  grid-row: 4;
}


.home-page__tools-list,
.home-page__bundles-list {
  position: relative;
  grid-row: 5;
  max-height: 100%;
  overflow-y: scroll;
  overflow-scrolling: touch;
}

.home-page__tools-list::-webkit-scrollbar,
.home-page__bundles-list::-webkit-scrollbar {
  display: none;
}

.home-page__tools-list-slider,
.home-page__bundles-list-slider {
  padding-bottom: ${p => p.theme.units(5)};
}

.home-page__bundles-loader,
.home-page__bundles-empty,
.home-page__bundles-error,
.home-page__bundles-empty-search {
  padding-top: ${p => p.theme.units(9)};
  text-align: center;
}

.home-page__bundles-loader img {
  height: ${p => p.theme.units(1)};
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
  .home-page__bundles-loader,
  .home-page__bundles-empty,
  .home-page__bundles-error,
  .home-page__bundles-empty-search {
    padding-top: ${p => p.theme.units(5)};
  }
}

/* ---------- COMPONENT STATES ---------- */
.home-page__bundles-loader,
.home-page__bundles-empty,
.home-page__bundles-error,
.home-page__bundles-empty-search,
.home-page__create-bundle-loader {
  display: none;
}

&.home-page_bundles-empty {
  .home-page__bundles-loader,
  .home-page__bundles-list,
  .home-page__bundles-error,
  .home-page__bundles-empty-search {
    display: none;
  }

  .home-page__bundles-empty {
    display: block;
  }
}

&.home-page_bundles-error {
  .home-page__bundles-loader,
  .home-page__bundles-list,
  .home-page__bundles-empty,
  .home-page__bundles-empty-search {
    display: none;
  }

  .home-page__bundles-error {
    display: block;
  }
}

&.home-page_bundles-fetching {
  .home-page__bundles-error,
  .home-page__bundles-list,
  .home-page__bundles-empty,
  .home-page__bundles-empty-search {
    display: none;
  }

  .home-page__bundles-loader {
    display: block;
  }
}

&.home-page_bundles-empty-search {
  .home-page__bundles-error,
  .home-page__bundles-list,
  .home-page__bundles-empty,
  .home-page__bundles-empty-loader {
    display: none;
  }

  .home-page__bundles-empty-search {
    display: block;
  }
}

&.home-page_create-bundle-fetching {
  .home-page__create-bundle-loader {
    display: flex;
  }  
}
`

export default Wrapper
