import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Header, Layout, Footer } from '@components/common';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *,*:before,*:after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Yu Gothic", YuGothic, Verdana, Meiryo, "M+ 1p", sans-serif;
    }
    a{
        text-decoration: none;
    }
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
