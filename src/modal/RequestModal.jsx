import React, { useState } from 'react'
import styled from 'styled-components'
import { allowScroll } from './modal';
import { Request } from '../components/Request';

export const RequestModal = ({chefId, setModal, selectedId, prevScrollY}) => {

  return (
    <ModalBackground className='modal-background'>
        <Container className='modal-container'>
            <Request chefId={chefId} status={'request'} title={'요리사 모집 중입니다!'} selectedId={selectedId} setModal={setModal} prevScrollY={prevScrollY}/>
        </Container>
    </ModalBackground>
  )
}

const ModalBackground = styled.div`
`
const Container = styled.div`
`
