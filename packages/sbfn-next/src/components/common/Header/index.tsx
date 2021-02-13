import styled from 'styled-components';
import { Link, Container } from '@components/common';

const HEADER_NAV_ITEM = [
  {
    path: '/article',
    text: '記事一覧',
  },
  {
    path: '/auth',
    text: 'ログイン',
  },
];

export const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer center={true}>
        <StyledHeaderLogoWrapper>
          <Link href="/">
            <StyledHeaderLogoContent>購読幻想</StyledHeaderLogoContent>
          </Link>
        </StyledHeaderLogoWrapper>
        <StyledHeaderNavigationWrapper>
          {HEADER_NAV_ITEM.map(({ path, text }, i) => (
            <StyledHeaderNavigationItem key={i}>
              <Link href={path}>{text}</Link>
            </StyledHeaderNavigationItem>
          ))}
        </StyledHeaderNavigationWrapper>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  background-color: var(--white);
  box-shadow: inset 0 -0.1rem var(--gray300);
`;

//FIXME(aida) https://github.com/styled-components/styled-components/issues/1449#issuecomment-520821415
const StyledHeaderContainer = styled((props) => <Container {...props} />)`
  display: flex;
  justify-content: space-between;
`;

const StyledHeaderLogoWrapper = styled.div``;

const StyledHeaderLogoContent = styled.p`
  font-size: 3.2rem;
`;

const StyledHeaderNavigationWrapper = styled.ul`
  display: flex;
`;

const StyledHeaderNavigationItem = styled.li`
  font-size: 1.6rem;
  :not(:first-child) {
    margin-left: 0.8rem;
  }
`;
