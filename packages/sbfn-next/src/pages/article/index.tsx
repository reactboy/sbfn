import { fetchArticles } from '@lib/strapi';
import { Link, Container } from '@components/common';

type Props = {
  articles: [];
};

const Article: React.FC<Props> = (props) => {
  const { articles } = props;
  return (
    <Container>
      <main>
        <ul>
          {articles.map(({ title, id }) => (
            <li key={id}>
              <Link href={`/article/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </Container>
  );
};

export default Article;

export const getStaticProps = async (_context) => {
  const articles = await fetchArticles();
  return {
    props: {
      articles,
    },
  };
};
