import React, { useState } from "react";
import styled from "styled-components";
import { Title } from "../../components/Title";
import { foodCategory, serviceType } from "../../constants/activity";
import { region } from "../../constants/region";
import { RequestRangeCheckBox } from "../../components/RequestRangeCheckBox";
import { useInput } from "../../hooks/useInput";

export const ChefActivityWrite = () => {
  const [selectedFoodCategory, setSelectedFoodCategory] = useState([]);
  const [selectedServiceType, setSelectedServiceType] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState([]);
  const experienceInput = useInput(""); // 대표 경력
  const careerInput = useInput(""); // 경력 <- 필요
  const commentInput = useInput(""); // 한 줄 소개
  const hopePay = useInput(""); // 희망 시급
  const description = useInput(""); // 시그니처 코스 및 메뉴
  const minServiceTime = useInput(""); // 최소 서비스 시간
  const [portfolioImages, setPortfolioImages] = useState([]); // 포트폴리오 이미지
  const [licenseImages, setLicenseImages] = useState([]); // 라이센스 이미지

  const selectKey = (type, selectKey) => {
    if(type === 'foodCategory'){
      setSelectedFoodCategory((prev)=>
        prev.includes(selectKey) ? 
        prev.filter((key)=> key !==  selectKey) :
        [...prev, selectKey]
      );
    }
    else if(type === 'serviceType'){
      setSelectedServiceType((prev)=>
        prev.includes(selectKey) ? 
        prev.filter((key)=> key !==  selectKey) :
        [...prev, selectKey]
      );
    } else{
      setSelectedRegion((prev)=>
        prev.includes(selectKey) ? 
        prev.filter((key)=> key !==  selectKey) :
        [...prev, selectKey]
      );
    }
  }

  const handleImageChange = (type, e) => {
    const files = Array.from(e.target.files); // 여러 파일을 배열로 변환

    if (type === "portfolio") {
      setPortfolioImages((prev) => [...prev, ...files]); // 기존 파일에 새 파일 추가
    } else if (type === "license") {
      setLicenseImages((prev) => [...prev, ...files]);
    }
  };

  const removeImage = (type, index) => {
    if (type === "portfolio") {
      setPortfolioImages((prev) => prev.filter((_, i) => i !== index)); // 선택된 이미지 제거
    } else if (type === "license") {
      setLicenseImages((prev) => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <>
      <ChefActivityWriteContainer>
        <Title title={"활동 프로필 작성"} backgroundcolor={"white"} />
        <Middle>
          <Container>
            <Table>
              <TableRow>
                <TableCellHeader>
                  <InfoLabel>대표 경력(경험)</InfoLabel>
                </TableCellHeader>
                <TableCell>
                    <InfoValueTextArea {...experienceInput} placeholder="입력해주신 대표 경험은 요리사님의 프로필에서 보여질 예정이에요." />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellHeader>
                  <InfoLabel>경력</InfoLabel>
                </TableCellHeader>
                <TableCell>
                  <UploadButtonContainer>
                    <InfoValueInput id="time" placeholder="00" /><span style={{ fontSize: "16px" }}>년</span>
                    <InfoValueDesc>요리사로서 근무하신 기간을 입력해주세요.</InfoValueDesc>
                  </UploadButtonContainer>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellHeader>
                  <InfoLabel {...commentInput}>한 줄 소개</InfoLabel>
                </TableCellHeader>
                <TableCell>
                  <InfoValueTextArea placeholder="요리사님의 경험이나 강점을 한 줄로 요약해서 설명해주세요." />
                  <InfoValueRef>
                    <InfoValueRefTitle>💡참고해서 작성해 보세요.</InfoValueRefTitle>
                    <InfoValueRefContent> ✅ 자신의 활동 경력이나 강점을 부각해서 작성해 주세요.</InfoValueRefContent>
                    <InfoValueRefContent>✅ 어떤 서비스 방식을 제공할지 작성해 주세요. </InfoValueRefContent> 
                    <InfoValueRefContent>🚫 ‘최선을 다하겠습니다’와 같은 막연한 내용은 피해주세요.</InfoValueRefContent> 
                  </InfoValueRef>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellHeader>
                  <InfoLabel>활동 태그</InfoLabel>
                </TableCellHeader>
                <TableCell>
                  <span style={{fontSize: '14px', color: '#B3B3B3'}}>제공 가능한 요리 카테고리와 서비스 유형을 전부 선택해주세요. 활동 태그는 고객님이 요리사님을 찾을 때 중요한 요소가 됩니다.</span>
                  <KeyContainer>
                    <KeyLabelWrapper>
                      <KeyLabel>요리 카테고리</KeyLabel>
                    </KeyLabelWrapper>
                    <KeyList>
                      {foodCategory.map((key)=>(
                        <Key 
                        selected={selectedFoodCategory.includes(key)}
                        onClick={()=>selectKey('foodCategory', key)}>{key}</Key>
                      ))}
                    </KeyList>
                  </KeyContainer>
                  <KeyContainer>
                    <KeyLabelWrapper>
                      <KeyLabel>서비스 유형</KeyLabel>
                    </KeyLabelWrapper>
                    <KeyList>
                      {serviceType.map((key)=>(
                        <Key 
                        selected={selectedServiceType.includes(key)}
                        onClick={()=>selectKey('serviceType', key)}>{key}</Key>
                      ))}
                    </KeyList>
                  </KeyContainer>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellHeader>
                  <InfoLabel>활동 가능 지역</InfoLabel>
                </TableCellHeader>
                <TableCell>
                <span style={{fontSize: '14px', color: '#B3B3B3'}}>활동 가능 지역을 전부 선택해주세요.</span>
                  <KeyContainer>
                      <KeyLabelWrapper>
                        <KeyLabel>서울특별시</KeyLabel>
                        <Key 
                         selected={selectedRegion.includes(region['Seoul'][0])}
                        onClick={()=>selectKey('region', region['Seoul'][0])}>{region['Seoul'][0]}</Key>
                      </KeyLabelWrapper>
                      <KeyList>
                        {region['Seoul'].slice(1, region['Seoul'].length).map((key)=>(
                          <Key 
                          selected={selectedRegion.includes(key)}
                          onClick={()=>selectKey('region', key)}>{key}</Key>
                        ))}
                      </KeyList>
                    </KeyContainer>
                  <KeyContainer>
                      <KeyLabelWrapper>
                        <KeyLabel>인천광역시</KeyLabel>
                        <Key 
                         selected={selectedRegion.includes(region['Incheon'][0])}
                        onClick={()=>selectKey('region', region['Incheon'][0])}>{region['Incheon'][0]}</Key>
                      </KeyLabelWrapper>
                    </KeyContainer>
                    <KeyContainer>
                      <KeyLabelWrapper>
                        <KeyLabel>경기도</KeyLabel>
                      </KeyLabelWrapper>
                      <KeyList>
                        {region['Gyeonggi'].map((key)=>(
                          <Key 
                          selected={selectedRegion.includes(key)}
                          onClick={()=>selectKey('region', key)}>{key}</Key>
                        ))}
                      </KeyList>
                    </KeyContainer>
                    <KeyContainer>
                      <KeyLabelWrapper>
                        <KeyLabel>강원도</KeyLabel>
                      </KeyLabelWrapper>
                      <KeyList>
                        {region['Gangwon'].map((key)=>(
                          <Key 
                          selected={selectedRegion.includes(key)}
                          onClick={()=>selectKey('region', key)}>{key}</Key>
                        ))}
                      </KeyList>
                    </KeyContainer>
                    <KeyContainer>
                      <KeyLabelWrapper>
                        <KeyLabel>충청북도</KeyLabel>
                      </KeyLabelWrapper>
                      <KeyList>
                        {region['Chungbuk'].map((key)=>(
                          <Key 
                          selected={selectedRegion.includes(key)}
                          onClick={()=>selectKey('region', key)}>{key}</Key>
                        ))}
                      </KeyList>
                    </KeyContainer>
                    <KeyContainer>
                      <KeyLabelWrapper>
                        <KeyLabel>충청남도</KeyLabel>
                      </KeyLabelWrapper>
                      <KeyList>
                        {region['Chungnam'].map((key)=>(
                          <Key  
                            selected={selectedRegion.includes(key)} 
                            onClick={()=>selectKey('region', key)}>{key}</Key>
                        ))}
                      </KeyList>
                    </KeyContainer>
                    <KeyContainer>
                      <KeyLabelWrapper>
                        <KeyLabel>전라북도</KeyLabel>
                      </KeyLabelWrapper>
                      <KeyList>
                        {region['Jeonbuk'].map((key)=>(
                          <Key 
                          selected={selectedRegion.includes(key)}
                          onClick={()=>selectKey('region', key)}>{key}</Key>
                        ))}
                      </KeyList>
                    </KeyContainer>
                    <KeyContainer>
                      <KeyLabelWrapper>
                        <KeyLabel>전라남도</KeyLabel>
                      </KeyLabelWrapper>
                      <KeyList>
                        {region['Jeonnam'].map((key)=>(
                          <Key 
                          selected={selectedRegion.includes(key)}
                          onClick={()=>selectKey('region', key)}>{key}</Key>
                        ))}
                      </KeyList>
                    </KeyContainer>
                    <KeyContainer>
                      <KeyLabelWrapper>
                        <KeyLabel>경상북도</KeyLabel>
                      </KeyLabelWrapper>
                      <KeyList>
                        {region['Gyeongbuk'].map((key)=>(
                          <Key 
                          selected={selectedRegion.includes(key)}
                          onClick={()=>selectKey('region', key)}>{key}</Key>
                        ))}
                      </KeyList>
                    </KeyContainer>
                    <KeyContainer>
                      <KeyLabelWrapper>
                        <KeyLabel>경상남도</KeyLabel>
                      </KeyLabelWrapper>
                      <KeyList>
                        {region['Gyeongnam'].map((key)=>(
                          <Key 
                          selected={selectedRegion.includes(key)}
                          onClick={()=>selectKey('region', key)}>{key}</Key>
                        ))}
                      </KeyList>
                    </KeyContainer>
                    <KeyContainer>
                      <KeyLabelWrapper>
                        <KeyLabel>제주특별자치도</KeyLabel>
                      </KeyLabelWrapper>
                      <KeyList>
                        {region['Jeju'].map((key)=>(
                          <Key 
                          selected={selectedRegion.includes(key)}
                          onClick={()=>selectKey('region', key)}>{key}</Key>
                        ))}
                      </KeyList>
                    </KeyContainer>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellHeader>
                  <InfoLabel>시그니처 코스 및 메뉴</InfoLabel>
                </TableCellHeader>
                <TableCell>
                  <InfoValueTextArea {...description} placeholder="요리사님만의 시그니처 코스와 메뉴에 대한 간단한 설명을 적어주세요."></InfoValueTextArea>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellHeader>
                  <InfoLabel>서비스 범위 및 희망 시급</InfoLabel>
                </TableCellHeader>
                <TableCell>
                  <div style={{fontSize: '14px', color: '#B3B3B3', marginBottom: '10px'}}>희망 시급을 설정해주세요.</div>
                  <InfoValueInput {...hopePay} placeholder="00,00"></InfoValueInput> 원
                  <div style={{fontSize: '14px', color: '#B3B3B3', marginTop: '10px'}}>희망 시급에 포함되어 있는 서비스 범위를 선택해주세요.</div>
                  
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellHeader>
                  <InfoLabel>최소 서비스 시간 </InfoLabel>
                </TableCellHeader>
                <TableCell>
                  <InfoWrapper>
                    <div>
                      <InfoValueInput {...minServiceTime} placeholder="00" id="time"></InfoValueInput> 시간
                      <span style={{fontSize: '14px', color: '#B3B3B3', marginLeft: '20px'}}>준비시간을 포함한 최소 서비스 시간을 설정해주세요.</span>
                    </div>
                    <RequestRangeCheckBox isRow={true}/>
                  </InfoWrapper>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCellHeader>
                  <InfoLabel>포트폴리오</InfoLabel>
                </TableCellHeader>
                <TableCell>
                  <ImageUploadWrapper>
                    <UploadButtonContainer>
                    <HiddenFileInput
                          type="file"
                          accept="image/*"
                          multiple
                          id="portfolioInput"
                          onChange={(e)=>handleImageChange('portfolio', e)}
                        />
                      <InfoValueButton
                      onClick={() => document.getElementById("portfolioInput").click()}
                      >
                        사진 업로드{"("}최대 40MB{")"}
                      </InfoValueButton>
                      <UploadDesc>
                        고객님들에게 보여질 사진을 최대 10장 업로드할 수 있습니다.
                      </UploadDesc>
                      </UploadButtonContainer>
                      <ImagePreviewContainer>
                      {portfolioImages.map((image, index) => (
                          <ImagePreview key={index}>
                            <img
                              src={URL.createObjectURL(image)}
                              alt={`portfolio-${index}`}
                              onLoad={(e) => URL.revokeObjectURL(image)}
                            />
                            <RemoveButton onClick={() => removeImage("portfolio", index)}>
                              X
                            </RemoveButton>
                          </ImagePreview>
                        ))}
                      </ImagePreviewContainer>
                    </ImageUploadWrapper>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellHeader>
                  <InfoLabel>증명서</InfoLabel>
                </TableCellHeader>
                <TableCell>
                  <ImageUploadWrapper>
                  <UploadButtonContainer>
                    <HiddenFileInput
                          type="file"
                          accept="image/*"
                          multiple
                          id="licenseInput"
                          onChange={(e)=> handleImageChange('license', e)}
                        />
                      <InfoValueButton 
                      onClick={() => document.getElementById("licenseInput").click()}>
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
                    <ImagePreviewContainer>
                      {licenseImages.map((image, index) => (
                          <ImagePreview key={index}>
                            <img
                              src={URL.createObjectURL(image)}
                              alt={`license-${index}`}
                              onLoad={(e) => URL.revokeObjectURL(image)}
                            />
                            <RemoveButton onClick={() => removeImage("license", index)}>
                              X
                            </RemoveButton>
                          </ImagePreview>
                        ))}
                    </ImagePreviewContainer>
                  
                  </ImageUploadWrapper>
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
  width: 1098px;
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

  //text-align: center;
`;

const TableCellHeader = styled(TableCell)`
  background: ${(props) => props.theme.sub};
  width: 282px;
  font-weight: 700;
  padding: 32px 40px 50px;
`

const InfoLabel = styled.div`
  font-size: 17px;
  font-weight: 700;
`;

const InfoValueDesc = styled.div`
  font-weight: 400;
  color: #b3b3b3;
  font-size: 14px;
`

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
  font-size: 16px;
  width: 50px;
  height: 10px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  padding: 20px;

  &[id='time']{
    width: 20px;
  }
`;

const InfoValueRef = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px 20px;
  background-color: #D9D9D9;
  width: 389px;
  height: 97px;
  border-radius: 8px;
  gap: 3px;
  margin-top: 5px;
`
const InfoValueRefTitle = styled.div`
  margin-bottom: 3px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: flex-start;
`
const InfoValueRefContent = styled.div`
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    display: flex;
    align-items: flex-start; 
`
const KeyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const KeyLabelWrapper =  styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`

const KeyLabel = styled.div`
  font-weight: 600;
  font-size: 14px;
`
const KeyList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  flex-wrap: wrap;
  white-space: nowrap;
`

const Key = styled.div`
  font-size: 14px;
  font-weight: 600;
  padding: 7px 15px;
  color : ${(props) => (props.selected ? "white" : "black")};
  background-color: ${(props) => (props.selected ? "#FA7C15" : "#FFF3EA")};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

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
  margin-left: 5px;
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

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap:10px;
`
const ImageUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap : 20px;
`

const HiddenFileInput = styled.input`
  display: none;
`;

const ImagePreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ImagePreview = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #ddd;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background: darkred;
  }
`;