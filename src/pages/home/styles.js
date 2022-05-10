import Image from 'next/image'
import styled from 'styled-components'

export const DashboardContent = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${props => props.theme.body};
`

export const Container = styled.div`
  max-width: 1100px;
  height: 100%;
  display: flex;
  margin: auto;
`

export const UserInfo = styled.aside`
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

export const Timeline = styled.main`
  width: 100%;
  max-width: 800px;
  height: 100%;
  margin: 16px auto 16px auto;
  border-radius: 24px;
`

export const NewPost = styled.form`
  background-color: ${props => props.theme.primary};
  width: 94%;
  margin: 0 auto 36px auto;
  padding: 24px;
  border-radius: 24px;
  display: flex;
  align-items: flex-start;
`

export const NewPostAvatar = styled(Image)`
  border-radius: 50%;
`

export const NewPostTextConfig = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const NewPostTextArea = styled.textarea`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  background-color: ${props => props.theme.tertiary};
  color: ${props => props.theme.color};
  width: 96%;
  margin: auto;
  border: none;
  border-radius: 12px;
  outline: none;
  padding: 16px;
  resize: vertical;
`

export const NewPostMedias = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 16px;
  display: flex;
`

export const MediaButton = styled.button`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.color};
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  width: 48px;
  height: 48px;
  border: 2px solid ${props => props.theme.tertiary};
  border-radius: 50%;
  margin-left: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    filter: invert(100%) sepia(3%) saturate(42%) hue-rotate(203deg) brightness(118%) contrast(100%)
  }

  &:hover {
    filter: brightness(0.85);
    border: 1px solid ${props => props.theme.tertiary};
  }
`

export const PublishButton = styled.button`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.color};
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  width: 48%;
  height: 48px;
  border: 2px solid ${props => props.theme.tertiary};
  border-radius: 24px;
  margin-left: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1.25);
    border: 1px solid ${props => props.theme.tertiary};
  }

  &:disabled {
    filter: brightness(0.85);
    border: 1px solid ${props => props.theme.tertiary};
    cursor: initial;
  }
`