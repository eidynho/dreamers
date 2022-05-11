import Image from 'next/image'
import styled from 'styled-components'

export const DashboardContent = styled.div`
  height: 100vh;
  width: 100vw;
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



