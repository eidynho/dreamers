import styled from 'styled-components'

export const PostWrapper = styled.div`
  background-color: ${props => props.theme.primary};
  width: 94%;
  margin: 8px auto;
  padding: 16px;
  border-radius: 24px;
  display: flex;
  align-items: flex-start;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1.2);
  }
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
  cursor: pointer;
  transition: color 0.2s ease;
  z-index: 2;
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

/* export const InteractionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 98%;
  margin: 8px auto 0;
  gap: 40px;
`

export const InteractionButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  img {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(360deg) brightness(105%) contrast(101%);
    transition: all 0.2s ease;

    &:hover {
      filter: invert(47%) sepia(43%) saturate(7440%) hue-rotate(237deg) brightness(93%) contrast(93%);
    }
  }
` */