import styled from 'styled-components'
import Image from 'next/image'

export const NewCommentWrapper = styled.form`
  background-color: ${props => props.theme.primary};
  width: 94%;
  margin: 0 auto 36px auto;
  padding: 24px;
  border-radius: 24px;
  display: flex;
  align-items: flex-start;
`

export const NewCommentAvatar = styled(Image)`
  border-radius: 50%;
`

export const NewCommentTextConfig = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const NewCommentTextArea = styled.textarea`
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

export const NewCommentMedias = styled.div`
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