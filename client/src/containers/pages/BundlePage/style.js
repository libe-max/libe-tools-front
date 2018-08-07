import styled from 'styled-components'

const Wrapper = styled.div`

/* ---------- STYLES ---------- */

display: grid;
min-height: 100vh;
max-height: 100vh;
grid-template-rows: auto 1fr auto;

.bundle-page__header {
  grid-row: 1;
  z-index: 3;
}

.bundle-page__content {
  display: flex;
  position: relative;
  grid-row: 2;
  z-index: 1;
  min-height: 100%;
  max-height: 100%;
  overflow: hidden;
}

.bundle-page__status-bar {
  grid-row: 3;
  z-index: 2;
}

.bundle-page__notifications {
  position: absolute;
  z-index: 3;
  bottom: ${p => p.theme.units(2)};
  right: ${p => p.theme.units(2)};
  width: calc(100% - ${p => p.theme.units(4)});
  max-width: ${p => p.theme.units(40)};
}

.bundle-page__bundle-preview-box {
  z-index: 1;
  width: calc(100% - 400px);
  overflow-y: scroll;
  overflow-scrolling: touch;
  background: url('/images/tiled-transparency-background.png');
}

.bundle-page__bundle-settings-box {
  z-index: 2;
  width: 400px;
  overflow-y: scroll;
  overflow-scrolling: touch;
}

.bundle-page__bundle-preview-box-slider {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding: ${p => p.theme.units(2)};
}

.bundle-page__bundle-settings-box-slider {
  width: 100%;
  min-height: 100%;
  padding: ${p => p.theme.units(2)};
  background: ${p => p.theme.colors.shadedBg};
  border-left:
    ${p => p.theme.colors.borders}
    ${p => p.theme.units(0.25)}
    solid;
}

.bundle-page__bundle-preview-box::-webkit-scrollbar,
.bundle-page__bundle-settings-box::-webkit-scrollbar {
  display: none;
}`

export default Wrapper
