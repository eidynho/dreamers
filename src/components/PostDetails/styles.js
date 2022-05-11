import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1100px;
  height: 100%;
  display: flex;
  margin: auto;
`

export const MainContent = styled.main`
  width: 100%;
  max-width: 800px;
  height: 100%;
  margin: 16px auto 16px auto;
  border-radius: 24px;
`

export const PostWrapper = styled.div`
  background-color: ${props => props.theme.primary};
  width: 94%;
  margin: 8px auto;
  padding: 24px;
  border-radius: 24px;
  display: flex;
  align-items: flex-start;
`

export const PostAvatar = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-right: 4px;
`

export const PostAuthor = styled.span`
  width: 80%;
  margin: 0 0 8px 8px;
  display: block;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.2s ease;
  z-index: 2;

  &:hover {
    color: ${props => props.theme.secondaryOnHover}
  }
`

