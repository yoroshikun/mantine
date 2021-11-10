import { getScrollWidth } from './get-scroll-width';

export const getLockStyles = ({ disableBodyPadding }) => {
  const scrollWidth = disableBodyPadding ? null : getScrollWidth();
  const windowHeight = window.innerHeight;

  const styles = `body {
        --removed-scroll-width: ${scrollWidth}px;
        --window-height: ${windowHeight}px;
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        height: var(--window-height) !important;
        ${scrollWidth ? 'padding-right: var(--removed-scroll-width) !important;' : ''}
        `;

  return styles;
};
