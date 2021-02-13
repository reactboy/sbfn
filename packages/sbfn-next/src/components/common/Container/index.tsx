import styled, { css } from 'styled-components';

type ContainerType = {
  center?: boolean;
};

export const Container: React.FC<ContainerType> = (props) => {
  const { children, center = true, ...restProps } = props;

  return (
    <StyledContainer {...restProps} center={center}>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ center: boolean }>`
  width: 100%;
  max-width: 112rem;
  padding: 0.8rem 1.6rem;
  ${({ center }) =>
    center
      ? css`
          margin: 0 auto;
        `
      : null}
`;
