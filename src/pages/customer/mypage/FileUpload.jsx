import React from 'react'
import styled from 'styled-components'

export const FileUpload = () => {
  return (
    <>
      <Container>
        <Container1>
          <Text1>파일을 선택하거나 여기로 드래그 & 드롭하세요.</Text1>
          <Text2>JPG, JPEG, HEIC 등 10MB 이하 사진 파일 첨부가능</Text2>
          <SelectButton>
            <Select>파일 선택</Select>
          </SelectButton>
        </Container1>
        <Container2>
          <CloseButton>
            <Close>닫기</Close>
          </CloseButton>
        </Container2>
      </Container>
    </>
  )
}

const Container = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Container1 = styled.div`
  width: 989px;
  height: 385px;
  border-radius: 8px;
  border: 1px dashed #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Text1 = styled.div`
  font-family: Roboto;
  font-size: 22px;
  font-weight: 400;
  padding-bottom: 15px;
`

const Text2 = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  color: #767676;
  padding-bottom: 40px;
`

const SelectButton = styled.div`
  width: 143px;
  height: 42px;
  border-radius: 8px;
  background-color: #D9D9D9;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Select = styled.div`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
`

const Container2 = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CloseButton = styled.div`
  width: 69px;
  height: 29px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Close = styled.div`
  font-size: 15px;
`