import styled from 'styled-components';
import { Link } from '@components/common';

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
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 112rem;
  padding: 0.8rem 1.6rem;
  margin: 0 auto;
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
