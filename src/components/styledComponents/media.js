import { css } from 'styled-components';

const sizes = {
  desktop: 1200,
  tablet: 768,
  phone: 480,
  phoneLandscape: 568,
  miniphone: 320,
  smallHeight: 649,
};

export const media = Object.keys(sizes).reduce((accum, screen) => {
  screen === 'phoneLandscape'
    ? (accum[screen] = (...args) => css`
        @media screen and (max-height: ${sizes.phone}px) and (orientation: landscape) {
          ${css(...args)}
        }
      `)
    : (accum[screen] = (...args) => css`
        @media screen and (max-width: ${sizes[screen]}px) {
          ${css(...args)}
        }
      `);
  return accum;
}, {});
