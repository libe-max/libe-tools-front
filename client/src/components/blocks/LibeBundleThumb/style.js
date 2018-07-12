import styled from 'styled-components'

const Wrapper = styled.div`
/* * * * * * * * * * * * * * * * * * * *
 *
 *  Loaded
 *
 * * * * * * * * * * * * * * * * * * * */
.libe-bundle-thumb__top {
  display: flex;
  margin-bottom: ${p => p.theme.units(2)};
  align-items: center;
}

.libe-bundle-thumb__bottom {
  display: flex;
  align-items: center;
  position: relative;
}

.libe-bundle-thumb__image,
.libe-bundle-thumb__image-placeholder {
  flex-grow: 0;
  flex-shrink: 0;
  width: ${p => p.theme.units(7)};
  height: ${p => p.theme.units(6)};
  margin-right: ${p => p.theme.units(2)};
}

.libe-bundle-thumb__image {
  display: block;
}

.libe-bundle-thumb__image .image {
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.colors.shadedBg};
}

.libe-bundle-thumb__image-placeholder {
  background: ${p => p.theme.colors.borders};
  display: none;
}

.libe-bundle-thumb__title-placeholder {
  display: none;
  width: 100%;
  flex-direction: column;
  justify-content: center;
}

.libe-bundle-thumb__title-placeholder div {
  height: ${p => p.theme.units(2)};
  margin-bottom: ${p => p.theme.units(1)};
  background: ${p => p.theme.colors.borders};
}

.libe-bundle-thumb__title-placeholder div:last-child {
  margin-bottom: 0;
}

.libe-bundle-thumb__meta-placeholder {
  display: none;
  width: 100%;
  height: ${p => p.theme.units(4)};
  flex-direction: column;
  justify-content: center;
}

.libe-bundle-thumb__meta-placeholder div {
  height: ${p => p.theme.units(1.25)};
  margin-bottom: ${p => p.theme.units(0.75)};
  background: ${p => p.theme.colors.borders};
}

.libe-bundle-thumb__meta-placeholder div:last-child {
  margin-bottom: 0;
}

.libe-bundle-thumb__actions {
  display: none;
  width: 100%;
  justify-content: space-between;
  position: absolute;
}

&:hover .libe-bundle-thumb__meta {
  opacity: .2;
}

&:hover .libe-bundle-thumb__actions {
  display: flex;
}

/* * * * * * * * * * * * * * * * * * * *
 *
 *  Loading
 *
 * * * * * * * * * * * * * * * * * * * */
&.libe-bundle-thumb_loading .shadow-box {
  box-shadow: unset;
  border: unset;
  background: ${p => p.theme.colors.shadedBg};
  /* [WARN]
   * Trick here to compensate the absence of
   * border in the loading version of this
   * component */
  // padding: ${p => p.theme.units(2)};
}

&.libe-bundle-thumb_loading .libe-bundle-thumb__image {
  display: none;
}

&.libe-bundle-thumb_loading .libe-bundle-thumb__image-placeholder {
  display: block;
}

&.libe-bundle-thumb_loading .libe-bundle-thumb__title-placeholder {
  display: flex;
}

&.libe-bundle-thumb_loading .libe-bundle-thumb__meta {
  display: none;
}

&.libe-bundle-thumb_loading .libe-bundle-thumb__meta-placeholder {
  display: flex;
}

&.libe-bundle-thumb_loading .libe-bundle-thumb__actions,
&.libe-bundle-thumb_loading:hover .libe-bundle-thumb__actions {
  display: none;
}`

export default Wrapper
