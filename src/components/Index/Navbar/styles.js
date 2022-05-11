import Image from 'next/image'

import styled from 'styled-components'

export const NavbarBox = styled.nav`
  width: 100%;
  height: 80px;
  background-color: ${props => props.theme.primary};
`

export const Container = styled.div`
  max-width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`

export const Logo = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: ${props => props.theme.primaryText};
  margin: 0 8px 0 32px;
`

export const MenuList = styled.ul`
  display: none;

  @media (min-width: 600px) {
    display: flex;
    gap: 40px;
  }

  @media (min-width: 800px) {
    gap: 80px
  }
`

export const MenuItem = styled.li`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.primaryText};
  list-style: none;
  cursor: pointer;
`

export const ImageStyled = styled(Image)`
  filter: ${props => props.theme.primaryTextFilter};
`

export const Login = styled.button`
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin: 0 32px 0 8px;
  padding: 8px 12px;
  background-color: transparent;
  color: ${props => props.theme.secondary};
  border: 2px solid ${props => props.theme.secondary};
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${props => props.theme.secondaryOnHover};
    border: 2px solid ${props => props.theme.secondaryOnHover};
  }

  @media (min-width: 290px) {
    padding: 8px 24px;
  }
`