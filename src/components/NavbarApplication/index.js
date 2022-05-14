import { useState, useEffect, useCallback } from 'react'
import Router from 'next/router'
import Image from 'next/image'
import { useAuth } from '../../hooks/useAuth'

import { Modal } from '../Modal'

import { Container, Login, Logo, MenuItem, MenuList, NavbarBox, ItemBox, UserBox, UserImage, UserSettings, UserWrapper, ProfileItem, FloattingButton } from "./styles"

export function NavbarApplication() {
  const { user } = useAuth()
  const [showModal, setShowModal] = useState(false)

  function pushToIndex() {
    Router.push('/')
  }

  function pushToHome() {
    Router.push('/home')
  }

  function pushToSignUp() {
    Router.push('/auth/signup')
  }

  function pushToUserProfile() {
    Router.push(`/user/${user.id}`)
  }


  const openModal = () =>  {
    setShowModal(true)
    document.body.style.overflow= 'hidden'
  }

  const closeModal = () => {
    setShowModal(false)
    document.body.style.overflow= 'unset'
  }
  
  const keyPress = useCallback(e => {
    if (e.key === 'Escape' && showModal) {
      setShowModal(false)
    }
  }, [setShowModal, showModal])

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        closeModal={closeModal}
        className="modal"
      />
      <FloattingButton onClick={openModal}>
        <Image 
          src="/images/email.png"
          alt='E-mail'
          width={34}
          height={30}
        />
      </FloattingButton>
      <NavbarBox>
        <Container>

          <Logo onClick={pushToIndex}>
            Dreamers
          </Logo>
          <MenuList>
            <MenuItem onClick={pushToHome}>Home</MenuItem>
            <MenuItem onClick={openModal}>Contato</MenuItem>
          </MenuList>
            {user ? (
              <UserBox>
                <UserWrapper>
                  <UserImage
                    src={user?.avatar}
                    alt="user avatar"
                  />
                  <UserSettings>
                    <ItemBox onClick={pushToUserProfile}>
                      <ProfileItem>Meu perfil</ProfileItem>
                    </ItemBox>
                    
                  </UserSettings>
                </UserWrapper>
              </UserBox>
            ) : (
              <Login onClick={pushToSignUp}>Entrar</Login>
            )}

        </Container>
      </NavbarBox>
    </>
  )
}