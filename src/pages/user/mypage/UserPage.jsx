import React from 'react'
import styled from 'styled-components'

export const UserPage = () => {
  return (
    <>
      <Container>
        <Top>마이페이지</Top>
      </Container>
      <Container2>
        <Item1>

        </Item1>
        <Item2>

        </Item2>
      </Container2>
    </>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 115px;
  background: #FFF3EA;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: calc(-50vw + 50%);
`
const Top = styled.span`
  font-weight: 900;
  font-size: 18px;
`

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Item1 = styled.div`
  flex-basis: 510px;
  width: 969px;
  border-radius: 30px 30px 0px 0px;
  border: 1px solid red;
  box-shadow: 0px 1px 6px 0px #00000040;
`

const Item2 = styled.div`
  flex-basis: 984px;
  border-radius: 30px 30px 0px 0px;
  border: 1px solid red;
  box-shadow: 0px 1px 6px 0px #00000040;
`