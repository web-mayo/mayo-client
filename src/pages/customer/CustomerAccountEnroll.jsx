import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BankInfo } from "../../functions/banks";
import Fade from "@mui/material/Fade";
import { EnrollCustomerAccount } from "../../apis/CustomerAccountCtrlr";
export const CustomerAccountEnroll = () => {
  const navigate = useNavigate();

  // 중복 통신 막기
  var rePostBan = false;
  // 모달

  // hook폼
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  // 프로필 정보
  useEffect(() => {}, []);

  const [selected, setSelected] = useState();
  const [accountNum, setAccountNum] = useState();
  const [showPage, setShowPage] = useState(0);

  // enroll Account
  const enrollAccount = async () => {
    if (rePostBan) {
      return false;
    }
    const { account } = getValues();
    const accountInput = {
      bank: selected,
      account: account,
    };
    console.log(accountInput);
    const res = await EnrollCustomerAccount();
    rePostBan = true;
    console.log(res);
    setAccountNum(account);
    if (res.call) {
      setShowPage(2);
      rePostBan = false;
    } else {
    }
  };
  return (
    <Background>
      <Container>
        <TitleBox>
          <Title>환불 계좌 관리</Title>
        </TitleBox>
        <Fade in={showPage === 0}>
          <PageBox thisBox={0} pageNum={showPage}>
            <ContentsBox>
              <SubTitle>등록할 은행을 선택해주세요</SubTitle>
              <BankBox>
                {BankInfo.map((bank, index) => (
                  <BankCard
                    onClick={() => {
                      setSelected(bank.name);
                    }}
                    thisName={bank.name}
                    selects={selected}
                    key={"bank - " + index}
                  >
                    <Logo src={bank.img}></Logo>
                    <Name>{bank.name}</Name>
                  </BankCard>
                ))}
              </BankBox>
            </ContentsBox>
            <BtnBox>
              <PreBtn
                type="button"
                onClick={() => {
                  navigate("/customerPage/account");
                }}
              >
                이전
              </PreBtn>
              <SubmitButton
                // type="submit"
                type="button"
                onClick={() => {
                  if (selected) {
                    setShowPage(1);
                  } else {
                    alert("은행을 선택해주세요.");
                  }
                }}
              >
                다음
              </SubmitButton>
            </BtnBox>
          </PageBox>
        </Fade>
        <Fade in={showPage === 1}>
          <PageBox thisBox={1} pageNum={showPage}>
            <ContentsBox>
              <SubTitle>{selected}</SubTitle>
              <SubTitle2>계좌번호를 입력해주세요.</SubTitle2>
              <AccountNumBox>
                <AccTitle>계좌번호</AccTitle>
                <InputAccNum
                  type="text"
                  {...register("account", {
                    required: true,
                  })}
                />
              </AccountNumBox>
            </ContentsBox>
            <BtnBox>
              <PreBtn
                type="button"
                onClick={() => {
                  setShowPage(0);
                }}
              >
                이전
              </PreBtn>
              <SubmitButton
                // type="submit"
                type="button"
                onClick={() => {
                  enrollAccount();
                }}
              >
                등록
              </SubmitButton>
            </BtnBox>
          </PageBox>
        </Fade>
        <Fade in={showPage === 2}>
          <PageBox thisBox={2} pageNum={showPage}>
            <ContentsBox>
              <CompletedBox>
                <CompletedImg src="/images/checkCircle.png"></CompletedImg>
                <CompletedText>
                  <p>
                    <span>계좌 등록</span>이
                  </p>
                  <p>완료되었습니다!</p>
                </CompletedText>
              </CompletedBox>
              <CheckAccBox>
                <CheckText>
                  본인명의 계좌가 맞는지 다시 한 번 확인해주세요.
                </CheckText>
                <CheckAccount>
                  <p>{selected && selected}</p>
                  <p>{accountNum && accountNum}</p>
                </CheckAccount>
              </CheckAccBox>
            </ContentsBox>
            <BtnBox>
              <SubmitButton
                type="button"
                onClick={() => {
                  navigate("/customerPage");
                }}
              >
                마이페이지로 돌아가기
              </SubmitButton>
              <SubmitButton2
                // type="submit"
                type="button"
                onClick={() => {
                  window.location.reload();
                }}
              >
                계좌 수정하기
              </SubmitButton2>
            </BtnBox>
          </PageBox>
        </Fade>
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
const PageBox = styled.div`
  display: ${(props) => (props.thisBox === props.pageNum ? "block" : "none")};
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
const SubTitle2 = styled.p`
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  margin: 8px 0 0;
`;

const BankBox = styled.div`
  margin: 70px auto 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
`;

const BankCard = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 85px;
  background-color: rgba(245, 245, 245, 1);
  margin-top: 5px;
  border: 1px solid;
  border-color: ${(props) =>
    props.thisName === props.selects ? "#fa7c15" : "rgba(245, 245, 245, 1)"};
  border-radius: 8px;
`;
const Logo = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  object-fit: contain;
`;

const Name = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700px;
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
const SubmitButton2 = styled.button`
  width: 195px;
  height: 48px;
  font-weight: 500;
  background-color: rgba(219, 174, 137, 1);
  font-size: 1rem;
  border-radius: 8px;
  border: 0;
  color: #ffffff;
`;

const AccountNumBox = styled.div`
  width: 450px;
  margin: 50px auto 0;
`;
const AccTitle = styled.p`
  font-size: 14px;
  line-height: 20px;
`;
const InputAccNum = styled.input`
  margin: 0;
  padding: 0;
  width: 100%;
  border: 0;
  border-bottom: 2px solid rgba(217, 217, 217, 1);
  font-size: 24px;
`;
const CompletedBox = styled.div`
  text-align: center;
`;
const CompletedImg = styled.img`
  width: 109px;
  height: 109px;
  margin: 0 auto;
`;
const CompletedText = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  & > p {
    margin: 0;
  }
  & > p span {
    color: #fa7c15;
  }
`;
const CheckAccBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 50px;
`;
const CheckText = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 22px;
`;
const CheckAccount = styled.a`
  width: 310px;
  height: 110px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: rgba(255, 243, 234, 1);
  border-radius: 8px;
  font-size: 16px;
  line-height: 20px;
  & > p {
    margin: 0;
  }
`;
