import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const SelectSignUp = () => {
  const navigate = useNavigate();

  return (
    <Background>
      <Container>
        <Card>
          <CardTop>
            <CardTopImg
              src="images/signupChef.png"
              alt="요리사 사진, 주방에서 요리하고 있는 모습"
            ></CardTopImg>
            <CardTopText>
              <MyChefText>마이요리사</MyChefText> 가 되고 싶어요!
            </CardTopText>
          </CardTop>
          <CardBottom
            onClick={() => {
              navigate("/SignUpChef");
            }}
          >
            <CardBottomBtn>요리사 회원가입</CardBottomBtn>
          </CardBottom>
        </Card>
        <Card>
          <CardTop>
            <CardTopImg
              src="images/signupCustomer.png"
              alt="요리사 사진, 주방에서 요리하고 있는 모습"
            ></CardTopImg>
            <CardTopText>
              <MyChefText>마이요리사</MyChefText> 를 찾고 싶어요!
            </CardTopText>
          </CardTop>
          <CardBottom
            onClick={() => {
              navigate("/SignUpCustomer");
            }}
          >
            <CardBottomBtn>고객 회원가입</CardBottomBtn>
          </CardBottom>
        </Card>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const Container = styled.div`
  width: 100%;
  padding: 43px 0 76px;
  display: flex;
  gap: 82px;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 376px;
  box-shadow: 19px 18px 20px rgba(135, 68, 13, 0.25);
`;

const CardTop = styled.div`
  width: 100%;
  position: relative;
  padding: 0;
`;
const CardTopImg = styled.img`
  display: block;
  width: 100%;
`;
const CardTopText = styled.p`
  width: 100%;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -70%);
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
`;
const MyChefText = styled.span`
  font-size: 36px;
  line-height: 50px;
  color: #fa7c15;
`;

const CardBottom = styled.div`
  padding: 31px 64px 33px;
  background-color: #fff3ea;
`;
const CardBottomBtn = styled.button`
  width: 252px;
  height: 55px;
  color: #fff;
  font-size: 16px;
  line-height: 22.4px;
  font-weight: 600;
  background-color: rgba(250, 124, 21, 1);
  border: 0;
  border-radius: 44px;
`;
