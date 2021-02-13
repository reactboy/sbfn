import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
import { Header, Layout, Footer } from '@components/common';

//TODO(aida) utils/styles に切り出す。
const GlobalStyle = createGlobalStyle`
  ${reset}
  //MEMO(aida) cssの中に入れないと自動整形が効かない。
  ${css`
    :root {
      --black: #333333;
      --white: #ffffff;
      --gray: #f3f3f3;
      --dark400: var(--black);
      --gray400: var(--gray);
      --gray300: #eaeaea;
    }
    *,
    *:before,
    *:after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html {
      font-size: 62.5%;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Yu Gothic', YuGothic,
        Verdana, Meiryo, 'M+ 1p', sans-serif;
      background-color: var(--gray400);
    }
    a {
      color: var(--dark400);
      text-decoration: none;
    }
  `}
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Layout Header={() => <Header />} Footer={() => <Footer />}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
