import styled from 'styled-components'

import { Player as PlayerLottiefiles } from '@lottiefiles/react-lottie-player'

export const HeaderBox = styled.header`
  height: 91vh;

  background-color: ${props => props.theme.body};
  opacity: 1;
  background-image: radial-gradient(#633AD9 1.25px, ${props => props.theme.primary} 1.25px);
  background-size: 25px 25px;
`

export const Container = styled.div`
  max-width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`

export const Title = styled.h1`
  font-family: ${props => props.theme.fontSecondary};
  font-weight: 400;
  font-size: 32px;
  text-align: center;
  color: ${props => props.theme.color};
  margin: 0 24px 8px;
  line-height: 48px;
  z-index: 2;

  @media (min-width: 300px) {
    font-size: 48px;
    line-height: 64px;
  }

  @media (min-width: 600px) {
    font-size: 56px;
    line-height: 64px;
  }
`

export const Subtitle = styled.p`
  width: 80%;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: ${props => props.theme.color};
  margin: 8px 0 24px 0;
  z-index: 2;

  @media (min-width: 300px) {
    font-size: 16px;
  }

  @media (min-width: 600px) {
    font-size: 18px;
  }
`

export const BtnDiscover = styled.button`
  display: block;
  font-family: ${props => props.theme.fontPrimary};
  font-size: 16px;
  font-weight: 600;
  margin: 0 32px 0 8px;
  padding: 12px 32px;
  outline: none;
  border: none;
  background-color: ${props => props.theme.secondary};
  box-shadow: 10px 16px 40px 0 rgb(99 58 217 / 8%);
  color: ${props => props.theme.color};
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 2;

  &:hover {
    background-color: ${props => props.theme.secondaryOnHover};
  }
`

export const PlayerPurpleLines = styled(PlayerLottiefiles)`
  width: 100%;
  height: 50%;
  position: absolute;
  top: 120px;
  left: -56px;
  opacity: 0.4;
  transform: rotateZ(16deg);

  @media (min-width: 1000px) {
    width: 88%;

  }
`
