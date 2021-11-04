import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div<{ flipped: boolean }>`
  img {
    width: 100%;
    display: block;
    border: 2px solid #FFFFFF;
    border-radius: 6px;

    &.cardFront {
      ${props => props.flipped
        ? css`
          transform: rotateY(0deg);
          transition: all ease-in 0.2s;
          position: absolute;
        `
        : css`
          transform: rotateY(90deg);
          transition-delay: 0.2s;
          position: absolute;
        `
      }
    }

    &.cardBack {
      ${props => props.flipped
        ? css`
          transform: rotateY(90deg);
          transition-delay: 0s;
        `
        : css`
          transition: all ease-in 0.2s;
          transition-delay: 0.2s;
        `
      }
    }
  }
`;