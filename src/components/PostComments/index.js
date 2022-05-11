import Router from 'next/router'

import { CommentAuthor, CommentAvatar, CommentContent, CommentContentWrapper, CommentWrapper } from './styles'

export function AllComments({ idComment, comment, author }) {

  function pushToProfile() {
    Router.push(`/user/${author.id}`)
  }

  return (
    <CommentWrapper>
      <CommentAvatar
        src={author.avatar}
        alt={author.name}
      />

      <CommentContentWrapper>
        <CommentAuthor onClick={pushToProfile}>{author.name}</CommentAuthor>
        <CommentContent>{comment}</CommentContent>
      </CommentContentWrapper>
    </CommentWrapper>
  )
}