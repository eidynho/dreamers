import styled from 'styled-components'
import Image from 'next/image'

export const UserInfoWrapper = styled.aside`
  background-color: ${props => props.theme.primary};
  width: 300px;
  height: 400px;
  margin: 16px 0 16px 16px;
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    margin-top: 8px;
    color: ${props => props.theme.color};
  }

  button {
    font-family: ${props => props.theme.fontPrimary};
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${props => props.theme.color};
    margin-top: 24px;
    width: 80%;
    height: 40px;
    border-radius: 24px;
    border: none;
    cursor: pointer;
    background-color: ${props => props.theme.secondary};
    transition: all 0.2s ease;

    &:hover {
      background-color: ${props => props.theme.secondaryOnHover};
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`

export const UserInfoAvatar = styled(Image)`
  border-radius: 50%;
  margin-top: 80px;
`

export const UserIconWrapper = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: ${props => props.theme.tertiary};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
`

export const UserIcon = styled(Image)`
  border-radius: 50%;
  margin-top: 80px;
  filter: invert(3%) sepia(2%) saturate(5464%) hue-rotate(198deg) brightness(93%) contrast(91%);
`