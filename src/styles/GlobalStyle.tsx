import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
import palette from './palette';

const globalStyle = css`
  ${reset};

  * {
    box-sizing: border-box;
  }
  body {
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

export default GlobalStyle;
