
import { NavbarApplication } from "../../components/NavbarApplication"
import { useAuth } from "../../hooks/useAuth"

import maintenceJson from '../../../public/images/maintence.json'

import { Container, ParagraphDevelopment, PlayerMaintence, TitleDevelopment } from "../../styles/idUserStyles"


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
        <PlayerMaintence
          src={maintenceJson}
          autoplay
          loop
          speed={0.6}
        />
      </Container>
    </>
  )
}