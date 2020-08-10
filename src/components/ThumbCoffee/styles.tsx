import styled from 'styled-components';

export const channel = styled.p``;

export const Avatar = styled.img`
  position: absolute;
  top: var(--space);
  left: var(--space);
  width: 60rem;
  height: 60rem;
  border-radius: 50%;
  border: 2rem solid var(--color-frontend);
  transform: translateX(calc((100% + var(--space)) * -1));
  opacity: 0;
  transition: transform 200ms linear, opacity 100ms linear;
`;

export const Thumb = styled.img`
  width: 100%;
`;

export const WrapperThumb = styled.figure`
    --space: 10rem;
  position: relative;
  border-radius: 4px;
  border: 4px solid var(--color-frontend);
  max-width: 640px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 100ms linear;

  &:hover {
    --move: calc(var(--space) * -1);
    transform: translate(var(--move), var(--move));
    transition: transform 100ms linear;
    border: 8px solid var(--color-frontend);

    & > ${Avatar} {
      transform: translateX(0);
      opacity: 1;
      transition: transform 100ms 150ms linear, opacity 300ms 100ms linear;
    }
  }
`;