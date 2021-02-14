import { fetchArticles } from '@lib/strapi';
import { Article } from '@components/templates/article';

type Props = {
  articles: [];
};

const ArticlePage: React.FC<Props> = (props) => {
  const { articles } = props;
  return (
    <main>
      <Article articles={articles} />
    </main>
  );
};

export default ArticlePage;

export const getStaticProps = async (_context) => {
  const articles = await fetchArticles();
  return {
    props: {
      articles,
    },
  };
};
