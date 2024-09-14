import React from 'react'
import styled from 'styled-components'
import { Title } from '../../components/Title'
import { Dropdown } from '../../components/Dropdown'

export const CustomerKitchenWrite = () => {
  return (
    <>
    <ChefActivityWriteContainer>
      <Title title={'주방 프로필 작성'} backgroundColor={'white'} />
      <Middle>
        <Container>
          <Table>
            <TableRow>
              <TableCellHeader>
                <InfoLabel>주방 닉네임</InfoLabel>
              </TableCellHeader>
              <TableCell>
                <InfoValueInput placeholder="최대 10글자까지 자유롭게 수정 가능합니다." maxlength="10"/>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCellHeader>
                <InfoLabel >주소</InfoLabel>
              </TableCellHeader>
              <TableCell>
                <InfoValueTextArea/>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCellHeader>
                <InfoLabel>상세주소</InfoLabel>
              </TableCellHeader>
              <TableCell>
                <InfoValueInput placeholder='000동 000호' />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCellHeader>
                <InfoLabel>화구 종류</InfoLabel> 
              </TableCellHeader>
              <TableCell>
                <Dropdown />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCellHeader>
                <InfoLabel>주방 사진</InfoLabel>
              </TableCellHeader>
              <TableCell>
                <InfoValueButton>사진 업로드{'('}최대 40MB{')'}</InfoValueButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCellHeader>
                <InfoLabel>조리 기구 및 도구</InfoLabel>
              </TableCellHeader>
              <TableCell>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCellHeader>
                <InfoLabel>주방 관련 요청사항</InfoLabel>
              </TableCellHeader>
              <TableCell>
                <InfoValueTextArea placeholder='주방에 관련된 요청사항을 작성해주세요.'></InfoValueTextArea>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCellHeader>
                <InfoLabel>주방 관련 특이사항</InfoLabel>
              </TableCellHeader>
              <TableCell>
              <InfoValueTextArea placeholder='예시) 음식물 이송설비 시스템이 있습니다.'></InfoValueTextArea>
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
  )
}

const ChefActivityWriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
`

const Middle = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
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
  background: ${(props)=>props.theme.sub};
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
  width: 730px;
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
`

const UploadDesc = styled.div`
  font-weight: 400;
  color: #B3B3B3;
  font-size: 14px;
  align-self: flex-start;
`

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
