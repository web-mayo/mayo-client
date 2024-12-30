import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Title } from "../../components/Title";
import Pagination from "@mui/material/Pagination";
import { MakeHomeParty } from "../../modal/MakeHomeParty";
import { isLoggined } from "../../token";
import { useNavigate } from "react-router-dom";
export const ChefList = () => {
  const navigate = useNavigate();
  // pagination color change
  const theme = {
    "& .Mui-selected": {
      bgcolor: "rgba(250, 124, 21, 1) !Important",
      color: "#ffffff !Important",
    },
  };

  // modal
  const [cancel, setCancel] = useState(true);
  useEffect(() => {
    if (!cancel) {
      DialogSwitch(false);
    }
  }, [cancel]);
  const DialogSwitch = (bool) => {
    const dialog = document.getElementById("enrollHomeParty");
    if (bool) {
      dialog.showModal();
      setCancel(true);
    } else {
      dialog.close();
    }
  };

  return (
    <>
      <Container>
        <Title fontsize={"26px"} title={"마요 추천 요리사"} />
        <Title
          backgroundcolor={"white"}
          title={"마이요리사가 필요하신가요?"}
          subTitle={"홈파티 일정을 지금 등록해보세요!"}
        ></Title>
        <UploadButton
          onClick={() => {
            if (isLoggined) {
              DialogSwitch(true);
            } else {
              navigate("/login");
            }
          }}
        >
          <Upload>홈파티 등록하기 {">"} </Upload>
        </UploadButton>
        {isLoggined && (
          <EnrollDialog id="enrollHomeParty">
            <MakeHomeParty setCancel={setCancel} />
          </EnrollDialog>
        )}
        <ContentContainer>
          <ChefCardContainer>
            <ContainerTop>
              <Background>
                <Image>🧑‍🍳</Image>
              </Background>
              <ExplainBox>
                <NameBox>
                  <Name>홍길동 셰프</Name>
                  <ExtraBox>
                    <SearchText>이탈리안</SearchText>
                    <SearchText>플레이팅</SearchText>
                  </ExtraBox>
                </NameBox>
                <DetailBox>
                  <Detail1>
                    <Content>[대표 경력]</Content>
                    <Text>00호텔 5년 동안 메인 셰프로서 근무</Text>
                  </Detail1>
                  <Bar>|</Bar>
                  <Detail2>
                    <Content>[활동 연수]</Content>
                    <Text>
                      5년 | {"("}희망 시급{")"}
                    </Text>
                  </Detail2>
                  <Bar>|</Bar>
                  <Detail3>
                    <Content>[한 줄 소개]</Content>
                    <Text>~~~~~~~~~~</Text>
                  </Detail3>
                </DetailBox>
              </ExplainBox>
            </ContainerTop>
            <ContainerMiddle>
              <Border></Border>
            </ContainerMiddle>
            <ContainerBottom>
              <Picture src="images/사진 스크롤.png"></Picture>
            </ContainerBottom>
          </ChefCardContainer>
          <ChefCardContainer>
            <ContainerTop>
              <Background>
                <Image>🧑‍🍳</Image>
              </Background>
              <ExplainBox>
                <NameBox>
                  <Name>홍길동 셰프</Name>
                  <ExtraBox>
                    <SearchText>이탈리안</SearchText>
                    <SearchText>플레이팅</SearchText>
                  </ExtraBox>
                </NameBox>
                <DetailBox>
                  <Detail1>
                    <Content>[대표 경력]</Content>
                    <Text>00호텔 5년 동안 메인 셰프로서 근무</Text>
                  </Detail1>
                  <Bar>|</Bar>
                  <Detail2>
                    <Content>[활동 연수]</Content>
                    <Text>
                      5년 | {"("}희망 시급{")"}
                    </Text>
                  </Detail2>
                  <Bar>|</Bar>
                  <Detail3>
                    <Content>[한 줄 소개]</Content>
                    <Text>~~~~~~~~~~</Text>
                  </Detail3>
                </DetailBox>
              </ExplainBox>
            </ContainerTop>
            <ContainerMiddle>
              <Border></Border>
            </ContainerMiddle>
            <ContainerBottom>
              <Picture src="images/사진 스크롤.png"></Picture>
            </ContainerBottom>
          </ChefCardContainer>
          <ChefCardContainer>
            <ContainerTop>
              <Background>
                <Image>🧑‍🍳</Image>
              </Background>
              <ExplainBox>
                <NameBox>
                  <Name>홍길동 셰프</Name>
                  <ExtraBox>
                    <SearchText>이탈리안</SearchText>
                    <SearchText>플레이팅</SearchText>
                  </ExtraBox>
                </NameBox>
                <DetailBox>
                  <Detail1>
                    <Content>[대표 경력]</Content>
                    <Text>00호텔 5년 동안 메인 셰프로서 근무</Text>
                  </Detail1>
                  <Bar>|</Bar>
                  <Detail2>
                    <Content>[활동 연수]</Content>
                    <Text>
                      5년 | {"("}희망 시급{")"}
                    </Text>
                  </Detail2>
                  <Bar>|</Bar>
                  <Detail3>
                    <Content>[한 줄 소개]</Content>
                    <Text>~~~~~~~~~~</Text>
                  </Detail3>
                </DetailBox>
              </ExplainBox>
            </ContainerTop>
            <ContainerMiddle>
              <Border></Border>
            </ContainerMiddle>
            <ContainerBottom>
              <Picture src="images/사진 스크롤.png"></Picture>
              <Picture src="images/사진 스크롤.png"></Picture>
              <Picture src="images/사진 스크롤.png"></Picture>
              <Picture src="images/사진 스크롤.png"></Picture>
              <Picture src="images/사진 스크롤.png"></Picture>
              <Picture src="images/사진 스크롤.png"></Picture>
              <Picture src="images/사진 스크롤.png"></Picture>
            </ContainerBottom>
          </ChefCardContainer>
          <PaginationBox>
            <Pagination
              showLastButton={true}
              count={1}
              shape="rounded"
              sx={theme}
            />
          </PaginationBox>
        </ContentContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 915px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 40px 0 100px;
`;

const ChefCardContainer = styled.div`
  width: 915px;
  height: 353px;
  background: white;
  border: 1px solid rgba(219, 174, 137, 1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const ContainerTop = styled.div`
  width: 834px;
  height: 85px;
  padding: 20px 40px;
  display: flex;
`;

const Background = styled.div`
  width: 85px;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #b65c134d;
  border-radius: 8px;
`;

const Image = styled.div`
  font-size: 40px;
`;

const ExplainBox = styled.div`
  height: 85px;
  display: flex;
  flex-direction: column;
  padding-left: 40px;
`;

const NameBox = styled.div`
  display: flex;
  padding-top: 7px;
  padding-bottom: 5px;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding-right: 60px;
`;

const ExtraBox = styled.div`
  width: 150px;
  display: flex;
  gap: 8px;
`;

const SearchText = styled.div`
  color: #b65c1380;
  border-radius: 14px;
  background-color: white;
  border: 2px solid #b65c1380;
  padding: 5px 10px;
  font-size: 11px;
  font-weight: 600;
`;

const DetailBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Detail1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Detail2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
`;

const Detail3 = styled.div``;

const Content = styled.div`
  color: #919191;
  font-size: 13.5px;
`;

const Text = styled.div``;

const Bar = styled.div`
  color: #919191;
  font-size: 20px;
  font-weight: 300;
  padding-top: 5px;
  padding-right: 30px;
`;

const ContainerMiddle = styled.div`
  width: 835px;
  padding-left: 40px;
`;

const Border = styled.div`
  width: 835px;
  border: 1.7px solid #b65c134d;
`;

const ContainerBottom = styled.div`
  width: 835px;
  height: 188px;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 20px 40px;
  gap: 15px;
`;

const Picture = styled.img`
  width: 188px;
  height: 188px;
`;
const UploadButton = styled.div`
  width: 208px;
  height: 40px;
  background-color: ${(props) => props.theme.main};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Upload = styled.div`
  color: white;
  font-weight: 600;
  font-size: 17px;
`;
const PaginationBox = styled.div`
  padding-top: 40px;
  margin: 0 auto;
  width: fit-content;
`;
const EnrollDialog = styled.dialog`
  border: 0;
  padding: 0;
`;
