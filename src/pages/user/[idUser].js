
import { NavbarApplication } from "../../components/NavbarApplication"
import { useAuth } from "../../hooks/useAuth"

import maintenceJson from '../../images/maintence.json'

import { Container, ParagraphDevelopment, PlayerFormSuccess, TitleDevelopment } from "../../styles/idUserStyles"


export default function UserProfile() {
const { user } = useAuth()
  return (
    <>
      <NavbarApplication />
      <Container>
        <TitleDevelopment>EM DESENVOLVIMENTO</TitleDevelopment>
        <ParagraphDevelopment>
          Olá {user && user.name}, estou desenvolvendo essa página nesse momento :)
        </ParagraphDevelopment>
        <PlayerFormSuccess
          src={maintenceJson}
          autoplay
          loop
          speed={0.6}
        />
      </Container>
    </>
  )
}