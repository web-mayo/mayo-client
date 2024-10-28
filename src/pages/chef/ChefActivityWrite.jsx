import React from "react";
import styled from "styled-components";
import { Title } from "../../components/Title";

export const ChefActivityWrite = () => {
  return (
    <>
      <ChefActivityWriteContainer>
        <Title title={"활동 프로필 작성"} backgroundcolor={"white"} />
        <Middle>
          <Container>
            <Table>
              <TableRow>
                <TableCellHeader>
                  <InfoLabel>대표 경력</InfoLabel>
                </TableCellHeader>
                <TableCell>
                  <InfoValueTextArea placeholder="입력해주신 대표 경험은 요리사님의 프로필에서 보여질 예정이에요." />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellHeader>
                  <InfoLabel>한 줄 소개</InfoLabel>
                </TableCellHeader>
                <TableCell>
                  <InfoValueTextArea placeholder="요리사님의 경험이나 강점을 한 줄로 요약해서 설명해주세요." />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellHeader>
                  <InfoLabel>활동 태그</InfoLabel>
                </TableCellHeader>
                <TableCell>
                  <InfoValueTextArea
                    placeholder={`자신있는 활동 태그를 작성해주세요. \n#양식 #한식 #일식 #맞춤형요리 #코스요리 #플레이팅 #저염식 #건강식 #중식 #이탈리안 #프랜치 #멕시칸 #한식조리 등`}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellHeader>
                  <InfoLabel>활동 가능 지역</InfoLabel>
                </TableCellHeader>
                <TableCell>
                  <InfoValueTextArea placeholder="활동 가능 지역을 적어주세요."></InfoValueTextArea>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellHeader>
                  <InfoLabel>시그니처 코스 및 메뉴</InfoLabel>
                </TableCellHeader>
                <TableCell>
                  <InfoValueTextArea placeholder="요리사님만의 시그니처 코스와 메뉴에 대한 간단한 설명을 적어주세요."></InfoValueTextArea>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellHeader>
                  <InfoLabel>서비스 범위 및 희망 시급</InfoLabel>
                </TableCellHeader>
                <TableCell>
                  <InfoValueTextArea placeholder="코스 구성 / 재료 선정 / 재료 구입 / 조리 / 식기, 조리도구 세척 등 서비스 가능 범위를 설정해주세요. 서비스 범위별 희망 시급도 함께 작성해주세요."></InfoValueTextArea>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellHeader>
                  <InfoLabel>포트폴리오</InfoLabel>
                </TableCellHeader>
                <TableCell>
                  <UploadButtonContainer>
                    <InfoValueButton>
                      사진 업로드{"("}최대 40MB{")"}
                    </InfoValueButton>
                    <UploadDesc>
                      고객님들에게 보여질 사진을 최대 10장 업로드할 수 있습니다.
                    </UploadDesc>
                  </UploadButtonContainer>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellHeader>
                  <InfoLabel>증명서</InfoLabel>
                </TableCellHeader>
                <TableCell>
                  <UploadButtonContainer>
                    <InfoValueButton>
                      사진 업로드{"("}최대 10MB{")"}
                    </InfoValueButton>
                    <UploadDescContainer>
                      <UploadDesc>
                        증명서(필수) : 신분증(주민등록증, 운전면허증, 여권)
                        ⚠️사진과 주민등록번호가 보이는 신분증만 인증
                      </UploadDesc>
                      <UploadDesc>
                        증명서(선택) : 재적증명서, 졸업증명서, 경력확인서,
                        자격증 등
                      </UploadDesc>
                    </UploadDescContainer>
                  </UploadButtonContainer>
                </TableCell>
              </TableRow>
            </Table>
          </Container>
        </Middle>
        <Bottom>
          <Button>
            <SaveText>저장하기</SaveText>
          </Button>
        </Bottom>
      </ChefActivityWriteContainer>
    </>
  );
};

const ChefActivityWriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
`;

const Middle = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  //width: 1098px;
  border: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
`;

const Table = styled.div`
  display: table;
  width: 100%;
`;

const TableRow = styled.div`
  display: table-row;
`;

const TableCell = styled.div`
  display: table-cell;
  padding: 15px;
  border: 1px solid #d9d9d9;
  vertical-align: middle;
  text-align: center;
`;

const TableCellHeader = styled(TableCell)`
  background: ${(props) => props.theme.sub};
  width: 282px;
  font-weight: 700;
`;

const InfoLabel = styled.div`
  font-size: 17px;
  font-weight: 700;
`;

const InfoValueTextArea = styled.textarea`
  width: 730px;
  height: 80px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  padding: 15px 20px;
  resize: none;
  font-size: 14px;
`;

const InfoValueInput = styled.input`
  width: 90%;
  height: 20px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  padding: 20px;
`;

const UploadButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const UploadDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const UploadDesc = styled.div`
  font-weight: 400;
  color: #b3b3b3;
  font-size: 14px;
  align-self: flex-start;
`;

const InfoValueButton = styled.button`
  font-size: 15px;
  border-radius: 8px;
  border: 1px solid #8e8e8e;
  background-color: #d9d9d9;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Bottom = styled.div`
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  width: 307px;
  height: 48px;
  border-radius: 8px;
  background: #fa7c15;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SaveText = styled.div`
  font-weight: 700;
  font-size: 17px;
  color: white;
`;
