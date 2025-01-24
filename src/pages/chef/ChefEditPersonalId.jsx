import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { fetchPatchChefIdentification } from '../../apis/chefMyPage';

export const ChefEditPersonalId = () => {
    const navigate = useNavigate();
    const [personalId, setPersonalId] = useState(null);
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

    useEffect(() => {
        if (personalId) {
          setValue("first", personalId?.first || "");
          setValue("last", personalId?.last || "");
        }
      }, [personalId, setValue]);


    const DialogSwitch = (bool) => {
        const dialog = document.getElementById("completeSignUp");
        if (bool) {
          dialog.showModal();
        } else {
          dialog.close();
        }
    };
    
    // const onCompleted = (feedback) => {
    //     DialogSwitch(true); // 임시
    //     if (feedback && feedback.call) {
    //       DialogSwitch(true);
    //     } else {
    //       if (feedback && feedback.back.response.data) {
    //         alert(feedback.back.response.data.message);
    //       } else {
    //         alert("정보 수정에 문제가 생겼습니다. 다시 시도해주세요.");
    //       }
    //     }
    // };

    const onSubmit = async() => {
        // 백엔드에 보낼 데이터
        const { first, last } = getValues();
          var inputData = {
          first: first,
          last: last,
      };
      console.log('전송 주민번호 데이터:', inputData);
        try{
              const result = await fetchPatchChefIdentification(inputData);
              console.log('주민번호',result);
              //onCompleted(result); 
              if(result.back == 'Success'){
                alert('저장이 완료되었습니다.');
                navigate('/chefPage');
              } else{
                alert('저장에 실패했습니다. 다시 시도해주세요.');
              }
            } catch(e){
              alert('저장 중 오류가 발생했습니다. 다시 시도해주세요.');
            }
      
    }
    
  
    return (
        <Background>
          <Container>
            <BorderBox>
                <InputForm >
                    <Label>주민등록번호</Label>
                    <InputContainer>
                        <Input 
                        id="first"
                        type="text"
                        placeholder='주민등록번호 앞자리'
                        maxLength={6} 
                        {...register("first", {
                            required: "앞자리는 필수입니다.", 
                            pattern: {
                                value: /^[0-9]{6}$/,
                                message: "올바른 형식의 앞자리를 입력하세요.",
                            },
                          })}/> - 
                        <Input 
                        id="last"
                        type="password"
                        placeholder='주민등록번호 뒷자리'
                        maxLength={7} 
                        {...register("last", {
                            required: "뒷자리는 필수입니다.",
                            pattern: {
                                value: /^[0-9]{7}$/,
                                message: "올바른 형식의 뒷자리를 입력하세요.",
                            },
                          })}/>
                    </InputContainer>
                    {errors.first && <ErrorMessage err>{errors.first.message}</ErrorMessage>}
                    {errors.last && <ErrorMessage err>{errors.last.message}</ErrorMessage>}
                </InputForm>
                <Description>
                소득세법 제145조에 의거하여 원천징수 신고를 위해 세무서에 제출할 목적으로 주민등록번호를 수집하며, 
                수집된 개인정보는 개인정보처리방침에 따라 철저히 보호됩니다.
                </Description>
                <ExtraDescription>
                    ⚠️<span style={{ color:'#F14336'}}>계좌 정보와 주민등록번호가 맞는지 꼭 확인해 주세요.</span>
                </ExtraDescription>
            </BorderBox>
            <BtnBox>
            <PreBtn
              type="button"
              onClick={() => {
                navigate("/chefPage");
              }}
            >
              이전
            </PreBtn>
            <SubmitButton
              // type="submit"
              type="button"
              onClick={() => {
                onSubmit();
              }}
            >
              저장하기
            </SubmitButton>
          </BtnBox>
          </Container>

          <Dialog id="completeSignUp">
          <DialogText>주민등록번호가 저장되었습니다!</DialogText>
          <DialogBtn onClick={() => navigate("/chefPage")}>
            마이페이지로 돌아가기
          </DialogBtn>
        </Dialog>
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
      width: 554px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      background-color: #ffffff;
    `;
    const BorderBox = styled.div`
      padding: 38px 50px;
      display: flex;
      flex-direction: column;
      gap: 40px;
      border: 1px solid rgba(217, 217, 217, 1);
      border-radius: 10px;
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
    
    const InputForm = styled.form`
        display: flex;
        flex-direction: column;
        gap: 5px;
    `;

    const Label = styled.label`
      font-size: 15px;
      line-height: 20px;
      color: #000000;
      font-weight: 400;
    `;

    const InputContainer = styled.div`
        
    `

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
      font-size: 14px;
      line-height: 20px;
      &::placeholder {
        color: rgba(0, 0, 0, 0.5);
      }
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
      font-size:16px;
      border-radius: 8px;
      border: 0;
      color: #ffffff;
      cursor: pointer;
    `;
    const SubmitButton = styled.button`
      width: 195px;
      height: 48px;
      font-weight: 500;
      background-color: #fa7c15;
      font-size: 16px;
      border-radius: 8px;
      border: 0;
      color: #ffffff;
      cursor: pointer;
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
      margin-top: 38px;
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
      color: ${({ err }) => (err ? "#F14336" : "green")};
    `;
    
    const Description = styled.div`
        font-size: 14px;
        line-height: 20px;
        color: #00000080;
    `
    const ExtraDescription = styled.div`
        font-size: 13px;
    `