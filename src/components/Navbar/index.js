

import { Container, Logo, MenuItem, MenuList, NavbarBox, ImageStyled, Login } from "./styles"

export function Navbar() {

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
          <Login>
            Entrar
          </Login>

        </Container>
      </NavbarBox>
  )
}