import styled from 'styled-components'

export const SignUpContent = styled.div`
  height: 100vh;
  width: 100vw;
  margin: auto;
  display: flex;
  
  background-color: #121214;
  opacity: 1;
  background-image: radial-gradient(#633AD9 1.25px, #121214 1.25px);
  background-size: 25px 25px;
`

export const MainContentBox = styled.main`
  height: 100%;
  width: 50%;

  background-color: ${props => props.theme.body};
  background-image: url('/images/formImage.png');
  background-repeat: no-repeat;
  background-size: 60%;
`

export const Container = styled.div`
  height: 100%;
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SignUpMessage = styled.h3`
  font-size: 30px;
  margin-bottom: 8px;
`

export const ButtonsBox = styled.div`
  width: 100%;
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
    font-size: 16px;
  }

  &:hover {
    filter: brightness(0.9);
  }
`

export const Separator = styled.div`
  font-size: 14px;
  color: ${props => props.theme.primaryText};
  width: 90%;

  margin: 24px auto;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.primaryText};
    margin-right: 16px;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.primaryText};
    margin-left: 16px;
  }
`