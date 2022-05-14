import Router from 'next/router'
import Image from 'next/image'

import { useAuth } from '../../hooks/useAuth'

import happyFox from '../../../public/images/happyFox.json'
import googleImg from '../../../public/images/google.svg'
import { MainContentBox, SignUpContent, SignUpGoogle, Separator, Container, ButtonsBox, SignUpMessage, PlayerHappyFox } from "../../styles/signUpStyles"


export default function SignUp() {
  const { user, signInWithGoogle } = useAuth()

  async function handleLogin() {
    if (!user) {
      await signInWithGoogle()
    }

    Router.push('/home')
  }

  return (
    <SignUpContent>
      <MainContentBox>
        <Container>
          <SignUpMessage>Faça seu login</SignUpMessage>
          <ButtonsBox>
            <SignUpGoogle onClick={handleLogin}>
              <Image 
                src={googleImg}
                alt='Google image'
                width={24}
                height={24}
              />
              <span>Entrar com Google</span>
            </SignUpGoogle>
          </ButtonsBox>

          <PlayerHappyFox
          src={happyFox}
          autoplay
          loop
          speed={0.6}
        />

        </Container>
      </MainContentBox>
    </SignUpContent>
  )
}