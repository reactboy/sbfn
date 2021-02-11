import { fetchArticles } from '@lib/strapi';
import Link from 'next/link';

type Props = {
  articles: [];
};

const Article: React.FC<Props> = (props) => {
  const { articles } = props;
  return (
    <>
      <header>
        <h1>articles</h1>
      </header>
      <main>
        <ul>
          {articles.map(({ title, id }) => (
            <li key={id}>
              <Link href={`/article/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
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
