import Router from 'next/router'
import { useAuth } from '../../hooks/useAuth'

import userSvg from '../../images/user.svg'
import { UserInfoWrapper, UserInfoAvatar, UserIconWrapper, UserIcon } from './styles'

export function UserInfo() {
  const { user } = useAuth()
  
  function pushToUserProfile() {
    Router.push(`/user/${user.id}`)
  }

  function pushToSignUp() {
    Router.push('/auth/signup')
  }

  return (
    <UserInfoWrapper>
      {
        user ? (
          <>
          <UserInfoAvatar
            src={user.avatar}
            alt='user avatar'
            width={90}
            height={90}
          />
          <h4>{user.name}</h4>
          <button onClick={pushToUserProfile}>Meu perfil</button>
        </>) : (
          <>
            <UserIconWrapper>
              <UserIcon 
                src={userSvg}
                alt='user icon'
                width={110}
                height={80}
              />
            </UserIconWrapper>
            <button onClick={pushToSignUp}>Entrar</button>
          </>
        )
      }
    </UserInfoWrapper>
  )
}