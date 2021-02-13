import styled from 'styled-components';
import { Container } from '@components/common';

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterContainer center={true}>made with ♥️ by reactboy</StyledFooterContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: var(--white);
  border-top: 0.1rem solid var(--gray300);
`;

const StyledFooterContainer = styled((props) => <Container {...props} />)`
  padding: 0.8rem 1.6rem;
`;
