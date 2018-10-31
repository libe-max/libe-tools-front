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
  margin-bottom: ${p => p.theme.units(3)};
}

${rootClass}__params > * {
  margin-bottom: ${p => p.theme.units(3)};
}

${rootClass}__params > *:last-child {
  margin-bottom: 0;
}

${rootClass}__params > ${rootClass}__section > * {
  margin-bottom: ${p => p.theme.units(2)}; 
}

${rootClass}__params > ${rootClass}__section > *:last-child {
  margin-bottom: 0;
}`
