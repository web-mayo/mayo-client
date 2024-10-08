import React, { useState } from 'react'
import styled from 'styled-components'
import { allowScroll } from './modal';
import { Request } from '../components/Request';

export const RequestModal = ({setModal, prevScrollY}) => {

  return (
    <ModalBackground className='modal-background'>
        <Container className='modal-container'>
            <Request status={'request'} title={'의뢰 요청'} setModal={setModal} prevScrollY={prevScrollY}/>
        </Container>
    </ModalBackground>
  )
}

const ModalBackground = styled.div`
`
const Container = styled.div`

`
