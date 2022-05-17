import Image from 'next/image'
import Router from 'next/router'

import { PostAuthor, PostAvatar, PostContent, PostContentWrapper, PostWrapper } from './styles'

export function AllPosts({ idPost, content, author }) {

  function pushToPost() {
    Router.push(`/post/${idPost}`)
  }

  return (
    <PostWrapper onClick={pushToPost}>
      <PostAvatar
        src={author.avatar}
        alt={author.name}
      />

      <PostContentWrapper>
        <PostAuthor>{author.name}</PostAuthor>
        <PostContent>{content}</PostContent>
      </PostContentWrapper>

    </PostWrapper>
  )
}