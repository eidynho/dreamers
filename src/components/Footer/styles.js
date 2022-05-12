import styled from 'styled-components'
import Image from 'next/image'

export const FooterComponent = styled.footer`
  min-height: 32vh;
  width: 100%;
  background: ${props => props.theme.primary};
  position: relative;
  margin-top: 200px;

  @media (min-width: 600px) {
    height: 24vh;
  }
`

export const Container = styled.div`
  max-width: 1100px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.h3`
  font-size: 28px;
  margin: 24px 0 16px;
  color: ${props => props.theme.color};

  @media (min-width: 400px) {
    font-size: 32px;
  }
`

export const MessageWrapper = styled.div`
  margin-bottom: 24px;
`

export const MadeWithLove = styled.p`
  font-size: 12px;
  font-weight: 300;
  text-align: center;
  color: ${props => props.theme.color};

  @media (min-width: 400px) {
    font-size: 16px;
  }
`

export const Heart = styled(Image)`
  width: 16px;
  height: 16px;
  filter: invert(31%) sepia(97%) saturate(7240%) hue-rotate(357deg) brightness(100%) contrast(114%);

  animation-name: heartAnimation;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 1.6s;
  
  @media (min-width: 400px) {
    font-size: 18px;
    display: inline-block;
  }

  @keyframes heartAnimation {
    0% {
    transform: scale( 0.85 );
    } 20% {
      transform: scale( 1 );
    } 40% {
      transform: scale( 0.85 );
    } 60% {
      transform: scale( 1 );
    } 80% {
      transform: scale( 0.85 );
    } 100% {
      transform: scale( 0.85 );
    }
  }
`

export const SocialLinkWrapper = styled.div`
  a {
    margin-left: 8px;
  }
`

export const SocialMedia = styled(Image)`
  filter: invert(4%) sepia(6%) saturate(995%) hue-rotate(202deg) brightness(50%) contrast(93%);
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: invert(4%) sepia(6%) saturate(995%) hue-rotate(202deg) brightness(10%) contrast(93%);
  }
`

export const WaveFooter = styled.div`
  position: absolute;
  top: -195px;
  width: 100%;
  height: 200px;
  background-color: ${props => props.theme.primary};
  z-index: -1;
  transform: rotateZ(180deg);
  clip-path: polygon(100% 0%, 0% 0% , 0% 76.32%, 1% 76.20%, 2% 75.86%, 3% 75.28%, 4% 74.49%, 5% 73.48%, 6% 72.26%, 7% 70.84%, 8% 69.24%, 9% 67.46%, 10% 65.52%, 11% 63.44%, 12% 61.23%, 13% 58.91%, 14% 56.50%, 15% 54.01%, 16% 51.47%, 17% 48.90%, 18% 46.32%, 19% 43.74%, 20% 41.19%, 21% 38.70%, 22% 36.27%, 23% 33.93%, 24% 31.70%, 25% 29.59%, 26% 27.62%, 27% 25.81%, 28% 24.18%, 29% 22.73%, 30% 21.47%, 31% 20.42%, 32% 19.58%, 33% 18.97%, 34% 18.58%, 35% 18.43%, 36% 18.50%, 37% 18.80%, 38% 19.33%, 39% 20.08%, 40% 21.05%, 41% 22.23%, 42% 23.62%, 43% 25.19%, 44% 26.93%, 45% 28.84%, 46% 30.90%, 47% 33.09%, 48% 35.39%, 49% 37.79%, 50% 40.26%, 51% 42.79%, 52% 45.36%, 53% 47.94%, 54% 50.52%, 55% 53.07%, 56% 55.58%, 57% 58.02%, 58% 60.38%, 59% 62.63%, 60% 64.77%, 61% 66.76%, 62% 68.60%, 63% 70.27%, 64% 71.76%, 65% 73.05%, 66% 74.14%, 67% 75.01%, 68% 75.67%, 69% 76.10%, 70% 76.30%, 71% 76.27%, 72% 76.01%, 73% 75.52%, 74% 74.81%, 75% 73.88%, 76% 72.74%, 77% 71.39%, 78% 69.86%, 79% 68.14%, 80% 66.26%, 81% 64.23%, 82% 62.07%, 83% 59.78%, 84% 57.40%, 85% 54.94%, 86% 52.42%, 87% 49.86%, 88% 47.28%, 89% 44.70%, 90% 42.14%, 91% 39.62%, 92% 37.16%, 93% 34.79%, 94% 32.51%, 95% 30.36%, 96% 28.34%, 97% 26.47%, 98% 24.76%, 99% 23.24%, 100% 21.91%);
`

export const WavesTransparent = styled.div`
  position: absolute;
  top: -225px;
  width: 100%;
  height: 200px;
  opacity: 0.7;
  background-color: ${props => props.theme.primary};
  z-index: -1;
  transform: rotateZ(180deg);
  clip-path: polygon(100% 0%, 0% 0% , 0% 76.32%, 1% 76.28%, 2% 76.18%, 3% 76.02%, 4% 75.79%, 5% 75.50%, 6% 75.14%, 7% 74.72%, 8% 74.24%, 9% 73.70%, 10% 73.10%, 11% 72.43%, 12% 71.72%, 13% 70.94%, 14% 70.12%, 15% 69.24%, 16% 68.31%, 17% 67.34%, 18% 66.32%, 19% 65.25%, 20% 64.15%, 21% 63.01%, 22% 61.83%, 23% 60.62%, 24% 59.38%, 25% 58.11%, 26% 56.82%, 27% 55.51%, 28% 54.18%, 29% 52.83%, 30% 51.47%, 31% 50.10%, 32% 48.73%, 33% 47.35%, 34% 45.97%, 35% 44.60%, 36% 43.23%, 37% 41.87%, 38% 40.52%, 39% 39.19%, 40% 37.88%, 41% 36.59%, 42% 35.32%, 43% 34.08%, 44% 32.87%, 45% 31.70%, 46% 30.56%, 47% 29.45%, 48% 28.39%, 49% 27.37%, 50% 26.40%, 51% 25.47%, 52% 24.60%, 53% 23.77%, 54% 23.00%, 55% 22.28%, 56% 21.62%, 57% 21.02%, 58% 20.48%, 59% 20.00%, 60% 19.58%, 61% 19.23%, 62% 18.94%, 63% 18.71%, 64% 18.55%, 65% 18.45%, 66% 18.42%, 67% 18.46%, 68% 18.56%, 69% 18.72%, 70% 18.95%, 71% 19.25%, 72% 19.60%, 73% 20.03%, 74% 20.51%, 75% 21.05%, 76% 21.66%, 77% 22.32%, 78% 23.04%, 79% 23.81%, 80% 24.64%, 81% 25.52%, 82% 26.45%, 83% 27.43%, 84% 28.45%, 85% 29.51%, 86% 30.62%, 87% 31.76%, 88% 32.94%, 89% 34.15%, 90% 35.39%, 91% 36.66%, 92% 37.95%, 93% 39.26%, 94% 40.59%, 95% 41.94%, 96% 43.30%, 97% 44.67%, 98% 46.05%, 99% 47.42%, 100% 48.80%);
`

export const WavesTransparent2 = styled.div`
  position: absolute;
  top: -225px;
  width: 100%;
  height: 200px;
  opacity: 0.5;
  background-color: ${props => props.theme.primary};
  z-index: -1;
  transform: rotateZ(180deg);
  clip-path: polygon(100% 0%, 0% 0% , 0% 72.50%, 1% 72.44%, 2% 72.27%, 3% 71.97%, 4% 71.57%, 5% 71.04%, 6% 70.41%, 7% 69.67%, 8% 68.83%, 9% 67.88%, 10% 66.83%, 11% 65.69%, 12% 64.47%, 13% 63.16%, 14% 61.77%, 15% 60.31%, 16% 58.78%, 17% 57.20%, 18% 55.57%, 19% 53.88%, 20% 52.17%, 21% 50.42%, 22% 48.64%, 23% 46.86%, 24% 45.06%, 25% 43.26%, 26% 41.47%, 27% 39.70%, 28% 37.95%, 29% 36.23%, 30% 34.55%, 31% 32.91%, 32% 31.32%, 33% 29.79%, 34% 28.33%, 35% 26.93%, 36% 25.62%, 37% 24.39%, 38% 23.24%, 39% 22.19%, 40% 21.23%, 41% 20.38%, 42% 19.63%, 43% 18.99%, 44% 18.47%, 45% 18.05%, 46% 17.75%, 47% 17.57%, 48% 17.50%, 49% 17.55%, 50% 17.72%, 51% 18.00%, 52% 18.40%, 53% 18.92%, 54% 19.54%, 55% 20.28%, 56% 21.12%, 57% 22.06%, 58% 23.10%, 59% 24.23%, 60% 25.45%, 61% 26.75%, 62% 28.14%, 63% 29.59%, 64% 31.11%, 65% 32.69%, 66% 34.32%, 67% 36.00%, 68% 37.72%, 69% 39.47%, 70% 41.24%, 71% 43.03%, 72% 44.82%, 73% 46.62%, 74% 48.41%, 75% 50.18%, 76% 51.93%, 77% 53.66%, 78% 55.34%, 79% 56.99%, 80% 58.58%, 81% 60.11%, 82% 61.58%, 83% 62.98%, 84% 64.30%, 85% 65.54%, 86% 66.69%, 87% 67.74%, 88% 68.71%, 89% 69.57%, 90% 70.32%, 91% 70.97%, 92% 71.50%, 93% 71.93%, 94% 72.23%, 95% 72.42%, 96% 72.50%, 97% 72.46%, 98% 72.30%, 99% 72.02%, 100% 71.63%);
`
