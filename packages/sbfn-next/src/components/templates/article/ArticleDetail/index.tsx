import Markdown from 'markdown-to-jsx';
import { Link, Container } from '@components/common';

export const ArticleDetail = (props) => {
  const { article } = props;
  const { title, created_at, body } = article;

  return (
    <Container>
      <header>
        <h1>{title}</h1>
        <span>{created_at}</span>
      </header>
      <main>
        <Markdown children={body} />
      </main>
      <footer>
        <Link href="/article">一覧に戻る</Link>
      </footer>
    </Container>
  );
};
