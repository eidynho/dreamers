import styled from 'styled-components'

import { Player as PlayerLottiefiles } from '@lottiefiles/react-lottie-player'

export const SignUpContent = styled.div`
  height: 100vh;
  width: 100%;
  margin: auto;
  display: flex;
  
  background-color: #121214;
  opacity: 1;
  background-image: radial-gradient(#633AD9 1.25px, #121214 1.25px);
  background-size: 25px 25px;
`

export const MainContentBox = styled.main`
  height: 100%;
  width: 100%;

  background-color: ${props => props.theme.body};
  background-image: url('/images/formImage.png');
  background-repeat: no-repeat;
  background-size: 60%;

  @media (min-width: 900px) {
    width: 50%;
  }
`

export const Container = styled.div`
  height: 88%;
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SignUpMessage = styled.h3`
  font-size: 24px;
  margin: 8px;
  text-align: center;

  @media (min-width: 300px) {
    font-size: 30px;
  }
`

export const ButtonsBox = styled.div`
  width: 90%;
  padding: 40px 24px;
  border-radius: 24px;
  border: 1px solid ${props => props.theme.secondary};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SignUpGoogle = styled.button`
  width: 90%;
  height: 48px;
  padding: 0 8px;
  background-color: ${props => props.theme.color};
  color: ${props => props.theme.body};
  border: none;
  border-radius: 24px;
  cursor: pointer;
  gap: 8px;
  transition: filter 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 700;
    font-size: 14px;
  }

  &:hover {
    filter: brightness(0.9);
  }

  @media (min-width: 300px) {
    span {
      font-size: 16px;
    }
  }
`

export const Separator = styled.div`
  font-size: 14px;
  color: ${props => props.theme.color};
  width: 90%;

  margin: 24px auto;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.color};
    margin-right: 16px;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.color};
    margin-left: 16px;
  }
`

export const PlayerHappyFox = styled(PlayerLottiefiles)`
  width: 100%;
  height: 180px;
  position: absolute;
  left: 0;
  bottom: 0;

  @media(min-width: 300px) {
    width: 280px;
    height: 280px;
  }

  @media(min-width: 600px) {
    width: 320px;
    height: 320px;
  }
`