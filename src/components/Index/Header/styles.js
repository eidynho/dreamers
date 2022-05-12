import styled from 'styled-components'

export const HeaderBox = styled.header`
  background: ${props => props.theme.primary};
  height: 80vh;
`

export const Container = styled.div`
  max-width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`

export const Title = styled.h1`
  font-size: 48px;
  text-align: center;
  color: ${props => props.theme.primaryText};
  margin: 80px 16px 0;
  line-height: 64px;
`

export const Subtitle = styled.p`
  width: 70%;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: ${props => props.theme.primaryText};
  margin: 8px 0 24px 0;
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


