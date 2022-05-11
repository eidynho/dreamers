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
  margin-left: 32px;
  cursor: pointer;
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

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 56px;
  margin-right: 32px;

  &:hover ul {
    display: block;
  }
`

export const UserWrapper = styled.div`
  height: 56px;
  width: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme.secondary};
  border-radius: 50%;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    border: 2px solid ${props => props.theme.secondaryOnHover};
  }
`

export const UserImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`

export const UserSettings = styled.ul`
  display: none;
  position: absolute;
  top: 64px;
  right: -24px;
  width: 300px;
  height: 500px;
  background-color: rgba(18, 18, 20, 0.8);
  border-radius: 24px;
  backdrop-filter: blur(4px);
  box-shadow: 0px 10px 50px rgb(0, 0, 0, 0.4);

  &::before {
    content: '';
    position: absolute;
    top: -16px;
    right: 42px;
    height: 16px;
    width: 16px;
    clip-path: polygon(50% 25%, 0% 100%, 100% 100%);
    background-color: rgba(18, 18, 20, 0.8);
    backdrop-filter: blur(4px);
  }
`