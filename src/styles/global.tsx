import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'TitilliumWeb';
  src: url('/fonts/TitilliumWeb-Regular.ttf') format('truetype');
}

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }
  body {
    line-height: 1;
    background-color: #cac8c4;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  /* remember to define focus styles! */
  :focus {
    outline: 0;
  }

  /* remember to highlight inserts somehow! */
  ins {
    text-decoration: none;
  }
  del {
    text-decoration: line-through;
  }

  /* tables still need 'cellspacing="0"' in the markup */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  html, body {
    font-family: TitilliumWeb;
  }
  // add for me
  a:link { 
    text-decoration:none; 
  } 
  // Added for Loading center
body, html {
    height: 100%;
    text-align: center;
}

#__next {
  height: 100%;
}
`
export default GlobalStyle
