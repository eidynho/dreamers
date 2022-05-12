import Router from 'next/router'


import { BtnDiscover, Container, FloattingButton, HeaderBox, Subtitle, Title } from "./styles";

export function Header() {

  function redirectToSignUp() {
    Router.push('/auth/signup')
  }

  return (
    <HeaderBox>
      <Container>

        <Title>
          Quase uma rede social
        </Title>
        <Subtitle>
          Crie postagens e compartilhe pensamentos, somos uma rede social feita por um estudante de desenvolvimento web.
        </Subtitle>
        <BtnDiscover onClick={redirectToSignUp}>
          Participe agora
        </BtnDiscover>

      </Container>
    </HeaderBox>
  )
}