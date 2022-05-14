import Router from 'next/router'
import { useAuth } from '../../../hooks/useAuth'

import purpleLines from '../../../../public/images/purpleLines.json'
import { BtnDiscover, Container, HeaderBox, PlayerPurpleLines, Subtitle, Title } from './styles'

export function Header() {
  const { user } = useAuth()

  function redirectToSignUp() {
    Router.push('/auth/signup')
  }

  function redirectToHome() {
    Router.push('/home')
  }

  return (
    <HeaderBox>
      <Container>

        <Title>
          Dreamers
        </Title>
        <Subtitle>
          Crie postagens e compartilhe pensamentos, somos uma rede social feita por um estudante de desenvolvimento web.
        </Subtitle>
        {
          user ? (
            <BtnDiscover onClick={redirectToHome}>
              Entrar
            </BtnDiscover>
          ) : (
            <BtnDiscover onClick={redirectToSignUp}>
              Participe agora
            </BtnDiscover>
          )
        }

      </Container>
      <PlayerPurpleLines
          src={purpleLines}
          autoplay
          loop
          speed={0.2}
        />
    </HeaderBox>
  )
}