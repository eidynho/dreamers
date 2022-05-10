import { PostAuthor, PostAvatar, PostContent, PostContentWrapper, PostWrapper } from './styles'

export function AllPosts({ content, author }) {

  return (
    <PostWrapper>
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