import Router from 'next/router'

import { CommentAuthor, CommentAvatar, CommentContent, CommentContentWrapper, CommentWrapper } from './styles'

export function AllComments({ idComment, comment, author }) {



  return (
    <CommentWrapper>
      <CommentAvatar
        src={author.avatar}
        alt={author.name}
      />

      <CommentContentWrapper>
        <CommentAuthor>{author.name}</CommentAuthor>
        <CommentContent>{comment}</CommentContent>
      </CommentContentWrapper>
    </CommentWrapper>
  )
}