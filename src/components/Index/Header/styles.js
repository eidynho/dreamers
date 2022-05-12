import styled from 'styled-components'

export const HeaderBox = styled.header`
  height: 90vh;

  background-color: #121214;
  opacity: 1;
  background-image: radial-gradient(#633AD9 1.25px, #121214 1.25px);
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
  font-size: 40px;
  text-align: center;
  color: ${props => props.theme.primaryText};
  margin: 0 24px 8px;
  line-height: 48px;

  @media (min-width: 600px) {
    font-size: 48px;
    line-height: 64px;
  }
`

export const Subtitle = styled.p`
  width: 80%;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: ${props => props.theme.primaryText};
  margin: 8px 0 24px 0;

  @media (min-width: 600px) {
    font-size: 18px;
  }
`

export const BtnDiscover = styled.button`
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin: 0 32px 0 8px;
  padding: 12px 32px;
  outline: none;
  border: none;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.color};
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.secondaryOnHover};
  }
`


