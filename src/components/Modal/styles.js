import styled from 'styled-components'


export const ModalBackground = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 999;
  overflow-y: auto;
`

export const ModalComponent = styled.div`
  position: relative;
  width: 100%;

  margin: auto;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.color};

  background-image: url('/images/formImage.png');
  background-position: top top;
  background-size: 220px;
  background-repeat: no-repeat;

  @media (min-height: 650px) {
    height: 100vh;
  }
  
  @media (min-width: 800px) {
    width: 720px;
    max-width: 90%;
    height: 900px;
    border-radius: 50px;
    
    background-size: 300px;
  }
`

export const ModalContent = styled.div`
  height: 100%;
  width: 88%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 40px;
    margin-top: 48px;

    @media (min-width: 800px) {
      margin-top: 48px;
    }
  }

  p {
    font-size: 13px;
    font-weight: 300;
    line-height: 24px;
    margin-bottom: 8px;
  }

  @media (min-width: 800px) {
    width: 70%;
  }
`

export const CloseButton = styled.img`
  position: absolute;
  top: 48px;
  right: 48px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(309deg) brightness(105%) contrast(96%);

  &:hover {
    filter:contrast(0.1)
  }
`