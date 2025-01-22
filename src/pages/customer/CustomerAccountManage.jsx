import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BankInfo } from "../../extraNeeds/banks";
import { delCustomerAccount } from "../../apis/CustomerAccountCtrlr";
export const CustomerAccountPage = () => {
  const navigate = useNavigate();
  const accountAxios = useLocation().state.account;

  // 은행 이미지
  const findBankImg = (name) => {
    var banks = BankInfo;
    const info = banks.find((el) => el.name == name);
    if (info) {
      return info.img;
    }
  };
  // 계좌 지우기
  const removeAccount = async () => {
    const res = await delCustomerAccount();
    console.log(res);
  };
  return (
    <Background>
      <Container>
        <TitleBox>
          <Title>환불 계좌 관리</Title>
        </TitleBox>
        <ContentsBox>
          <SubTitle>등록된 계좌를 확인해주세요.</SubTitle>
          <AccountBox>
            <AccountSpan>등록된 계좌</AccountSpan>
            <AccountDESC>
              {accountAxios && accountAxios.status === "OK" && (
                <>
                  <BankImg
                    src={findBankImg(accountAxios.result.bank)}
                  ></BankImg>
                  <AccountInfo>
                    <BankName>{accountAxios.result.bank}</BankName>
                    <AccountNumber>{accountAxios.result.account}</AccountNumber>
                  </AccountInfo>
                  <DeleteBtn
                    onClick={() => {
                      removeAccount();
                      // if(confirm('계좌를 삭제하시겠습니까?')){
                      //
                      // }
                    }}
                  >
                    삭제
                  </DeleteBtn>
                </>
              )}
              {!accountAxios ||
                (accountAxios.status !== "OK" && <>등록된 계좌가 없습니다.</>)}
            </AccountDESC>
            <Notify>
              환불 계좌는 하나만 등록할 수 있습니다. 환불 계좌를 변경하고 싶은
              경우에는 이미 등록된 계좌를 삭제하고 새로운 계좌를 등록해주세요.
            </Notify>
          </AccountBox>
        </ContentsBox>
        <BtnBox>
          <PreBtn
            type="button"
            onClick={() => {
              navigate("/customerPage");
            }}
          >
            이전
          </PreBtn>
          <SubmitButton
            type="button"
            onClick={() => {
              navigate("enroll");
            }}
          >
            {accountAxios === 0 ? "등록하기" : "변경하기"}
          </SubmitButton>
        </BtnBox>
        <Dialog id="completeSignUp">
          <DialogText>수정 내용이 저장되었습니다!</DialogText>
          <DialogBtn onClick={() => navigate("/customerPage")}>
            마이페이지로 돌아가기
          </DialogBtn>
        </Dialog>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  padding: 0 32px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 17px;
`;

const Title = styled.div`
  font-family: var(--sds-typography-body-font-family);
  font-size: 26px;
  line-height: 48px;
  font-weight: 700;
  text-align: center;
`;

const ContentsBox = styled.div`
  width: 685px;
  margin: 0 auto;
  padding-top: 30px;
`;
const SubTitle = styled.p`
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  margin: 0;
`;

const AccountBox = styled.div`
  width: 450px;
  margin: 70px auto 0;
`;
const AccountSpan = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  font-weight: 400;
`;
const AccountDESC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  width: 100%;
  height: 90px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
const BankImg = styled.img`
  width: 47px;
  height: 47px;
  border-radius: 8px;
  object-fit: contain;
`;
const AccountInfo = styled.div`
  padding-left: 12px;
  flex: 1;
`;
const BankName = styled.div`
  font-size: 14px;
  line-height: 20px;
`;
const AccountNumber = styled.div`
  font-size: 14px;
  line-height: 20px;
`;
const DeleteBtn = styled.button`
  width: 52px;
  height: 26px;
  border: 1px solid rgba(217, 217, 217, 1);
  background-color: #fff;
  font-size: 12px;
`;

const Notify = styled.div`
  padding-top: 6px;
  font-size: 12px;
  line-height: 16px;
  color: rgba(142, 142, 142, 1);
`;
const BtnBox = styled.div`
  width: 100%;
  padding-top: 70px;
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
