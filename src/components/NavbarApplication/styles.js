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
    display: flex;
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
  width: 280px;
  height: 80px;
  background-color: rgba(18, 18, 20, 0.8);
  border-radius: 24px;
  backdrop-filter: blur(4px);
  box-shadow: 0px 10px 50px rgb(0, 0, 0, 0.4);

  align-items: center;
  justify-content: center;

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

export const ItemBox = styled.li`
  list-style: none;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.primary};
  }
`

export const ProfileItem = styled.a`
  color: ${props => props.theme.color};
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


export const FloattingButton = styled.div`
  width: 64px;
  height: 64px;
  background: ${props => props.theme.secondary};
  border: none;
  border-radius: 50%;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: #FFF;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background:  ${props => props.theme.secondaryOnHover};
  }

  img {
    width: 34px;
    height: 30px;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(360deg) brightness(105%) contrast(101%);
  }
`