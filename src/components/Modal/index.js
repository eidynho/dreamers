import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { FormModal } from './Form'
import { CloseButton, ModalBackground, ModalComponent, ModalContent } from "./styles"

export function Modal({ showModal, closeModal }) {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    gsap.fromTo('.modal-component', {
      y: 1200,
      opacity: 0,
    }, { 
      y: 0,
      ease: 'power1.inOut',
      duration: 0.6,
      opacity: 0.985,
      })
  }, [showModal])

  return (
    <>
      {
        showModal ?
        <ModalBackground onClick={closeModal}>
            <ModalComponent className="modal-component" onClick={e => e.stopPropagation()}>
              <ModalContent>

                <CloseButton src="/images/closebtn.svg" alt="close-button" onClick={closeModal} />
                <h3>Vamos conversar</h3>
                <p>Entrarei em contato com você em até dois dias por e-mail. Além disso, por favor, não se esqueça de verificar sua conta de spam!</p>
                <FormModal />

              </ModalContent>
            </ModalComponent>
        </ModalBackground>
        : null
        }
    </>
  )
}