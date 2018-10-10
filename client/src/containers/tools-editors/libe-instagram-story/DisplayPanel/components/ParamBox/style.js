import styled from 'styled-components'

const rootClass = `.libe-insta-param-box`

export default styled.div`
padding: ${p => p.theme.units(2)};
border-radius: ${p => p.theme.units(1)};
background: ${p => p.theme.colors.baseBg};
border: solid
  ${p => p.theme.units(0.25)}
  ${p => p.theme.colors.baseBorder};

${rootClass}__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${p =>p.theme.units(3)};
}`
