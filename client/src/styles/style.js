import { injectGlobal } from 'styled-components'

injectGlobal`
  html { box-sizing: border-box; }
  *, *::before, *::after { box-sizing: inherit; }
`
