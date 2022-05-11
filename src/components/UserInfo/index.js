import Router from 'next/router'
import { useAuth } from '../../hooks/useAuth'

import { UserInfoWrapper, UserInfoAvatar } from './styles'

export function UserInfo() {
  const { user } = useAuth()
  
  function btnUserInfo() {
    Router.push(`/user/${user.id}`)
  }

  return (
    <UserInfoWrapper>
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
    </UserInfoWrapper>
  )
}