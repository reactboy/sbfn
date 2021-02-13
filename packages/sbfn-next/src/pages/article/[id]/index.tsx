import { fetchArticles, fetchArticleById } from '@lib/strapi';
import { Link, Container } from '@components/common';

const ArticleDetail = (props) => {
  const { article } = props;
  const { title, body, created_at } = article;
  return (
    <Container>
      <header>
        <h1>{title}</h1>
        <span>{created_at}</span>
      </header>
      <main>{body}</main>
      <footer>
        <Link href="/article">一覧に戻る</Link>
      </footer>
    </Container>
  );
};

export default ArticleDetail;

export const getStaticProps = async (context) => {
  const {
    params: { id },
  } = context;
  const article = await fetchArticleById(id);

  return {
    props: { article },
  };
};

export const getStaticPaths = async () => {
  const articles = await fetchArticles();
  const paths = articles.map((article) => `/article/${article.id}`);

  //TODO(aida) 何でこっちが動かないのか調べる https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
  // const paths = articles.map((article) => ({ params: { id: article.id } }));
  // console.log('paths', paths);
  return {
    paths,
    fallback: false,
  };
};
