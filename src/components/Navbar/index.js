import Router from 'next/router'

import { Container, Logo, MenuItem, MenuList, NavbarBox, ImageStyled, Login } from "./styles"

export function Navbar() {
  function redirectToSignUp() {
    Router.push('/auth/signup')
  }

  return (
      <NavbarBox>
        <Container>

          <Logo>
            Dreamers
          </Logo>
          <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>Sobre</MenuItem>
            <MenuItem>Contato</MenuItem>
          </MenuList>
          <Login onClick={redirectToSignUp}>
            Entrar
          </Login>

        </Container>
      </NavbarBox>
  )
}