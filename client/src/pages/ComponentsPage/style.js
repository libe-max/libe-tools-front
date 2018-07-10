import styled from 'styled-components'

const Wrapper = styled.div`
.component-row {
  width: 100%;
  padding: ${props => props.theme.units(2)} 0;

  .component-row__title {
    font-weight: 600;
    padding: ${props => props.theme.units(1)};
    background: ${props => props.theme.colors.shadedBg};
    font-family: ${props => props.theme.fonts.easy};
    color: ${props => props.theme.colors.lightText};
    margin-bottom: ${props => props.theme.units(1)};
  }

  .component-row__content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
  }
}

.component-box {
  box-sizing: border-box;
  padding: 
    ${props => props.theme.units(2)}
    ${props => props.theme.units(1)};
  
  .component-box__title {
    font-family: ${props => props.theme.fonts.easy};
    color: ${props => props.theme.colors.lightText};
    margin-bottom: ${props => props.theme.units(2)};
    width: 100%;
  }

  .component-box__content > * {
    margin-bottom: ${props => props.theme.units(2)};
  }
}`

export default Wrapper
