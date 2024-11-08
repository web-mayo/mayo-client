import React from "react";
import styled from "styled-components";
import { Title } from "./Title";
import { useNavigate } from "react-router-dom";

// 마이페이지 상태는 2가지 경우에 따라 분류
// 요리사 or 고객 : type props
// 편집 상태 O or X  : editmode state
export const MyPageForm = ({ formFields, type, profile, activeProfile }) => {
  const navigate = useNavigate("/edit");

  return (
    <>
      <Title title={"마이페이지"} />
      <Container>
        <ProfileContainer>
          <ProfileTop>
            <Title1>회원 정보 관리</Title1>
          </ProfileTop>
          <ProfileMiddle>
            <UserId>사용자 아이디</UserId>
            <EditMyInfo>회원 정보 수정</EditMyInfo>
          </ProfileMiddle>
          <ProfileBottom>
            <ProfileInfo>
              <ProfileLabel>[ 이름 ]</ProfileLabel>
              <Ex>
                <ProfileValue>{profile?.name}</ProfileValue>
              </Ex>
            </ProfileInfo>
            <ProfileInfo>
              <ProfileLabel>[ 생년월일 ]</ProfileLabel>
              <Ex>
                <ProfileValue>{profile?.birthDay}</ProfileValue>
              </Ex>
            </ProfileInfo>
            <ProfileInfo>
              <ProfileLabel>[ 전화번호 ]</ProfileLabel>
              <Ex>
                <ProfileValue>{profile?.phone}</ProfileValue>
              </Ex>
            </ProfileInfo>
            <ProfileInfo>
              <ProfileLabel>[ 이메일 주소 ]</ProfileLabel>
              <Ex>
                <ProfileValue>{profile?.email}</ProfileValue>
              </Ex>
            </ProfileInfo>
          </ProfileBottom>
          <ProfileAccount>
            <AccountTitle>
              <UserId>{type == "customer" ? "환불" : "정산"} 계좌 관리</UserId>
              <EditMyInfo>
                {type == "customer" ? "환불" : "정산"} 계좌 수정
              </EditMyInfo>
            </AccountTitle>
            <Account>
              기업은행<span>000-000000-000</span>
            </Account>
          </ProfileAccount>
        </ProfileContainer>
        <AdditionContainer>
          <AdditionTitleContainer>
            <AdditionTitle>
              <AdditionTitleText>
                {type === "chef" ? "활동 프로필" : "주방 프로필"}
              </AdditionTitleText>
              {/* <WriteButton
                onClick={() => {
                  navigate("edit");
                }}
              >
                {type === "chef" ? "활동 프로필 작성" : "주방 프로필 작성"}
              </WriteButton> */}
            </AdditionTitle>
          </AdditionTitleContainer>
          <AdditionMain>
            {type === "chef" &&
              formFields?.map(({ label, name, type, value }, idx) => (
                <AdditionInfo key={idx}>
                  <AdditionInfoLabel>{label}</AdditionInfoLabel>
                  <AdditionInfoValue>{value}</AdditionInfoValue>
                </AdditionInfo>
              ))}
            {type === "customer" &&
              formFields?.map(({ label, name, inputType, value }, idx) => (
                <AdditionInfo type={type} key={idx} idx={idx}>
                  <AdditionInfoLabel type={type}>{label}</AdditionInfoLabel>
                  <AdditionInfoValue>dwadadwdwadwa</AdditionInfoValue>
                  {idx === 0 && (
                    <KitchenEditBtn
                      onClick={() => {
                        navigate("edit");
                      }}
                    >
                      주방 프로필 작성
                    </KitchenEditBtn>
                  )}
                </AdditionInfo>
              ))}
          </AdditionMain>
        </AdditionContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5%;
`;

const ProfileMiddle = styled.div`
  padding: 60px 110px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ProfileImg = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background: #b65c134d;
`;

const UserId = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
`;

const EditMyInfo = styled.button`
  width: 165px;
  height: 36px;
  font-weight: 700;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: transparent;
`;

const ProfileBottom = styled.div`
  padding: 0 110px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;
const ProfileAccount = styled.div`
  padding: 50px 110px;
`;

const AccountTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Account = styled.div`
  padding: 20px 10px;
  font-size: 14px;
  line-height: 24px;
  color: #8e8e8e;
  & > span {
    margin-left: 10px;
  }
`;

const ProfileInfo = styled.div`
  padding: 20px 0;
  flex-grow: 1;
  border-top: 1.5px solid #d9d9d9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ProfileLabel = styled.div`
  font-size: 14px;
  color: #8e8e8e;
`;

const Ex = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProfileValue = styled.div`
  padding-right: 7px;
  font-weight: 700;
`;

const ProfileAboutBtn = styled.div`
  color: #d9d9d9;
  cursor: pointer;
`;

const ProfileContainer = styled.div`
  flex-basis: 510px;
  width: 969px;
  margin: 50px;
  border-radius: 30px 30px 0px 0px;
  box-shadow: 0px 1px 6px 0px #00000040;
`;

const AdditionContainer = styled.div`
  width: 969px;
  margin: 0 50px 50px;
  border-radius: 30px 30px 0px 0px;
  box-shadow: 0px 1px 6px 0px #00000040;
`;

const ProfileTop = styled.div`
  width: 969px;
  height: 74px;
  border-radius: 30px 30px 0px 0px;
  background: #fff3ea;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title1 = styled.div`
  font-weight: 700;
  font-size: 17px;
  padding: 0 110px;
`;

const AdditionTitleContainer = styled.div`
  width: 970px;
  height: 74px;
  border-radius: 30px 30px 0px 0px;
  background: #fff3ea;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AdditionTitle = styled.div`
  padding-left: 110px;
  padding-right: 110px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const AdditionTitleText = styled.div`
  font-weight: 700;
  font-size: 17px;
  flex-grow: 1;
`;

const WriteButton = styled.div`
  padding: 8px 30px;
  border-radius: 10px;
  border: 1px solid #000;
  cursor: pointer;
`;

const AdditionMain = styled.div`
  display: flex;
  flex-direction: column;
`;

const AdditionInfo = styled.div`
  padding: ${({ idx }) => (idx === 1 ? "45px 110px 0;" : "45px 110px;")};
  border-bottom: ${({ idx }) => (idx === 1 ? "none" : "1.5px solid #d9d9d9;")};
  justify-content: ${({ type }) =>
    type === "customer" ? "left" : "space-between;"};
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const AdditionInfoLabel = styled.div`
  width: ${({ type }) => type === "customer" && "160px;"};
  color: #8e8e8e;
`;
const AdditionInfoValue = styled.div`
  font-weight: 700;
`;

const KitchenEditBtn = styled.button`
  position: absolute;
  right: 110px;
  width: 165px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid #000;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  background-color: #fff;
`;
