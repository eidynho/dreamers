import Router from 'next/router'
import { useAuth } from '../../../hooks/useAuth'
import Image from 'next/image'

import imageSvg from '../../../images/image.svg'
import videoSvg from '../../../images/video.svg'

import { Container, DashboardContent, Timeline, UserInfo, UserInfoAvatar, NewPost, NewPostTextConfig, NewPostTextArea, NewPostMedias, NewPostAvatar, PublishButton, MediaButton } from './styles'

export default function Dashboard() {
  const { user } = useAuth()

  function btnUserInfo() {
    Router.push(`/user/${user.id}`)
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

            <NewPost>
              { user && ( 
                <NewPostAvatar
                  src={user.avatar}
                  alt='user avatar'
                  width={60}
                  height={60}
              />) }

              <NewPostTextConfig>
                <NewPostTextArea rows={4} placeholder="Compartilhe seu sonho..." />

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
                  <PublishButton>
                    Publicar
                  </PublishButton>
                </NewPostMedias>

              </NewPostTextConfig>
            </NewPost>

          </Timeline>

        </Container>
      </DashboardContent>
    </>
  )
}