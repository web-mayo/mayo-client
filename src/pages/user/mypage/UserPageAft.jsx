import React from 'react'
import styled from 'styled-components'

export const UserPageAft = () => {
  return (
    <>
      <Container>
        <Top>마이페이지</Top>
      </Container>
      <Container2>
        <Item1>
          <ProfileTop>
            <Title1>프로필</Title1>
          </ProfileTop>
          <ProfileMiddle>
            <Circle></Circle>
            <UserId>사용자 아이디</UserId>
          </ProfileMiddle>
          <ProfileBottom>
          <Container4>
              <Inform>[이름]</Inform>
              <Ex>
                <Real>홍길동</Real>
                <Sign>{'>'}</Sign>
              </Ex>
            </Container4>
            <Container4>
              <Inform>[생년월일]</Inform>
              <Ex>
                <Real>YYYY/MM/DD</Real>
                <Sign>{'>'}</Sign>
              </Ex>
            </Container4>
            <Container4>
              <Inform>[전화번호]</Inform>
              <Ex>
                <Real>010-1234-5678</Real>
                <Sign>{'>'}</Sign>
              </Ex>
            </Container4>
            <Container4>
              <Inform>[이메일 주소]</Inform>
              <Ex>
                <Real>example@123.com</Real>
                <Sign>{'>'}</Sign>
              </Ex>
            </Container4>
          </ProfileBottom>
        </Item1>
        <Item2>
          <KitchenTop>
            <KitchenProfile>
            <Title2>주방 프로필</Title2>
            <WriteButton>주방 프로필 수정</WriteButton>
            </KitchenProfile>
          </KitchenTop>
          <KitchenMain>
            <Container3>
              <Text>[주방 닉네임]</Text>
            </Container3>
            <Address>
              <Text>[주소]</Text>
              <Text>[상세주소]</Text>
            </Address>
            <Container3>
              <Text>[화구 종류]</Text>
            </Container3>
            <Container3>
              <Text>[주방 사진]</Text>
            </Container3>
            <Container3>
              <Text>[조리 기구 및 도구]</Text>
            </Container3>
            <Container3>
              <Text>[주방 관련 요청사항]</Text>
            </Container3>
            <Significant>
              <Text>[주방 관련 특이사항]</Text>
            </Significant>
          </KitchenMain>
        </Item2>
      </Container2>
    </>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 115px;
  margin: 0;
  background: #FFF3EA;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: calc(-50vw + 50%);
`
const Top = styled.span`
  font-weight: 900;
  font-size: 22px;
`

const ProfileMiddle = styled.div`
  height: 80px;
  padding-top: 40px;
  padding-left: 100px;
  display: flex;
  flex-direction: row;
`

const Circle = styled.div`
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

const Container4 = styled.div`
  flex-grow: 1;
  border-top: 1.5px solid #D9D9D9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Inform = styled.div`
  color: #8E8E8E;
`

const Ex = styled.div`
  display: flex;
  flex-direction: row;
`

const Real = styled.div`
  padding-right: 7px;
  font-weight: 700;
`

const Sign = styled.div`
  color: #D9D9D9;
`

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Item1 = styled.div`
  flex-basis: 510px;
  width: 969px;
  margin: 50px;
  border-radius: 30px 30px 0px 0px;
  box-shadow: 0px 1px 6px 0px #00000040;
`

const Item2 = styled.div`
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

const KitchenTop = styled.div`
  width: 970px;
  height: 74px;
  border-radius: 30px 30px 0px 0px;
  background: #FFF3EA;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const KitchenProfile = styled.div`
  padding-left: 110px;
  padding-right: 110px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Title2 = styled.div`
  font-weight: 700;
  font-size: 17px;
  flex-grow: 1;
`

const WriteButton = styled.div`
  padding: 8px 30px;
  border-radius: 10px;
  border: 1px solid #000;
`

const KitchenMain = styled.div`
  height: 910px;
  display: flex;
  flex-direction: column;

`

const Container3 = styled.div`
  border-bottom: 1.5px solid #D9D9D9;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Address = styled.div`
  border-bottom: 1.5px solid #D9D9D9;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const Significant = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Text = styled.div`
  color: #8E8E8E;
  padding-left: 110px;
`