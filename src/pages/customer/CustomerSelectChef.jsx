import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { Tag } from "../../components/Tag";
import { getChefList } from "../../apis/CustomerPartyCtrler";
import { HomePartyInfo } from "../../modal/HomePartyInfo";
import { Dialog } from "@mui/material";
export const CustomerSelectChef = ({ type }) => {
  const navigate = useNavigate();
  const params = useLocation();
  const pId = params.pathname.split("/")[2];

  const [partyDetailId, setPartyDetailId] = useState();
  const [chefLists, setChefLists] = useState([]);
  const [chefId, setChefId] = useState();
  const [chefInfo, setChefInfo] = useState({});
  const [partyDetailOpen, setPartyDetailOpen] = useState(false);
  const partyModalSwitch = () => {
    if (partyDetailOpen) {
      setPartyDetailOpen(false);
    } else {
      setPartyDetailOpen(true);
    }
  };
  const openPartyDetail = (partyId) => {
    setPartyDetailId(partyId);
    partyModalSwitch();
  };

  // get chefList
  const PartyChefList = async (id) => {
    const CRres = await getChefList(id);
    if (CRres && CRres.back) {
      setChefLists(CRres.back);
    }
  };
  // set select Chef
  const setChefHandler = (id, data) => {
    setChefId(id);
    setChefInfo(data);
  };
  // borderColor
  const setBorderColor = (id) => {
    if (id == chefId) {
      return "#fa7c15";
    } else {
      return "rgba(219, 174, 137, 1)";
    }
  };
  useEffect(() => {
    PartyChefList(pId);
  }, [pId]);

  return (
    <Background>
      <Container>
        <TitleBox>
          <Title>마이요리사 선정하기</Title>
        </TitleBox>
        {/*  */}
        <ChefListBox>
          {chefLists &&
            chefLists.length > 0 &&
            chefLists.map((chef) => (
              <ChefListCard
                bordercolor={setBorderColor(chef.id)}
                onClick={() => {
                  setChefHandler(chef.id, chef);
                }}
                key={"chef" + chef.id}
              >
                <CardLeft>
                  <ChefImg src="/images/chefImage.png"></ChefImg>
                  <ChefProfile>
                    <Name>{chef.chefName}</Name>
                    <Career>
                      <p>[ 대표 경력 ]</p>
                      <div>{chef.chefInfoExperience}</div>
                    </Career>
                    <Introduce>
                      <p>[ 한 줄 소개 ]</p>
                      <div>{chef.chefInfoAdditional}</div>
                    </Introduce>
                  </ChefProfile>
                </CardLeft>
                <CardRight>
                  <Info>
                    {chef.HashList &&
                      chef.HashList.map((hash) => (
                        <Tag text={hash.chefHashTag}></Tag>
                      ))}

                    <p>[ 경력 ] 5년 | 28만원</p>
                  </Info>
                  <Requset type="button">상세보기</Requset>
                </CardRight>
              </ChefListCard>
            ))}
        </ChefListBox>

        {/*  */}
        <BtnBox>
          <PreBtn
            type="button"
            onClick={() => {
              navigate("/customerMatch");
            }}
          >
            취소
          </PreBtn>
          <SubmitButton
            // type="submit"
            type="button"
            onClick={() => {
              navigate("/customerMatch/" + pId + "/selectConfirm", {
                state: chefInfo,
              });
            }}
          >
            다음
          </SubmitButton>
        </BtnBox>
        <Dialog
          maxWidth="lg"
          children={HomePartyInfo(partyDetailId)}
          open={partyDetailOpen}
          onClose={partyModalSwitch}
        ></Dialog>
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

// const Dialog = styled.dialog`
//   border: 0;
//   width: 298px;
//   height: 124px;
//   border-radius: 10px;
//   top: -20%;
// `;
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
const ChefListBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 12px;
`;
//  복붙
const ChefListCard = styled.div`
  padding: 30px 40px;
  display: flex;
  border: 2px solid;
  border-color: ${({ bordercolor }) =>
    bordercolor ? bordercolor : "rgba(219, 174, 137, 1)"};
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
