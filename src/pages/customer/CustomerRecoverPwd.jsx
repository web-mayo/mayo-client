import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CustomerPwdUpdate } from "../../apis/CustomerAuth";

export const CustomerRecoverPwd = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userId, setUserId] = useState();
  const [rePostBan, setRePostBan] = useState(false);
  const [feedback, setFeedback] = useState();

  useEffect(() => {
    if (location.state.data && location.state.data.userId) {
      setUserId(location.state.data.userId);
    }
  }, [location]);

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const DialogSwitch = (bool) => {
    const dialog = document.getElementById("completeRecover");
    if (bool) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  };

  const onCompleted = (feedback) => {
    setRePostBan(false);
    console.log(feedback);
    if (feedback && feedback.call) {
      console.log(feedback);
      DialogSwitch(true);
    } else {
      if (feedback.back && feedback.back.message) {
        alert(feedback.back.message);
      } else {
        alert("비밀번호 재 설정에 실패하였습니다. 다시 설정해주세요.");
      }
    }
  };

  const onSubmit = async () => {
    if (rePostBan) {
      return;
    }
    const { password, passwordCheck } = getValues();
    const RecoverPwdInput = {
      userId: userId,
      password: password,
      passwordCheck: passwordCheck,
    };
    console.log(RecoverPwdInput);
    const conn = async () => {
      const response = await CustomerPwdUpdate(RecoverPwdInput);
      console.log(response);
      setFeedback(response);
    };
    conn();
    setRePostBan(true);
  };
  useEffect(() => {
    if (feedback) {
      onCompleted(feedback);
    }
  }, [feedback]);

  return (
    <Background>
      <Container>
        <TitleBox>
          <Title>비밀번호 재설정하기</Title>
          <TitleDesc>새로운 비밀번호를 입력해주세요.</TitleDesc>
        </TitleBox>
        <InputForm id="RecoverPwdForm" onSubmit={handleSubmit(onSubmit)}>
          <InputBox>
            <Label htmlFor="newPwd">새 비밀번호</Label>
            <Input
              id="newPwd"
              type="password"
              placeholder="8 ~ 16자리 / 영문 소문자, 숫자 조합"
              {...register("password", {
                required: true,
                minLength: {
                  value: 8,
                  message: "비밀번호는 8자리 이상 필요합니다.",
                },
                maxLength: {
                  value: 16,
                  message: "비밀번호는 16자리 미만으로 제한되어있습니다.",
                },
                pattern: /^[a-z0-9]*$/,
              })}
            ></Input>
            {errors.password?.message && (
              <ErrorMessage err={true}>{errors.password?.message}</ErrorMessage>
            )}
          </InputBox>
          <InputBox>
            <Label htmlFor="pwdCheck">새 비밀번호 [ 확인 ]</Label>
            <Input
              id="pwdCheck"
              type="password"
              placeholder="비밀번호를 다시 입력해주세요"
              {...register("passwordCheck", {
                required: true,
                validate: (value) =>
                  value === watch("password")
                    ? "비밀번호가 일치합니다."
                    : "비밀번호가 일치하지 않습니다.",
              })}
            ></Input>
            {errors.passwordCheck?.message && (
              <ErrorMessage
                err={
                  errors.passwordCheck?.message ===
                  "비밀번호가 일치하지 않습니다."
                    ? true
                    : false
                }
              >
                {errors.passwordCheck?.message}
              </ErrorMessage>
            )}
          </InputBox>
          <SubmitButton
            type="button"
            onClick={() => {
              onSubmit();
            }}
          >
            재 설정하기
          </SubmitButton>
        </InputForm>
        <AccountServices>
          <List>
            <RouteText onClick={() => navigate("/login")}>로그인</RouteText>
          </List>
          |
          <List>
            <RouteText onClick={() => navigate("/FindIdNumber")}>
              아이디 찾기
            </RouteText>
          </List>
          |
          <List>
            <RouteText onClick={() => navigate("/SelectSignUp")}>
              회원가입
            </RouteText>
          </List>
        </AccountServices>
        <Dialog id="completeRecover">
          <DialogText>비밀번호가 재설정되었습니다!</DialogText>
          <DialogBtn onClick={() => navigate("/login")}>
            로그인하러 가기
          </DialogBtn>
        </Dialog>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  padding: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff3ea;
`;

const Container = styled.div`
  width: 554px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 26px;
  background-color: #ffffff;
  padding: 65.5px 0;
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
const TitleDesc = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
`;

const InputForm = styled.form`
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  gap: 26px;
`;
const Label = styled.label`
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  font-weight: 500;
`;

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

const SubmitButton = styled.button`
  width: 100%;
  font-weight: 500;
  background-color: #fa7c15;
  font-size: 1rem;
  line-height: 24px;
  padding: 12px;
  border-radius: 8px;
  border-color: transparent;
  color: #ffffff;
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
