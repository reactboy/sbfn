import styled from 'styled-components';

export const Layout = (props) => {
  const { Header, children, Footer, ...restProps } = props;
  return (
    <StyledLayout {...restProps}>
      {Header && (
        <StyledHeaderLayout>
          <Header />
        </StyledHeaderLayout>
      )}
      <StyledContentLayout>{children}</StyledContentLayout>
      {Footer && (
        <StyledFooterLayout>
          <Footer />
        </StyledFooterLayout>
      )}
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  width: 100%;
  max-width: 112rem;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const StyledHeaderLayout = styled.div``;

const StyledContentLayout = styled.div`
  flex: 1;
  min-height: 100%;
  padding: 0.8rem 1.6rem;
`;

const StyledFooterLayout = styled.div`
  margin-top: auto;
`;
