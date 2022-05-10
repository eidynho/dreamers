import Router from 'next/router'
import Image from 'next/image'

import { useAuth } from '../../../hooks/useAuth'

import googleImg from '../../../images/google.svg'
import { MainContentBox, ImageBox, SignUpContent, SignUpGoogle, Separator, Container } from "./styles"


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
      <ImageBox>

      </ImageBox>

      <MainContentBox>
        <Container>

          <SignUpGoogle onClick={handleLogin}>
            <Image 
              src={googleImg}
              alt='Google image'
              width={24}
              height={24}
            />
            <span>Entrar com Google</span>
          </SignUpGoogle>
          <Separator>Ou crie uma conta</Separator>

        </Container>
      </MainContentBox>
    </SignUpContent>
  )
}