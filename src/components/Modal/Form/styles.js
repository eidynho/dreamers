import styled from 'styled-components'
import { Form as FormFormik } from 'formik'

import { Player as PlayerLottiefiles } from '@lottiefiles/react-lottie-player'

export const Form = styled(FormFormik)`
  display: flex;
  flex-direction: column;

  span {
    margin-top: -6px;
    font-size: 14px;
    color: #E05263;
  }
`

export const FormInput = styled.input.attrs(({ name, type, placeholder }) => ({
  name: name,
  type: type,
  placeholder: placeholder,
}))`
  font-family: 'Poppins', sans-serif;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${props => props.theme.color};
  color: ${props => props.theme.color};
  outline: none;
  padding: 8px;
  margin: 32px 0 8px;
`

export const FormTextarea = styled.textarea.attrs(({ placeholder }) => ({
  placeholder: placeholder,
}))`
  font-family: 'Poppins', sans-serif;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${props => props.theme.color};
  color: ${props => props.theme.color};
  outline: none;
  padding: 8px;
  margin: 24px 0 8px;
  position: relative;
`

export const ButtonForm = styled.button`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  width: 100%;
  height: 50px;
  margin: 32px auto 0;
  background-color: ${props => props.theme.secondary};
  color: #FFF;
  border: none;
  border-radius: 99px;
  box-shadow: 10px 16px 40px 0 rgb(99 58 217 / 8%);
  transition: all 0.2s ease-out;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.secondaryOnHover};
  }

  @media(min-width: 800px) {
    max-width: 240px;
    margin: 32px 0;
  }
`

export const Loading = styled.img`
  width: 60px;
  margin: auto;
  margin: 32px 0;
`

export const PlayerFormSuccess = styled(PlayerLottiefiles)`
  width: 100%;
  height: 180px;

  @media(min-width: 300px) {
    width: 280px;
    height: 280px;
  }

  @media(min-width: 600px) {
    width: 380px;
    height: 380px;
  }

  @media(min-width: 800px) {
    width: 400px;
    height: 400px;
  }
`