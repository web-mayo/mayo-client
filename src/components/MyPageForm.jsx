import React from "react";
import styled from "styled-components";
import { Title } from "./Title";
import { useNavigate } from "react-router-dom";
import { listToString, listToTags } from "../extraNeeds/listToString";
import { regionToKorean } from "../constants/region";
import { requestRangeToKorean } from "../constants/requestRange";

// 마이페이지 상태는 2가지 경우에 따라 분류
// 요리사 or 고객 : type props
// 편집 상태 O or X  : editmode state
export const MyPageForm = ({
  formFields,
  type,
  profile,
  activeProfile,
  account,
  personalId // 요리사 주민등록번호 (활동비 원천징수 정보)
}) => {
  const navigate = useNavigate("/edit");
  const role = localStorage.getItem("role");
  console.log('formfields',formFields);

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
            <EditMyInfo
              onClick={() => {
                if (role == "Customer") {
                  navigate("/UserEditInfo", {
                    state: { profile },
                  });
                } else if(role == "Chef"){
                  navigate("chefEditInfo", {
                    state: { profile },
                  })
                }
              }}
            >
              회원 정보 수정
            </EditMyInfo>
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
                { type === "chef" ? (<ProfileValue>{profile?.birthday}</ProfileValue>) :
                (<ProfileValue>{profile?.birthDay}</ProfileValue>)}  
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
              <EditMyInfo
                onClick={() => {
                  navigate("account", {
                    state: {
                      account: account.call == 1 ? account.back : account.call,
                    },
                  });
                }}
              >
                {type == "customer" ? "환불" : "정산"} 계좌 수정
              </EditMyInfo>
            </AccountTitle>
            {account && account.call ? (
              <Account>
                {account.back?.result?.bank}
                <span>{account.back?.result?.account}</span>
              </Account>
            ) : (
              <Account>등록된 계좌가 없습니다.</Account>
            )}

            {type === "chef" &&
              <>
                <AccountTitle>
                <UserId>활동비 원천징수 정보</UserId>
                {personalId === null &&
                  <EditMyInfo
                  onClick={() => {
                    navigate("chefPersonalId");
                  }}
                >
                  주민등록번호 등록
                </EditMyInfo>
                }
              </AccountTitle>
              {personalId !== null ? (
                <Account>
                  [주민등록번호]
                  <span>{personalId}</span>
                </Account>
              ) : (
                <Account>주민등록번호를 등록해주세요.</Account>
              )}
              </>
            }
            
          </ProfileAccount>
        </ProfileContainer>
        <AdditionContainer>
          <AdditionTitleContainer>
            <AdditionTitle>
              <AdditionTitleText>
                {type === "chef" ? "활동 프로필" : "주방 프로필"}
              </AdditionTitleText>
              {(type === "chef") &&
                <WriteButton onClick={()=> navigate('edit')}>
                  활동 프로필 관리
                </WriteButton>
              }
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
            <>
              <AdditionInfo>
                <AdditionInfoLabel>{formFields.experience.label}</AdditionInfoLabel>
                <AdditionInfoValue>{formFields.experience.value || '-'}</AdditionInfoValue>
              </AdditionInfo>
              <AdditionInfo>
                <AdditionInfoLabel>{formFields.personalHistory.label}</AdditionInfoLabel>
                <AdditionInfoValue>{formFields.personalHistory.value} 년</AdditionInfoValue>
              </AdditionInfo>
              <AdditionInfo>
                <AdditionInfoLabel>{formFields.introduce.label}</AdditionInfoLabel>
                <AdditionInfoValue>{formFields.introduce.value || '-'}</AdditionInfoValue>
              </AdditionInfo>
              <AdditionInfo>
                <AdditionInfoLabel>{formFields.tags.label}</AdditionInfoLabel>
                <AdditionInfoValue>
                  <AdditionInfoValueContainer>
                    <AdditionInfoValueTitle>요리 카테고리</AdditionInfoValueTitle>
                    <AdditionInfoValueContent> {formFields.tags.value?.length && 
                                                listToTags(
                                                  formFields.tags.value.filter(x => x.category === 1).map(x=>x.chefHashTag)
                                                ) || " - "}
                    </AdditionInfoValueContent>
                  </AdditionInfoValueContainer>
                  <AdditionInfoValueContainer>
                    <AdditionInfoValueTitle>서비스 유형</AdditionInfoValueTitle>
                    <AdditionInfoValueContent>{formFields.tags.value?.length && 
                                                listToTags(
                                                  formFields.tags.value.filter(x => x.category === 2).map(x=>x.chefHashTag)                                                  
                                                ) || " - "}
                    </AdditionInfoValueContent>
                  </AdditionInfoValueContainer>
                </AdditionInfoValue>
              </AdditionInfo>
              <AdditionInfo>
                <AdditionInfoLabel>{formFields.regions.label}</AdditionInfoLabel>
                <AdditionInfoValue>
                {Object.entries(formFields?.regions.value).map(([region, subRegions]) => (
                  <AdditionInfoValueContainer key={region}>
                    <AdditionInfoValueTitle>{regionToKorean[region]}</AdditionInfoValueTitle>
                    <AdditionInfoValueContent>
                      {listToString(subRegions) || null}
                    </AdditionInfoValueContent>
                  </AdditionInfoValueContainer>
                ))}
                </AdditionInfoValue>
              </AdditionInfo>
              <AdditionInfo>
                <AdditionInfoLabel>{formFields.serviceListAndHopePay.label}</AdditionInfoLabel>
                <AdditionInfoValue>
                <AdditionInfoValueContainer>
                    <AdditionInfoValueTitle>희망 시급</AdditionInfoValueTitle>
                    <AdditionInfoValueContent>{formFields.serviceListAndHopePay.value.hopePay} 원</AdditionInfoValueContent>
                  </AdditionInfoValueContainer>
                  <AdditionInfoValueContainer>
                    <AdditionInfoValueTitle>서비스 범위</AdditionInfoValueTitle>
                    <AdditionInfoValueContent>{listToString(formFields.serviceListAndHopePay.value.serviceList?.map(x=>requestRangeToKorean[x])) || '-'}</AdditionInfoValueContent>
                  </AdditionInfoValueContainer>
                </AdditionInfoValue>
              </AdditionInfo>
              <AdditionInfo>
                <AdditionInfoLabel>{formFields.description.label}</AdditionInfoLabel>
                <AdditionInfoValue>{formFields.description.value|| '-'}</AdditionInfoValue>
              </AdditionInfo>
              <AdditionInfo>
                <AdditionInfoLabel>{formFields.minServiceTime.label}</AdditionInfoLabel>
                <AdditionInfoValue>{formFields.minServiceTime.value} 시간</AdditionInfoValue>
              </AdditionInfo>
            </>
            
              // formFields?.map(({ label, name, type, value }, idx) => (
              //   <AdditionInfo key={idx}>
              //     <AdditionInfoLabel>{label}</AdditionInfoLabel>
              //     <AdditionInfoValue>{value}</AdditionInfoValue>
              //   </AdditionInfo>
              // ))
              }
            {type === "customer" &&
              formFields?.map(({ label, name, inputType, value }, idx) => (
                <AdditionInfo
                  type={type}
                  key={"kitchenInfo - " + idx}
                  idx={idx}
                >
                  <AdditionInfoLabel type={type}>{label}</AdditionInfoLabel>
                  <AdditionInfoValue>
                    {name == "tools" &&
                      value?.length > 0 &&
                      value?.map((el) => <span>{el}</span>)}
                    {name == "kitchen_image" &&
                      value?.length > 0 &&
                      value?.map((el) => {
                        <img src={el} alt="" />;
                      })}
                    {name == "kitchen_image" && (
                      <ShowImgBox>
                        {value &&
                          value.length > 0 &&
                          value.map((url, index) => (
                            <ShowImg
                              key={"img" + index}
                              src={"https://" + url}
                            ></ShowImg>
                          ))}
                      </ShowImgBox>
                    )}
                    {name != "tools" && name != "kitchen_image" && value}
                  </AdditionInfoValue>
                  {idx === 0 && (
                    <KitchenEditBtn
                      onClick={() => {
                        navigate("kitchenManage");
                      }}
                    >
                      주방 프로필 관리
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
  margin-bottom: 7%;
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
  cursor: pointer;
`;

const ProfileBottom = styled.div`
  padding: 0 110px;
  //padding-bottom: 10px;
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
  margin-top: 20px;
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
  width: 165px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 10px;
  border: 1px solid #000;
  cursor: pointer;
  font-weight: 700;
  border: 1px solid #000;
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
  & > span {
    margin-right: 5px;
  }
  & > span::after {
    content: "/";
    display: inline-block;
    margin-left: 5px;
  }
  & > span:last-child::after {
    content: "";
    margin-left: 0;
  }
  display: flex;
  flex-direction: column;
  gap : 15px;
`;

const AdditionInfoValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`
const AdditionInfoValueTitle = styled.div`
  color: #8E8E8E;
  font-size: 15px;
  font-weight: 500;
`
const AdditionInfoValueContent = styled.div`
  
`

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
const ShowImg = styled.img`
  vertical-align: top;
  border: 1px solid #dcdcdc;
  max-width: 120px;
  object-fit: cover;
  aspect-ratio: 1/1;
`;
const ShowImgBox = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 20px;
`;
