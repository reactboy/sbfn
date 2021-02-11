import axios from 'axios';

//MEMO(aida) next.config.jsのrewriteが効かない。ブラウザでは動いてるっぽいのでサーバサイドで動かそうとするとダメなのかも。 https://nextjs.org/docs/api-reference/next.config.js/rewrites
const { NEXT_STRAPI_END_POINT } = process.env;

//API 記事一覧の取得
export const fetchArticles = async () => {
  const res = await axios.get(`${NEXT_STRAPI_END_POINT}/articles`);
  return res.data;
};

//API 記事詳細の取得
export const fetchArticleById = async (id: string) => {
  const res = await axios.get(`${NEXT_STRAPI_END_POINT}/articles/${id}`);
  return res.data;
};
