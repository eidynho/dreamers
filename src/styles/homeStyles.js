import styled from 'styled-components'

export const HomeContent = styled.div`
  height: 100vh;
  width: 100%;
  background: ${props => props.theme.body};
`

export const Container = styled.div`
  max-width: 1100px;
  height: 100%;
  display: flex;
  margin: auto;
`

export const Timeline = styled.main`
  width: 100%;
  max-width: 800px;
  height: 100%;
  margin: 16px auto 16px auto;
  border-radius: 24px;
`