import { useState } from 'react'

import { useAuth } from '../../hooks/useAuth'
import { database } from '../../services/firebase'
import { push, ref } from 'firebase/database'

import { SignInMessage, SignInLink } from '../Home/NewPost/styles'
import { NewCommentAvatar, NewCommentMedias, NewCommentTextArea, NewCommentTextConfig, NewCommentWrapper, PublishButton } from "./styles";

export function NewComment({ idPost }) {
  const { user } = useAuth()
  const [newComment, setNewComment] = useState('')

  async function handleCreateNewComment(event) {
    event.preventDefault()
    if (newComment.trim() === '') {
      return
    }

    const comment = {
      comment: newComment,
      author: {
        id: user.id,
        name: user.name,
        avatar: user.avatar
      }
    }
    await push(ref(database, `posts/${idPost}/comments`), comment)
    setNewComment('')
  }

  function pushToSignUp() {
    Router.push('/auth/signup')
  }

  return (
    <NewCommentWrapper
      onSubmit={handleCreateNewComment}
    >
      { user && ( 
        <NewCommentAvatar
          src={user.avatar}
          alt='user avatar'
          width={60}
          height={60}
      />) }

      <NewCommentTextConfig>
        <NewCommentTextArea 
          rows={4} 
          placeholder="Escreva seu comentário"
          onChange={event => setNewComment(event.target.value)}
          value={newComment}
        />
        { !user && (
          <SignInMessage>
            Não tem uma conta?
            <SignInLink onClick={pushToSignUp}>
              Clique aqui para criar.
            </SignInLink>
          </SignInMessage>
        )}
        <NewCommentMedias>
          <PublishButton
            type="submit"
            disabled={!user || !newComment}
          >
            Comentar
          </PublishButton>
        </NewCommentMedias>

      </NewCommentTextConfig>
    </NewCommentWrapper>
  )
}