import styled from 'styled-components'

export const PostWrapper = styled.div`
  background-color: ${props => props.theme.primary};
  width: 94%;
  margin: 8px auto;
  padding: 16px;
  border-radius: 24px;
  display: flex;
  align-items: flex-start;
`

export const PostAvatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 4px;
`

export const PostContentWrapper = styled.div`
  width: 88%;

`

export const PostAuthor = styled.span`
  width: 80%;
  margin: 0 0 8px 8px;
  display: block;
  font-weight: 700;
  font-size: 14px;
`

export const PostContent = styled.p`
  width: 80%;
  margin-left: 8px;
  font-weight: 400;
  font-size: 14px;
  word-wrap: break-word;

  @media (min-width: 300px) {
    width: 88%;
  }

  @media (min-width: 400px) {
    width: 96%;
  }
`