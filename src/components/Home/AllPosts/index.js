import Image from 'next/image'
import Router from 'next/router'

import { usePosts } from '../../../hooks/usePosts'
import { useAuth } from '../../../hooks/useAuth'
import { database } from '../../../services/firebase'
import { push, ref } from 'firebase/database'

import likeButtonImg from '../../../../public/images/likeButton.svg'
import commentButtonImg from '../../../../public/images/commentButton.svg'

import { InteractionButton, InteractionButtons, PostAuthor, PostAvatar, PostContent, PostContentWrapper, PostWrapper } from './styles'

export function AllPosts({ idPost, content, author }) {
  const { user } = useAuth()
  const { posts } = usePosts()

  function pushToPost() {
    Router.push(`/post/${idPost}`)
  }

  async function handleLikePost() {
    const like = {
      author: {
        id: user.id,
        name: user.name,
        avatar: user.avatar
      }
    }
    await push(ref(database, `posts/${idPost}/likes`), like)
  }

  return (
    <PostWrapper>
      <PostAvatar
        src={author.avatar}
        alt={author.name}
      />

      <PostContentWrapper>
        <PostAuthor>{author.name}</PostAuthor>
        <PostContent>{content}</PostContent>

        <InteractionButtons>
          <InteractionButton onClick={pushToPost}>
            <Image
              src={commentButtonImg}
              alt="botão de comentar postagem"
              width={24}
              height={24}
              layout="fixed"
            />
          </InteractionButton>

          <InteractionButton onClick={handleLikePost}>
            <Image
              src={likeButtonImg}
              alt="botão de curtir postagem"
              width={18}
              height={18}
              layout="fixed"
            />
            { idPost.likeCount > 0 &&
              (<span>{idPost.likeCount}</span>)
            }
          </InteractionButton>
        </InteractionButtons>
      </PostContentWrapper>

    </PostWrapper>
  )
}