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
    color: ${props => props.theme.primaryText};
  }

  button {
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${props => props.theme.primaryText};
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