import styled from 'styled-components'
import hexToRgba from 'hex-to-rgba' 

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
  background-color: ${p => p.theme.colors.baseBg};
  background-image: url('/images/tiled-transparency-background.png');
}

.bundle-page__bundle-settings-box {
  z-index: 2;
  width: 400px;
  overflow-y: scroll;
  overflow-scrolling: touch;
}

.bundle-page__fetching-bundle-loader {
  z-index: 10;
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  background: ${p => hexToRgba(p.theme.colors.baseBg, 0.8)};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.bundle-page__fetching-bundle-loader img {
  height: ${p => p.theme.units(1)};
}

.bundle-page__bundle-preview-box-slider {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding: ${p => p.theme.units(2)};
}

.bundle-page__bundle-display {
  display: none;
}

.bundle-page__no-bundle-display {
  display: block;
}

.bundle-page__bundle-settings-box-slider {
  width: 100%;
  min-height: 100%;
  padding: ${p => p.theme.units(2)};
  background: ${p => p.theme._shade().colors.baseBg};
  border-left:
    ${p => p.theme._shade().colors.baseBorder}
    ${p => p.theme.units(0.25)}
    solid;
}

.bundle-page__bundle-preview-box::-webkit-scrollbar,
.bundle-page__bundle-settings-box::-webkit-scrollbar {
  display: none;
}

.bundle-page__bundle-general-settings {
  margin-bottom: ${p => p.theme.units(5)};
}

.bundle-page__bundle-custom-settings {
  display: none;
}

.bundle-page__bundle-general-settings > *,
.bundle-page__bundle-custom-settings > * {
  margin-bottom: ${p => p.theme.units(3)};
}

.bundle-page__bundle-general-settings > *:last-child,
.bundle-page__bundle-custom-settings > *:last-child {
  margin-bottom: unset;
}

.bundle-page__actions {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  height: ${p => p.theme.units(6)};
}

.bundle-page__actions > * {
  margin-left: ${p => p.theme.units(4)};
}

.bundle-page__actions > *:first-child {
  margin-left: 0;
  margin-right: auto;
}

/* ---------- STATES ---------- */

&.bundle-page_fetching-bundle {
  .bundle-page__fetching-bundle-loader {
    display: flex;
  }
}

&.bundle-page_with-custom-settings {
  .bundle-page__bundle-custom-settings {
    display: block;
  }
}

&.bundle-page_with-display {
  .bundle-page__bundle-display {
    display: block;
  }

  .bundle-page__no-bundle-display {
    display: none;
  }
}`

export default Wrapper
