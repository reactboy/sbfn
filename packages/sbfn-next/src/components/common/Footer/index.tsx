import styled from 'styled-components';

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterContainer>made with ♥️ by Reactboy</StyledFooterContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 0.8rem 1.6rem;
`;

const StyledFooterContainer = styled.div``;
