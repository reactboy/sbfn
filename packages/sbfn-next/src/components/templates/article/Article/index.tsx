import styled from 'styled-components';

import { Link, Container } from '@components/common';

export const Article = (props) => {
  const { articles } = props;
  return (
    <Container>
      <StyledArticleList>
        {articles.map(({ title, id }) => (
          <StyledArticleItem key={id}>
            <Link href={`/article/${id}`}>{title}</Link>
          </StyledArticleItem>
        ))}
      </StyledArticleList>
    </Container>
  );
};

const StyledArticleList = styled.ul``;

const StyledArticleItem = styled.li`
  //MEMO(aida) このボックス型のスタイルは使い回せないか検討する
  background-color: var(--white);
  border-radius: 1rem;
  border: 0.1rem solid var(--gray300);
  font-size: 1.6rem;
  :not(:first-child) {
    margin-top: 1rem;
  }
  a {
    padding: 0.8rem 1.6rem;
    display: block;
    width: 100%;
    min-height: 4rem;
  }
`;
