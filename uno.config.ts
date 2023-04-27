import { defineConfig } from 'unocss';

const positions = new Map([
  ['rel', 'relative !important'],
  ['abs', 'absolute !important'],
  ['fix', 'fixed !important'],
  ['stx', 'sticky !important'],
]);

const alignments = new Map([
  ['l', 'left'],
  ['c', 'center'],
  ['r', 'right'],
  ['j', 'justify'],
]);

const alignments2 = new Map([
  ['ct', 'center'],
  ['bw', 'space-between'],
  ['ar', 'space-around'],
  ['ev', 'space-evenly'],
]);

const displays = new Map([
  ['b', 'block'],
  ['ib', 'inline-block'],
  ['i', 'inline'],
  ['f', 'flex'],
  ['g', 'grid'],
  ['t', 'table'],
  ['n', 'none'],
  ['u', 'unset'],
  ['c', 'contents'],
]);

export default defineConfig({
  rules: [
    /*
                          SINGLE RULES
    */
    // mX: margin: Xpx
    [/^m(\d+)$/, ([_, num]) => ({ margin: `${num}px` })],
    // m-X-Y: margin: Xpx Ypx
    [/^m-(\d+)-(\d+)$/, ([_, x, y]) => ({ margin: `${x}px ${y}px` })],
    // pX: padding: Xpx
    [/^p(\d+)$/, ([_, num]) => ({ padding: `${num}px` })],
    // rxX: radius: Xpx
    [/^rx(\d+)$/, ([_, num]) => ({ 'border-radius': `${num}px` })],
    // fwX: font-weight: X00
    [/^fw(\d+)$/, ([_, num]) => ({ 'font-weight': `${num}00` })],
    // w-pct: width: x%
    [/^w-(\d+)$/, ([_, num]) => ({ width: `${num}%` })],
    // h-pct: height: x%
    [/^h-(\d+)$/, ([_, num]) => ({ height: `${num}%` })],
    // o-pct: opacity: 0.x
    [/^o-(\d+)$/, ([_, num]) => ({ opacity: `0.${num}` })],
    // z-index: z-x
    [/^z-(\d+)$/, ([_, num]) => ({ 'z-index': num })],
    // bg-abc/bg-abcd: background-color: #abc/#abcd
    [/^bg-([a-f0-9]{3,8})/, ([_, hex]) => ({ 'background-color': `#${hex}` })],
    // color-abc/color-abcd: color: #abc/#abcd
    [/^col-([a-f0-9]{3,8})/, ([_, hex]) => ({ color: `#${hex}` })],
    /*
                          FUNCTIONAL RULES
    */
    // p-(type): position: (type)
    [/^p-(.+)$/, ([_, type]) => ({ position: positions.get(type) })],
    // t(char): text-align: (char)
    [/^t(.+)$/, ([_, char]) => ({ 'text-align': alignments.get(char) })],
    // j-(xx): justify-content: (xx)
    [/^j-(.+)$/, ([_, xx]) => ({ 'justify-content': alignments2.get(xx) })],
    // d-(type): display: (type)
    [/^d-(.+)$/, ([_, type]) => ({ display: displays.get(type) })],
    /*
                          COMPOUND RULES
    */
    // rpm-x: padding, margin, radius: x
    [/^rpm-(\d+)$/, ([_, num]) => ({
      padding: `${num}px`,
      margin: `${num}px`,
      'border-radius': `${num}px`,
    })],
    // blur-x: backdrop-filter: blur(xpx) (...polyfill)
    [/^blur-(\d+)$/, ([_, num]) => ({
      'backdrop-filter': `blur(${num}px)`,
      '-webkit-backdrop-filter': `blur(${num}px)`,
      '-ms-backdrop-filter': `blur(${num}px)`,
      '-moz-backdrop-filter': `blur(${num}px)`,
    })],
    /*
                          INDIVIDUAL RULES
    */
    ["fw", { "flex-wrap": "wrap" }],
  ],
});