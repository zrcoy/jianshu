import {createGlobalStyle } from 'styled-components';

export const GlobalStyleFont = createGlobalStyle`　

@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1610243856408'); /* IE9 */
  src: url('./iconfont.eot?t=1610243856408#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1610243856408') format('woff'),
  url('./iconfont.ttf?t=1610243856408') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1610243856408#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`

