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

export const PostAuthor = styled.span`
  width: 80%;
  margin: 0 0 8px 8px;
  display: block;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.2s ease;
  z-index: 2;

  &:hover {
    color: ${props => props.theme.secondaryOnHover}
  }
`