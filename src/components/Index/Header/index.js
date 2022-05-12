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
          Eternize seu sonho conosco...
        </Title>
        <Subtitle>
          Compartilhe seu sonho do jeitinho que você lembra e eternize esse momento.
        </Subtitle>
        <BtnDiscover onClick={redirectToSignUp}>
          Compartilhe agora
        </BtnDiscover>

      </Container>
    </HeaderBox>
  )
}