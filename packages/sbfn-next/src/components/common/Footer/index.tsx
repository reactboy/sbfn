import styled from 'styled-components';
import { Container } from '@components/common';

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterContainer center={true}>made with ♥️ by Reactboy</StyledFooterContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 0.8rem 1.6rem;
`;

const StyledFooterContainer = styled((props) => <Container {...props} />)``;
