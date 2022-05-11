import Router from 'next/router'
import { useAuth } from '../../hooks/useAuth'

import { Container, Logo, MenuItem, MenuList, NavbarBox, UserBox, UserImage, UserSettings, UserWrapper } from "./styles"

export function NavbarApplication() {
  const { user } = useAuth()
  function redirectToHome() {
    Router.push('/home')
  }

  return (
    <NavbarBox>
      <Container>

        <Logo onClick={redirectToHome}>
          Home
        </Logo>
        <MenuList>
          <MenuItem>Home</MenuItem>
          <MenuItem>Sobre</MenuItem>
          <MenuItem>Contato</MenuItem>
        </MenuList>
        <UserBox>
          <UserWrapper>
            <UserImage 
              src={user?.avatar}
              alt="user avatar"
            />
            <UserSettings />
          </UserWrapper>
        </UserBox>

      </Container>
    </NavbarBox>
  )
}