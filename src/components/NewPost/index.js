import { useState } from 'react'

import { push, ref } from 'firebase/database'
import { useAuth } from '../../hooks/useAuth'
import { database } from '../../services/firebase'

import { NewPostAvatar, NewPostMedias, NewPostTextArea, NewPostTextConfig, NewPostWrapper, PublishButton } from "./styles";

export function NewPost() {
  const { user } = useAuth()
  const [newPost, setNewPost] = useState('')

  async function handleCreateNewPost(event) {
    event.preventDefault()
    if (newPost.trim() === '') {
      return
    }

    const post = {
      content: newPost,
      author: {
        id: user.id,
        name: user.name,
        avatar: user.avatar
      }
    }
    await push(ref(database, 'posts/'), post)
    setNewPost('')
  }

  return (
    <NewPostWrapper
      onSubmit={handleCreateNewPost}
    >
      { user && ( 
        <NewPostAvatar
          src={user.avatar}
          alt='user avatar'
          width={60}
          height={60}
      />) }

      <NewPostTextConfig>
        <NewPostTextArea 
          rows={4} 
          placeholder="Compartilhe seu sonho..."
          onChange={event => setNewPost(event.target.value)}
          value={newPost}
        />

        <NewPostMedias>
          <PublishButton
            type="submit"
            disabled={!user || !newPost}
          >
            Publicar
          </PublishButton>
        </NewPostMedias>

      </NewPostTextConfig>
    </NewPostWrapper>
  )
}