import Image from 'next/image'

import heartImg from '../../images/heart.svg'

import githubImg from '../../images/github.svg'
import linkedinImg from '../../images/linkedin.svg'
import twitterImg from '../../images/twitter.svg'

import { FooterComponent, Container, WaveFooter, WavesTransparent, WavesTransparent2, MadeWithLove, Logo, SocialLinkWrapper, BulletDot, MessageWrapper, BuiltBy, Heart, SocialMedia } from "./styles";


export function Footer() {

  return (
    <FooterComponent>
      <Container>
        <Logo>Dreamers</Logo>
        <MessageWrapper>
          <MadeWithLove>
            Feito com <Heart src={heartImg} alt="heart" width={16} height={16} /> no Brasil
          </MadeWithLove>
          <MadeWithLove>
            por Vinicius Eidy
          </MadeWithLove>
        </MessageWrapper>
        <SocialLinkWrapper>
          <a href="https://github.com/eidynho" target="_blank" rel="noreferrer">
            <SocialMedia src={githubImg} alt="github" width={40} height={40} />
          </a>

          <a href="https://www.linkedin.com/in/eidy/" target="_blank" rel="noreferrer">
            <SocialMedia src={linkedinImg} alt="linkedin" width={40} height={40} />
          </a>

          <a href="https://twitter.com/eidyota" target="_blank" rel="noreferrer">
            <SocialMedia src={twitterImg} alt="twitter" width={40} height={40} />
          </a>
        </SocialLinkWrapper>
      </Container>

      <WaveFooter />
      <WavesTransparent />
      <WavesTransparent2 />
    </FooterComponent>
  )
}