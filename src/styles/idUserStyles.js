import styled from 'styled-components'

import { Player as PlayerLottiefiles } from '@lottiefiles/react-lottie-player'

export const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TitleDevelopment = styled.h2`
  font-size: 20px;
  margin: 0 16px;
  text-align: center;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    background: linear-gradient(to right, #633AD9 40%, transparent 100%);
    z-index: -1;
    bottom: -4px;
    left: -16px;
    width: 120px;
    height: 18px;
  }

  @media (min-width: 400px) {
    font-size: 30px;
    letter-spacing: 1.4px;

    &::after {
      height: 30px;
    }
  }

  @media (min-width: 600px) {
    font-size: 36px;

    &::after {
      width: 360px;
    }
  }
`

export const ParagraphDevelopment = styled.p`
  font-size: 18px;
  margin: 16px;
  text-align: center;
`

export const PlayerFormSuccess = styled(PlayerLottiefiles)`
  width: 100%;
  height: 180px;

  @media(min-width: 300px) {
    width: 280px;
    height: 280px;
  }

  @media(min-width: 600px) {
    width: 320px;
    height: 320px;
  }
`