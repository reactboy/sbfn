import { fetchArticles, fetchArticleById } from '@lib/strapi';
import { ArticleDetail } from '@components/templates/article';

const ArticleDetailPage = (props) => {
  const { article } = props;

  return <ArticleDetail article={article} />;
};

export default ArticleDetailPage;

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
