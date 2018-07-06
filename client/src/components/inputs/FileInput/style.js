import styled from 'styled-components'

const Wrapper = styled.div`

/* ---------- STYLES ---------- */

.file-input__input input {
  display: none;
}

.file-input__input {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
}

.file-input__fake-input {
  position: relative;
  width: 100%;
  height: ${p => p.theme.units(5)};
  border-style: solid;
  border-width: ${p => p.theme.units(0.25)};
  border-color: ${p => p.theme.colors.borders};
  border-radius: ${p => p.theme.units(2.5)};
  padding:
    ${p => p.theme.units(1)}
    ${p => p.theme.units(2)};
  /* Compensation of border thickness in padding */
  padding-top: ${p => p.theme.units(1 - 0.25)};
  overflow: hidden;
  cursor: pointer;
}

.file-input__fake-input::after {
  content: '';
  position: absolute;
  width: ${p => p.theme.units(2)};
  height: ${p => p.theme.units(5)};
  background: ${p => p.theme.colors.clearBg};
  top: 0;
  right: 0;
}

.file-input__filename {
  width: ${p => p.theme.units(1000)};
}

.file-input__cancel-file-select,
.file-input__upload-file,
.file-input__upload-loader {
  flex-grow: 0;
  flex-shrink: 0;
  margin-left: ${p => p.theme.units(1)};
}

.file-input__image-source {
  position: relative;
  display: flex;
  border-radius: ${p => p.theme.units(1)};
  background: ${p => p.theme.colors.dimBg};
  cursor: pointer;
}

.file-input__image-source .image {
  transition: opacity ${p => p.theme.transitions.quick};
  max-height: ${p => p.theme.units(40)};
}

.file-input__image-source:hover .image {
  opacity: 0.4;
}

.file-input__image-source-infos-and-actions {
  display: none;
  opacity: 0;
  transition: opacity ${p => p.theme.transitions.quick};
  justify-content: space-between;
  flex-wrap: wrap;
  position: absolute;
  bottom: ${p => p.theme.units(2)};
  left: ${p => p.theme.units(2)};
  right: ${p => p.theme.units(2)};
  overflow: hidden;
}

.file-input__image-source:hover .file-input__image-source-infos-and-actions {
  display: flex;
  opacity: 1;
}

.file-input__image-source-infos {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}

.file-input__image-source-infos > * {
  flex-grow: 0;
  flex-shrink: 0;
}

.file-input__image-source-infos .file-input__sourcesize .paragraph,
.file-input__image-source-infos .file-input__sourcetype .paragraph {
  color: ${p => p.theme.colors.lightClearText};
}

.file-input__image-source-infos .file-input__sourcename .paragraph {
  color: ${p => p.theme.colors.clearText};
}

.file-input__other-source .shadow-box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: hidden;
}

.file-input__image-source-infos,
.file-input__other-source-infos {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  margin-bottom: ${p => p.theme.units(2)};
}

/* ---------- COMPONENT STATES ---------- */

/* Default */
.file-input__filename,
.file-input__image-source,
.file-input__other-source,
.file-input__cancel-file-select,
.file-input__upload-file,
.file-input__upload-loader {
  display: none;
}

/* With source file of image type */
&.file-input_with-image-source {
  .file-input__input { display: none; }
  .file-input__image-source { display: block; }
}

/* With source file of any other type */
&.file-input_with-other-source {
  .file-input__input { display: none; }
  .file-input__other-source { display: flex; }
}

/* With a file selected in the input */
&.file-input_with-file {
  .file-input__input { display: flex; }
  .file-input__filename,
  .file-input__cancel-file-select,
  .file-input__upload-file { display: block; }
  .file-input__filename-placeholder,
  .file-input__image-source,
  .file-input__other-source { display: none; }
}`

export default Wrapper
