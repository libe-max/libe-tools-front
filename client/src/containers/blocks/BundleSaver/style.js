import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
align-items: center;

.bundle-saver__save-button {
  display: none;
  height: 0;
  align-items: center;
}

.bundle-saver__save-button .button {
  
}

&.bundle-saver_unsaved {
  .bundle-saver__saved-paragraph {
    display: none;
  }

  .bundle-saver__save-button {
    display: flex;
  }
}
`

export default Wrapper
