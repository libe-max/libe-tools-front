import styled from 'styled-components'

const r = '.wysiwyg-editor'

export default styled.div`
background: red;
color: white;
display: flex;
flex-wrap: wrap;

${r}__title {
  flex-grow: 1;
}

${r}__close {
  flex-shrink: 1;
}

${r}__children {
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
}

&${r}_inactive {
  display: none;
}`
