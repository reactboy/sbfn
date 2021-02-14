import styled from 'styled-components';
import { Container, Link } from '@components/common';
import { topWaveDarkSVG, topWaveGraySVG } from '@assets/images';

const DESCRIPTION = [
  '多くのサブスクリプションサービスに溢れる昨今。',
  '定期的にお金を支払う対価として、サービスを享受し人生は豊かになる。',
  'サービスが多く存在する今、何に対価を支払い、何を享受すべきか。',
  '気づけば払う対価は許容できないほどに膨れ上がっている。',
  '本当に享受すべきサービスに幻想を抱く。',
];

export const Top = () => {
  return (
    <StyledTop>
      <StyledTopContainer>
        <StyledTopHero>
          <StyledTopHeroContainer>
            <StyledTopHeroLeft>
              <StyledTopHeroLeftContainer>
                <StyledTopHeroHeadLine>購読を幻想する</StyledTopHeroHeadLine>
                <StyledTopHeroSubLine>サブスクリプションに溺れる</StyledTopHeroSubLine>
              </StyledTopHeroLeftContainer>
            </StyledTopHeroLeft>
            <StyledTopHeroRight>
              <StyledHeroArticleList>
                <StyledHeroArticleItem>最新記事</StyledHeroArticleItem>
                <StyledHeroArticleItem>最新記事</StyledHeroArticleItem>
                <StyledHeroArticleItem>最新記事</StyledHeroArticleItem>
                <StyledHeroArticleItem>最新記事</StyledHeroArticleItem>
                <StyledHeroArticleItem>最新記事</StyledHeroArticleItem>
              </StyledHeroArticleList>
              <StyledHeroMoreArticle>
                <Link href="/article">もっと見る</Link>
              </StyledHeroMoreArticle>
            </StyledTopHeroRight>
          </StyledTopHeroContainer>
        </StyledTopHero>
        <StyledTopIntroduction>
          <StyledTopIntroductionHeader>購読幻想</StyledTopIntroductionHeader>
          <StyledDescriptionContainer>
            {DESCRIPTION.map((description, i) => (
              <StyledDescription key={i}>{description}</StyledDescription>
            ))}
          </StyledDescriptionContainer>
        </StyledTopIntroduction>
      </StyledTopContainer>
    </StyledTop>
  );
};

const StyledTop = styled.div``;

const StyledTopContainer = styled((props) => <Container {...props} />)``;

const StyledTopHero = styled.div`
  width: 100%;
  min-height: 32rem;
  background-color: var(--white);
  background-image: url(${topWaveGraySVG}), url(${topWaveDarkSVG});
  background-size: 100%, 200%;
  background-position: bottom;
  background-repeat: no-repeat;
  border-radius: 1rem;
  border: 0.1rem solid var(--gray300);
`;

const StyledTopHeroContainer = styled.div`
  display: flex;
  padding: 0.8rem;
  > * {
    width: 100%;
  }
`;

const StyledTopHeroLeft = styled.div`
  padding-top: 8rem;
  padding-left: 4rem;
`;

const StyledTopHeroLeftContainer = styled.div``;

const StyledTopHeroHeadLine = styled.p`
  display: inline-block;
  font-size: 5.6rem;
  background-color: var(--white-mask);
`;

const StyledTopHeroSubLine = styled.p`
  display: inline-block;
  font-size: 3.2rem;
  background-color: var(--white-mask);
  :not(:first-child) {
    margin-top: 0.8rem;
  }
`;

const StyledTopHeroRight = styled.div`
  padding-top: 4rem;
`;

const StyledHeroArticleList = styled.ul`
  width: 100%;
  max-width: 32rem;
  margin: 0 auto;
  background-color: var(--white);
  border: 0.1rem solid var(--gray300);
  border-radius: 0.8rem;
`;

const StyledHeroArticleItem = styled.li`
  font-size: 2rem;
  padding: 0.8rem 1.2rem;
  :not(:first-child) {
    border-top: 0.1rem solid var(--gray300);
  }
  :hover {
    opacity: 0.6;
  }
`;

const StyledHeroMoreArticle = styled.div`
  width: 100%;
  max-width: 9.6rem;
  margin: 0 auto;
  background-color: var(--white);
  border: 0.1rem solid var(--gray300);
  border-radius: 1rem;
  :not(:first-child) {
    margin-top: 1.6rem;
  }
  :hover {
    opacity: 0.6;
  }
  a {
    display: block;
    width: 100%;
    text-align: center;
    padding: 0.8rem 0.4rem;
    font-size: 1.6rem;
  }
`;

const StyledTopIntroduction = styled.div`
  margin-top: 0.8rem;
  padding: 2.4rem;
  background-color: var(--white);
  border-radius: 1rem;
  border: 0.1rem solid var(--gray300);
`;

const StyledTopIntroductionHeader = styled.h1`
  font-size: 3.2rem;
  text-align: center;
`;

const StyledDescriptionContainer = styled.div`
  margin-top: 3.2rem;
`;

const StyledDescription = styled.p`
  font-size: 1.6rem;
  text-align: center;
  :not(:first-child) {
    margin-top: 2rem;
  }
`;
