import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Tag } from "../../components/Tag";
import { setMyChef } from "../../apis/CustomerPartyCtrler";
export const CustomerSelectChefConrfirm = ({ type }) => {
  const navigate = useNavigate();
  const ChefData = useLocation().state;

  // 모달
  const DialogSwitch = (bool) => {
    const dialog = document.getElementById("completeSignUp");
    if (bool) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  };

  // Hook Form
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  // api 통신
  const [feedback, setFeedback] = useState();
  // 중복 통신 막기
  const [rePostBan, setRePostBan] = useState(false);

  // 요리사 선정
  const selectMyChef = async (scheduledId) => {
    if (rePostBan) {
      return;
    }
    const mychefRes = await setMyChef(scheduledId);
    setRePostBan(true);
    console.log(mychefRes);
    if (mychefRes && mychefRes.call) {
      DialogSwitch(true);
      setRePostBan(false);
    } else {
      if (feedback && feedback.back.response.data) {
        alert(feedback.back.response.data.message);
      } else {
        alert("회원가입에 문제가 생겼습니다. 다시 시도해주세요.");
      }
      setRePostBan(false);
    }
  };

  return (
    <Background>
      <Container>
        <TitleBox>
          <Title>마이요리사 선정하기</Title>
        </TitleBox>
        <TitleBox>
          <Title>
            [{ChefData.chefName} 셰프] 를 마이요리사로 선정하시겠습니까?
          </Title>
        </TitleBox>
        <ChefListCard>
          <CardLeft>
            <ChefImg src="/images/chefImage.png"></ChefImg>
            <ChefProfile>
              <Name>{ChefData.chefName}</Name>
              <Career>
                <p>[ 대표 경력 ]</p>
                <div>{ChefData.chefInfoExperience}</div>
              </Career>
              <Introduce>
                <p>[ 한 줄 소개 ]</p>
                <div>{ChefData.chefInfoAdditional}</div>
              </Introduce>
            </ChefProfile>
          </CardLeft>
          <CardRight>
            <Info>
              {ChefData.HashList &&
                ChefData.HashList.map((hash) => (
                  <Tag text={hash.chefHashTag}></Tag>
                ))}

              <p>[ 경력 ] 5년 | 28만원</p>
            </Info>
            <Requset type="button">상세보기</Requset>
          </CardRight>
        </ChefListCard>
        <BtnBox>
          <PreBtn
            type="button"
            onClick={() => {
              navigate(-1);
            }}
          >
            이전
          </PreBtn>
          <SubmitButton
            // type="submit"
            type="button"
            onClick={() => {
              selectMyChef(ChefData.partyScheduleId);
            }}
          >
            선정하기
          </SubmitButton>
        </BtnBox>
        <Dialog id="completeSignUp">
          <DialogText>선정이 완료되었습니다!</DialogText>
          <DialogBtn onClick={() => navigate("/customerMatch")}>
            매칭 내역 페이지로 돌아가기
          </DialogBtn>
        </Dialog>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  padding: 32px 32px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 780px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 26px;
  background-color: #ffffff;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 7.5px 17px;
`;

const Title = styled.div`
  font-family: var(--sds-typography-body-font-family);
  font-size: 36px;
  line-height: 48px;
  font-weight: 700;
  text-align: center;
`;
const ColoredText = styled.span`
  color: rgba(250, 124, 21, 1);
`;

const TitleDesc = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
`;

const InputForm = styled.form``;
const Label = styled.label`
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  font-weight: 500;
`;
const ChangeCert = styled.div`
  float: right;
  font-size: 11px;
  font-weight: 500;
`;
const ChangeCertBtn = styled.button`
  width: 105px;
  height: 16px;
  border-radius: 28px;
  border: 0;
  background-color: rgba(250, 124, 21, 1);
  vertical-align: top;
  margin-left: 7px;
`;

const CertWay1 = styled.div``;
const CertWay2 = styled.div``;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-right: 8px;
`;
const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  line-height: 20px;
`;
const BtnBox = styled.div`
  width: 100%;
  padding-top: 45px;
  display: flex;
  gap: 12px;
  justify-content: center;
`;
const PreBtn = styled.button`
  border-radius: 8px;
  width: 95px;
  height: 48px;
  font-weight: 500;
  background-color: rgba(195, 195, 195, 1);
  font-size: 1rem;
  border-radius: 8px;
  border: 0;
  color: #ffffff;
`;
const SubmitButton = styled.button`
  width: 195px;
  height: 48px;
  font-weight: 500;
  background-color: #fa7c15;
  font-size: 1rem;
  border-radius: 8px;
  border: 0;
  color: #ffffff;
`;

const CertificationBox = styled.div`
  display: flex;
  gap: 8px;
  & > input {
    flex: 1;
  }
`;

const CertButton = styled.button`
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  border: 0;
  width: 105px;
  height: 36px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

const List = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AccountServices = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 0;
  color: #000;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
`;

const RouteText = styled.a`
  margin: 0;
  padding: 0;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Dialog = styled.dialog`
  border: 0;
  width: 298px;
  height: 124px;
  border-radius: 10px;
  top: -20%;
`;
const DialogText = styled.p`
  margin-top: 48px;
  text-align: center;
  font-size: 20px;
  line-height: 28px;
  color: #000;
  font-weight: 600;
`;
const DialogBtn = styled.a`
  display: block;
  margin-top: 2px;
  text-align: center;
  font-size: 10px;
  line-height: 14px;
  color: #000;
  text-decoration: underline;
  cursor: pointer;
`;
const ErrorMessage = styled.p`
  padding: 0 12px;
  font-size: 12px;
  margin: 0;
  color: ${({ err }) => (err ? "red" : "green")};
`;
const ChefListCard = styled.div`
  margin: 100px 0;
  padding: 30px 40px;
  display: flex;
  border: 2px solid rgba(219, 174, 137, 1);
  border-radius: 8px;
  cursor: pointer;
`;

const CardLeft = styled.div`
  width: 400px;
  height: 120px;
  display: flex;
  gap: 16px;
`;
const ChefImg = styled.img`
  height: 100%;
  width: 116px;
`;
const ChefProfile = styled.div`
  flex: 1;
`;
const Name = styled.div`
  font-size: 16px;
  line-height: 25px;
`;
const Career = styled.div`
  margin-top: 8px;
  & > p {
    font-size: 12px;
    line-height: 16px;
    color: #8e8e8e;
    margin: 0;
  }
  & > div {
    font-weight: 500;
    font-size: 16px;
  }
`;
const Introduce = styled.div`
  margin-top: 8px;
  & > p {
    font-size: 12px;
    line-height: 16px;
    color: #8e8e8e;
    margin: 0;
  }
  & > div {
    font-weight: 500;
    font-size: 16px;
  }
`;
const CardRight = styled.div`
  justify-content: space-between;
  align-items: end;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  & > p {
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    line-height: 16px;
    color: #8e8e8e;
    margin: 0;
  }
`;
const Requset = styled.button`
  background-color: rgba(219, 174, 137, 1);
  width: 128px;
  height: 33px;
  color: #fff;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  border: 0;
  border-radius: 8px;
`;
