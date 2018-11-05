import styled from 'styled-components'

const r = '.libe-insta-story-settings'

export default styled.div`
display: flex;
align-items: center;

${r}__exporting-message {
  align-items: center;
  img {
    height: ${p => p.theme.units(1)};
    margin-left: ${p => p.theme.units(2)};
    margin-top: ${p => p.theme.units(1.1)};
    margin-bottom: ${p => p.theme.units(0.9)};
  }
}

/* States */

${r}__exporting-message {
  display: none;
}

&${r}_exporting {
  ${r}__export-button { display: none; }
  ${r}__exporting-message { display: flex; }
}`
