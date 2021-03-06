import styled from 'styled-components'
import Image from 'next/image'

export const NewPostWrapper = styled.form`
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
  font-family: ${props => props.theme.fontPrimary};
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

export const SignInMessage = styled.p`
  width: 96%;
  margin: 8px auto -4px auto;
  font-size: 12px;
`

export const SignInLink = styled.button`
  font-family: ${props => props.theme.fontPrimary};
  font-size: 12px;
  text-decoration: underline;
  margin-left: 4px;
  border: none;
  background-color: transparent;
  color: ${props => props.theme.color};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
  color: ${props => props.theme.secondary};
  text-decoration: none;
  }
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
  font-family: ${props => props.theme.fontPrimary};
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
  font-family: ${props => props.theme.fontPrimary};
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