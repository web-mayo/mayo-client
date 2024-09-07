import React from 'react'
import styled from 'styled-components'
import { Title } from './Title'

export const MyPageForm = ({formFields, type}) => {
  return (
    <>
        <Title title={'마이페이지'}/>
        <Container>
        <ProfileContainer>
            <ProfileTop>
                <Title1>프로필</Title1>
            </ProfileTop>
            <ProfileMiddle>
            <ProfileImg></ProfileImg>
            <UserId>사용자 아이디</UserId>
            </ProfileMiddle>
            <ProfileBottom>
        <ProfileInfo>
            <ProfileLabel>[이름]</ProfileLabel>
            <Ex>
              <ProfileValue>홍길동</ProfileValue>
              <ProfileAboutBtn>{'>'}</ProfileAboutBtn>
            </Ex>
          </ProfileInfo>
          <ProfileInfo>
            <ProfileLabel>[생년월일]</ProfileLabel>
            <Ex>
              <ProfileValue>YYYY/MM/DD</ProfileValue>
              <ProfileAboutBtn>{'>'}</ProfileAboutBtn>
            </Ex>
          </ProfileInfo>
          <ProfileInfo>
            <ProfileLabel>[전화번호]</ProfileLabel>
            <Ex>
              <ProfileValue>010-1234-5678</ProfileValue>
              <ProfileAboutBtn>{'>'}</ProfileAboutBtn>
            </Ex>
            </ProfileInfo>
                <ProfileInfo>
                <ProfileLabel>[이메일 주소]</ProfileLabel>
                    <Ex>
                    <ProfileValue>example@123.com</ProfileValue>
                    <ProfileAboutBtn>{'>'}</ProfileAboutBtn>
                    </Ex>
                </ProfileInfo>
            </ProfileBottom>
        </ProfileContainer>
        <AdditionContainer>
        <AdditionTitleContainer>
             <AdditionTitle>
                <AdditionTitleText>
                {type === 'chef' ? '활동 프로필' : '주방 프로필'}</AdditionTitleText>
                <WriteButton>{type === 'chef' ? '활동 프로필 작성' : '주방 프로필 작성'}</WriteButton> 
          </AdditionTitle>
        </AdditionTitleContainer>
        <AdditionMain>

        {formFields.map(({label, name, type}, idx)=>(
                <AdditionInfo key={idx}>
                    <AdditionInfoLabel>{label}</AdditionInfoLabel>
                </AdditionInfo>
        ))}
        </AdditionMain>
      </AdditionContainer>
    </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProfileMiddle = styled.div`
  height: 80px;
  padding-top: 40px;
  padding-left: 100px;
  display: flex;
  flex-direction: row;
`

const ProfileImg = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background: #B65C134D;
`

const UserId = styled.div`
  font-size: 17px;
  font-weight: 700;
  padding-left: 27px;
  padding-top: 23px;
`

const ProfileBottom = styled.div`
  height: 316px;
  padding-left: 183px;
  padding-right: 100px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`

const ProfileInfo = styled.div`
  flex-grow: 1;
  border-top: 1.5px solid #D9D9D9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const ProfileLabel = styled.div`
  color: #8E8E8E;
`

const Ex = styled.div`
  display: flex;
  flex-direction: row;
`

const ProfileValue = styled.div`
  padding-right: 7px;
  font-weight: 700;
`

const ProfileAboutBtn = styled.div`
  color: #D9D9D9;
  cursor: pointer;
`

const ProfileContainer = styled.div`
  flex-basis: 510px;
  width: 969px;
  margin: 50px;
  border-radius: 30px 30px 0px 0px;
  box-shadow: 0px 1px 6px 0px #00000040;
`

const AdditionContainer = styled.div`
  flex-basis: 984px;
  width: 969px;
  margin: 0 50px 50px;
  border-radius: 30px 30px 0px 0px;
  box-shadow: 0px 1px 6px 0px #00000040;
`

const ProfileTop = styled.div`
  width: 970px;
  height: 74px;
  border-radius: 30px 30px 0px 0px;
  background: #FFF3EA;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title1 = styled.div`
  font-weight: 700;
  font-size: 17px;
  padding-left: 110px;
  padding-right: 200px;
`

const AdditionTitleContainer = styled.div`
  width: 970px;
  height: 74px;
  border-radius: 30px 30px 0px 0px;
  background: #FFF3EA;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const AdditionTitle = styled.div`
  padding-left: 110px;
  padding-right: 110px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const AdditionTitleText = styled.div`
  font-weight: 700;
  font-size: 17px;
  flex-grow: 1;
`

const WriteButton = styled.div`
  padding: 8px 30px;
  border-radius: 10px;
  border: 1px solid #000;
`

const AdditionMain = styled.div`
  height: 910px;
  display: flex;
  flex-direction: column;

`

const AdditionInfo = styled.div`
  border-bottom: 1.5px solid #D9D9D9;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`


const AdditionInfoLabel = styled.div`
  color: #8E8E8E;
  padding-left: 110px;
`

