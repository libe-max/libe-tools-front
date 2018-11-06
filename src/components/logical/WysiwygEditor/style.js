import styled from 'styled-components'

const r = '.wysiwyg-editor'

export default styled.div`
background: ${p => p.theme.colors.baseBg};
border-radius: ${p => p.theme.units(1)};
border: 
  ${p => p.theme.units(0.25)}
  ${p => p.theme.colors.baseBorder}
  solid;
padding: ${p => p.theme.units(2)};
padding-bottom: ${p => p.theme.units(3)};
display: flex;
flex-wrap: wrap;
justify-content: center;
opacity: 0.6;
transition: opacity ${p => p.theme.transitions.quick};

&:hover {
  opacity: 0.95;
}

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
  margin-top: ${p => p.theme.units(2)};
  > * {
    margin-bottom: ${p => p.theme.units(2)};
  }
  > *:last-child {
    margin-bottom: inherit; 
  }
}

&${r}_inactive {
  display: none;
}`
