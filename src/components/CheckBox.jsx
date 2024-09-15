import React from 'react'
import styled from 'styled-components';

export const CheckBox = ({text}) => {
  return (
    <Container>
        <Checkbox type="checkbox"></Checkbox>
        <Label>{text}</Label>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
`
const Checkbox = styled.input`
    width : 1rem;
    height: 1rem;
    border: 1px solid black;
    border-radius: 0.35rem;
    display: flex;
    justify-content: center;
&:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: black;
  }
`
const Label = styled.div`
    
`
