import { useState } from 'react'
import axios from 'axios'
import { Formik } from 'formik'
import * as yup from 'yup'

import { Player } from '@lottiefiles/react-lottie-player'

import formSuccessJson from '../../../images/formSuccessImg.json'
import loadingJson from '../../../images/loading.json'

import { ButtonForm, Form, FormInput, FormTextarea, PlayerFormSuccess } from './styles'


export const FormModal = () => {
  const [serverState, setServerState] = useState(false)

  const handleSubmit = (values, actions) => {
    axios.post('https://formspree.io/f/mzboygne', {
      data: values
    })
      .then(response => {
        actions.setSubmitting(false)
        actions.resetForm()
        setServerState(true)
      })
      .catch(error => {
        actions.setSubmitting(false)
        setServerState(false, error.response.data.error)
      })
  }

  const validationSchema = yup.object().shape ({
    name: yup.string()
      .min(2, 'Nome muito pequeno')
      .max(80, 'Nome muito grande')
      .required('Nome obrigatório!'),

    email: yup.string()
      .email('E-mail inválido!')
      .required('E-mail é obrigatório!'),

    subject: yup.string()
      .max(100, 'Assunto muito grande')
      .required('Assunto é obrigatório!'),

    message: yup.string()
      .min(3, 'Mensagem muito pequena')
      .max(3000, 'Mensagem muito grande')
      .required('Mensagem é obrigatória'),
  })
  
  return (
    <>
      {
        !serverState
        ? <Formik
          initialValues={{
            name: '',
            email: '',
            subject: '',
            message: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        > 
          {({
            touched,
            values,
            errors,
            handleChange,
            isSubmitting,
          }) => (
            <Form 
              noValidate
            >
              <FormInput
                name="name"
                value={values.name}
                type="text" 
                placeholder="Nome *" 
                onChange={handleChange}
              />
              { errors.name && touched.name ? (
                <span>{errors.name}</span>
              ) : null}

              <FormInput 
                name="email"
                value={values.email}
                type="email" 
                placeholder="E-mail *" 
                onChange={handleChange}
              />
              { errors.email && touched.email ? (
                <span>{errors.email}</span>
              ) : null}

              <FormInput 
                name="subject"
                value={values.subject}
                type="text" 
                placeholder="Assunto *" 
                onChange={handleChange}
              />
              { errors.subject && touched.subject ? (
                <span>{errors.subject}</span>
              ) : null}

              <FormTextarea
                name="message"
                value={values.message}
                placeholder="Mensagem *"
                onChange={handleChange}
                rows='5'
              />
              { errors.message && touched.message ? (
                <span>{errors.message}</span>
              ) : null}

              {isSubmitting 
                ? <Player src={loadingJson} autoplay loop style={{height: '120px', width: '120px'}} />
                : <ButtonForm type="submit">Enviar mensagem</ButtonForm>
              }
            </Form>
          )}
        </Formik>
        : <PlayerFormSuccess
           src={formSuccessJson}
           autoplay
           loop
           speed={0.6}
        />
      }
    </>
  )
}