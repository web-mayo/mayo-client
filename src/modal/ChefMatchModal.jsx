import React from 'react'
import styled from 'styled-components'
import { Request } from '../components/Request'

export const ChefMatchModal = ({setModal, prevScrollY}) => {
  return (
    <>
    <ModalBackground className="modal-background">
        <Container className="modal-container">
            <Request status={'matched'} title={'홈파티 한 줄 소개'} setModal={setModal} prevScrollY={prevScrollY}/>
        </Container>
    </ModalBackground>
</>
  )
}

const ModalBackground = styled.div`

`
const Container = styled.div`
    width: 760px;
    height: 610px;
`
