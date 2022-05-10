import { useEffect, useState } from 'react'
import Router from 'next/router'
import { useAuth } from '../../../hooks/useAuth'
import Image from 'next/image'

import { database } from '../../../services/firebase'
import { onValue, push, ref } from 'firebase/database'

import imageSvg from '../../../images/image.svg'
import videoSvg from '../../../images/video.svg'

import { Container, DashboardContent, Timeline, UserInfo, UserInfoAvatar, NewPost, NewPostTextConfig, NewPostTextArea, NewPostMedias, NewPostAvatar, PublishButton, MediaButton } from './styles'

export default function Dashboard() {
  const { user } = useAuth()
  const [newPost, setNewPost] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const postsRef = ref(database, 'posts/')
    onValue(postsRef, (value) => {
      const data = value.val()
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
    if (newPost.trim === '') {
      return
    }

    const post = {
      content: newPost,
      author: {
        name: user?.name,
        avatar: user.avatar
      }
    }
    push(ref(database, 'posts/'), post)
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
                  <MediaButton>
                    <Image 
                      src={imageSvg}
                      alt="image"
                      width={16}
                      height={16}
                    />
                  </MediaButton>
                  <MediaButton>
                    <Image 
                      src={videoSvg}
                      alt="video"
                      width={16}
                      height={16}
                    />
                  </MediaButton>
                  <PublishButton
                    type="submit"
                  >
                    Publicar
                  </PublishButton>
                </NewPostMedias>

              </NewPostTextConfig>
            </NewPost>
            

            <p>{JSON.stringify(posts)}</p>
          </Timeline>

        </Container>
      </DashboardContent>
    </>
  )
}