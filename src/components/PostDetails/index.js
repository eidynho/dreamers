import Router from 'next/router'

import { PostAvatar, PostContent, PostContentWrapper } from '../AllPosts/styles'
import { PostAuthor, PostWrapper } from './styles'


export function PostDetails({ author, content }) {
  function pushToProfile() {
    Router.push(`/user/${author.id}`)
  }

  return (
    <PostWrapper>
      <PostAvatar
        src={author?.avatar}
        alt={author?.name}
      />

      <PostContentWrapper>
        <PostAuthor onClick={pushToProfile}>{author?.name}</PostAuthor>
        <PostContent>{content}</PostContent>
      </PostContentWrapper>
    </PostWrapper>
  )
}