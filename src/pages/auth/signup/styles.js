import styled from 'styled-components'

export const SignUpContent = styled.div`
  height: 100vh;
  width: 100vw;
  margin: auto;
  display: flex;
`

export const ImageBox = styled.aside`
  height: 100%;
  width: 50%;
`

export const MainContentBox = styled.main`
  height: 100%;
  width: 50%;

  background-color: ${props => props.theme.primary};
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

export const SignUpGoogle = styled.button`
  width: 90%;
  height: 48px;
  background-color: ${props => props.theme.color};
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