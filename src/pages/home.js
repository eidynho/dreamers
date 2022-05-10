import { useEffect, useState } from 'react'
import Router from 'next/router'
import { useAuth } from '../hooks/useAuth'

import { database } from '../services/firebase'
import { onValue, push, ref } from 'firebase/database'

import { AllPosts } from '../components/AllPosts'
import { Container, DashboardContent, Timeline, UserInfo, UserInfoAvatar, NewPost, NewPostTextConfig, NewPostTextArea, NewPostMedias, NewPostAvatar, PublishButton } from '../styles/homeStyles'

export default function Dashboard() {
  const { user } = useAuth()
  const [newPost, setNewPost] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const postsRef = ref(database, 'posts/')
    onValue(postsRef, (value) => {
      const data = value.val()

      if (!data) {
        return
      }

      const parsedPosts = Object.entries(data).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
        }
      })
      setPosts(parsedPosts)
    })

  }, [])

  function btnUserInfo() {
    Router.push(`/user/${user.id}`)
  }

  async function handleCreateNewPost(event) {
    event.preventDefault()
    if (newPost.trim() === '') {
      return
    }

    const post = {
      content: newPost,
      author: {
        name: user.name,
        avatar: user.avatar
      }
    }
    await push(ref(database, 'posts/'), post)
    setNewPost('')
  }

  return (
    <>
      <DashboardContent>
        <Container>

          <UserInfo>
            {
              user &&
              <>
                <UserInfoAvatar
                  src={user.avatar}
                  alt='user avatar'
                  width={90}
                  height={90}
                />
                <h4>{user.name}</h4>
                <button onClick={btnUserInfo}>Meu perfil</button>
              </>
            }
          </UserInfo>

          <Timeline>

            <NewPost
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
            </NewPost>
            
            {posts && posts.map(post => (
              <AllPosts
                key={post.id}
                content={post.content}
                author={post.author}
              />
            )).reverse()}
          </Timeline>

        </Container>
      </DashboardContent>
    </>
  )
}