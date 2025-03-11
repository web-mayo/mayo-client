import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Title } from "../../components/Title";
import { foodCategory, serviceType } from "../../constants/activity";
import { region } from "../../constants/region";
import { RequestRangeCheckBox } from "../../components/RequestRangeCheckBox";
import { useInput } from "../../hooks/useInput";
import { fetchChefActiveProfile, fetchPatchChefActiveProfile } from "../../apis/chefMyPage";
import { useGetChefId } from "../../hooks/useUserId";
import { listToString } from "../../extraNeeds/listToString";
import { useNavigate } from "react-router-dom";
import { uploadS3 } from "../../extraNeeds/funcs";

export const ChefActivityWrite = () => {
  const navigate = useNavigate();
  const chefId = useGetChefId();
  const [hashtagsState, setHashtagsState] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState([]);
  const experienceInput = useInput(""); // 대표 경력
  const personalHistoryInput = useInput(""); // 경력 <- 필요
  const commentInput = useInput(""); // 한 줄 소개
  const hopePayInput = useInput(); // 희망 시급(int)
  const descriptionInput = useInput(""); // 시그니처 코스 및 메뉴
  const minServiceTimeInput = useInput(0); // 최소 서비스 시간(int)
  const [serviceList, setServiceList] = useState([]);
  const [portfolioImages, setPortfolioImages] = useState([]); // 포트폴리오 이미지
  const [licenseImages, setLicenseImages] = useState([]); // 라이센스 이미지
  const [chefActiveProfile, setChefActiveProfile] = useState({}); // 백엔드에 보낼 데이터
  const [S3ImgPost, setS3ImgPost] = useState([]);
  const [S3PortfolioImages, setS3PortfolioImages] = useState([]);
  const [S3LicenseImages, setS3LicenseImages] = useState([]);

  useEffect(()=>{
    if (!chefId) return; 
    // 초기 데이터 세팅
    const getChefActiveProfile = async() => {
      const data = await fetchChefActiveProfile(chefId);
      console.log('data',data);
      experienceInput.setValue(data?.experience || "");
      commentInput.setValue(data?.introduce || "");
      setHashtagsState(
        data.tags.map(({ category, chefHashTag }) => ({
          category: category,
          tag: chefHashTag,
        })) || []
      );
      hopePayInput.setValue(data?.hopePay || 0);
      setServiceList(data?.serviceList);
      descriptionInput.setValue(data?.description || "");
      minServiceTimeInput.setValue(data?.minServiceTime || 0);
      setSelectedRegion(data?.regions);

      const uniquePortfolioImages = Array.from(
        new Set(data?.portFolio?.map(item => item.url))
      ).map((url, index) => ({ id: index, key: url, url }));
  
      const uniqueLicenseImages = Array.from(
        new Set(data?.license?.map(item => item.url))
      ).map((url, index) => ({ id: index, key: url, url }));
      
      setPortfolioImages(
        data?.portFolio?.map((item, index) => ({
          id: index,
          url: item.url
        })) || []
      );

      setLicenseImages(
        data?.license?.map((item, index) => ({
          id: index,
          url: item.url
        })) || []
      );

      setS3PortfolioImages(uniquePortfolioImages.map(item => ({ id: item.id, key: item.key })));
      setS3LicenseImages(uniqueLicenseImages.map(item => ({ id: item.id, key: item.key })));

    }
    getChefActiveProfile();
    console.log('get으로 받고 포맷한 포트폴리오이미지',portfolioImages);
    console.log('get으로 받고 포맷한 라이센스이미지',licenseImages);
  }, [chefId]);

  const selectKey = (type, selectKey) => {
    console.log('선택된 키들', hashtagsState);
    setHashtagsState((prevHashtags) => {
      const exists = prevHashtags.find(
        (hashtag) => hashtag.tag === selectKey
      );
  
      if (exists) {
        return prevHashtags.filter((hashtag) => hashtag.tag !== selectKey);
      } else {
        const newHashtag = {
          category: type === "foodCategory" ? 1 : type === "serviceType" ? 2 : 0,
          tag: selectKey
        };
        return [...prevHashtags, newHashtag];
      }
    });
  };

  const selectRegion = (type, region, subRegion) => {
    if(selectedRegion?.some((x)=>x.region === region && x.subRegion === subRegion)){
      setSelectedRegion(prev=>prev.filter(x=>!(x.region === region && x.subRegion === subRegion)));
    }
    else{
      setSelectedRegion((prev)=>
      [...prev,
        {
          region: region,
          subRegion: subRegion
        }
      ])
    }
  }

  const handleImageChange = (type, e) => {
    const files = Array.from(e.target.files);
    if(files.length == 0) return;

    const isInvalid = files.some((file) => {
      if (type === "portfolio" && file.size > 10 * 1024 * 1024) { 
        alert("포트폴리오는 최대 10MB까지 업로드 가능합니다.");
        return true;
      }
      if (type === "license" && file.size > 10 * 1024 * 1024) { // 10MB 초과
        alert("증명서는 최대 10MB까지 업로드 가능합니다.");
        return true;
      }
      return false;
    })

    if(isInvalid) return;

    if (type === "portfolio" && portfolioImages.length + files.length > 10) {
      alert("포트폴리오는 최대 10장까지 업로드 가능합니다.");
      return;
    }
    if (type === "license" && licenseImages.length + files.length > 10) {
      alert("증명서는 최대 10장까지 업로드 가능합니다.");
      return;
    }

    // S3 업로드 위해 원본 파일 저장
    setS3ImgPost((prev) => [...prev, ...files]);

    // 미리보기용 URL 생성
    const newImages = files.map((file, index) => ({
      id: type === "portfolio"
        ? (portfolioImages.length || 0) + index // 안전한 접근
        : (licenseImages.length || 0) + index,
      url: URL.createObjectURL(file),
    }));

    const newS3Images = files.map((file, index) => ({
      id : type === "portfolio" 
        ? (portfolioImages.length || 0) + index
        : (licenseImages.length || 0) + index,
        key : file.name,
    }))
  
    if (type === "portfolio") {
      setPortfolioImages((prev) => [...prev, ...newImages]); 
      setS3PortfolioImages((prev)=>[...prev, ...newS3Images]);
    } else if (type === "license") {
      setLicenseImages((prev) => [...prev, ...newImages]); 
      setS3LicenseImages((prev)=>[...prev, ...newS3Images]);
    }
  }

  const removeImage = (type, id) => {
    if (type === "portfolio") {
      setPortfolioImages((prev) => prev.filter((image) => image.id !== id));
      setS3PortfolioImages((prev) => prev.filter((image) => image.id !== id)); 
      //setS3PortfolioImages((prev) => prev.filter((file) => file.id ));
    } else if (type === "license") {
      setLicenseImages((prev) => prev.filter((image) => image.id !== id));
      setS3LicenseImages((prev) => prev.filter((image) => image.id !== id));
    }
  };

  const onCompleted = async(fb, newImagesToUpload) => {
    console.log('fb', fb);
    if(fb){
      // patch로 받아온 url S3에 업로드
      const imgUrlList = [...fb.licenseUrls, ...fb.portFolioUrls].map(item => ({
        id: item.id,
        url: item.url
      }));

      //const allImages = [...S3LicenseImages.map((item)=> item.key), ...S3PortfolioImages.map((item)=>item.key)];

      if(imgUrlList.length && newImagesToUpload.length){
        try{
          console.log('imgUrlList, 이미지 url 리스트',imgUrlList);
          console.log('all images S3 이미지 포스트', newImagesToUpload);
          const CallbackUpload = await uploadS3(imgUrlList, newImagesToUpload);
          console.log('S3 업로드 상태',CallbackUpload);
        }
        catch(e){
          alert('이미지 업로드에 오류가 발생했습니다.');
        }
        // imgUrlList → 서버에서 받은 Presigned URL 목록
        // images → 사용자가 선택한 이미지 파일 목록
      } 
    }
  }

  useEffect(() => {
    console.log('Updated S3PortfolioImages:', S3PortfolioImages);
  }, [S3PortfolioImages]);
  
  useEffect(() => {
    console.log('Updated S3LicenseImages:', S3LicenseImages);
  }, [S3LicenseImages]);
  
  useEffect(()=>{
    console.log('portfolio 미리보기 업뎃', portfolioImages);
  }, [portfolioImages]);

  const saveActiveProfile = async() => {
    // const newImagesToUpload = S3ImgPost.filter(file => 
    //   !portfolioImages.some(img => img.key === file.name) &&
    //   !licenseImages.some(img => img.key === file.name)
    // );

    // 데이터 수정 시 백엔에 보낼 데이터
    const updatedProfile = {
      'experience': experienceInput.value || "",
      'personalHistory' : personalHistoryInput.value || 0,
      'comment': commentInput.value || "",
      'hashtags': hashtagsState || [],
      'regionList': selectedRegion || [],
      'description': descriptionInput.value || "",
      'hopePay': parseInt(hopePayInput.value) || 0,
      'minServiceTime': parseInt(minServiceTimeInput.value) || 0,
      'serviceList': serviceList || [], 
      'portfolio': S3PortfolioImages || [],
      'license': S3LicenseImages || [],
    };
    console.log('hashtag state',hashtagsState);

    console.log("updatedProfile 데이터:", updatedProfile);


    const patchChefActiveProfile = async() => {
        try{
            const result = await fetchPatchChefActiveProfile(updatedProfile);
            console.log('수정 후 받아온 Result이자 presigned URL',result);
            
            if (result.status !== "OK" || !result.result) {
              alert('저장 실패: 다시 시도해주세요.');
              return;
            }

            // S3에 업로드
            console.log('fb(전달 전)',result.result);
            await onCompleted(result.result, S3ImgPost);
            alert('저장이 완료되었습니다.');
            navigate('/chefPage');

          } catch(e){
            console.error('저장 중 오류 발생:', e);
            alert('저장 중 오류가 발생했습니다. 다시 시도해주세요.');
          }
      }
    patchChefActiveProfile();
  }

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
                    <InfoValueInput {...personalHistoryInput} id="time" placeholder="00" /><span style={{ fontSize: "16px" }}>년</span>
                    <InfoValueDesc>요리사로서 근무하신 기간을 입력해주세요.</InfoValueDesc>
                  </UploadButtonContainer>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellHeader>
                  <InfoLabel>한 줄 소개</InfoLabel>
                </TableCellHeader>
                <TableCell>
                  <InfoValueTextArea {...commentInput} placeholder="요리사님의 경험이나 강점을 한 줄로 요약해서 설명해주세요." />
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
                        key={key}
                        selected={hashtagsState?.some((x) => x.category === 1 && x.tag === key)}
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
                        selected={hashtagsState?.some((x) => x.category === 2 && x.tag === key)}
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
                         selected={selectedRegion?.some(x=>x.region == 'Seoul' && x.subRegion === region['Seoul'][0])}
                        onClick={()=>selectRegion('region', 'Seoul',  region['Seoul'][0])}>{region['Seoul'][0]}</Key>
                      </KeyLabelWrapper>
                      <KeyList>
                        {region['Seoul'].slice(1, region['Seoul'].length).map((key)=>(
                          <Key 
                          selected={selectedRegion?.some(x=>x.region === 'Seoul' && x.subRegion === key)}
                          onClick={()=>selectRegion('region','Seoul', key)}>{key}</Key>
                        ))}
                      </KeyList>
                    </KeyContainer>
                  <KeyContainer>
                      <KeyLabelWrapper>
                        <KeyLabel>인천광역시</KeyLabel>
                        <Key 
                         selected={selectedRegion?.some(x=>x.region === 'Incheon' && x.subRegion === region['Incheon'][0])}
                        onClick={()=>selectRegion('region', 'Incheon', region['Incheon'][0])}>{region['Incheon'][0]}</Key>
                      </KeyLabelWrapper>
                    </KeyContainer>
                    <KeyContainer>
                      <KeyLabelWrapper>
                        <KeyLabel>경기도</KeyLabel>
                      </KeyLabelWrapper>
                      <KeyList>
                        {region['Gyeonggi'].map((key)=>(
                          <Key 
                          selected={selectedRegion?.some(x=>x.region === 'Gyeonggi' && x.subRegion === key)}
                          onClick={()=>selectRegion('region', 'Gyeonggi', key)}>{key}</Key>
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
                          selected={selectedRegion?.some(x=>x.region === 'Gangwon' && x.subRegion === key)}
                          onClick={()=>selectRegion('region', 'Gangwon', key)}>{key}</Key>
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
                          selected={selectedRegion?.some(x=>x.region === 'Chungbuk' && x.subRegion === key)}
                          onClick={()=>selectRegion('region','Chungbuk', key)}>{key}</Key>
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
                            selected={selectedRegion?.some(x=>x.region === 'Chungnam' && x.subRegion === key)} 
                            onClick={()=>selectRegion('region','Chungnam', key)}>{key}</Key>
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
                          selected={selectedRegion?.some(x=>x.region === 'Jeonbuk' && x.subRegion === key)}
                          onClick={()=>selectRegion('region', 'Jeonbuk', key)}>{key}</Key>
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
                          selected={selectedRegion?.some(x=>x.region === 'Jeonnam' && x.subRegion === key)}
                          onClick={()=>selectRegion('region', 'Jeonnam', key)}>{key}</Key>
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
                          selected={selectedRegion?.some(x=>x.region === 'Gyeongbuk' && x.subRegion === key)}
                          onClick={()=>selectRegion('region','Gyeongbuk', key)}>{key}</Key>
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
                          selected={selectedRegion?.some(x=>x.region === 'Gyeongnam' && x.subRegion === key)}
                          onClick={()=>selectRegion('region','Gyeongnam', key)}>{key}</Key>
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
                          selected={selectedRegion?.some(x=>x.region === 'Jeju' && x.subRegion === key)}
                          onClick={()=>selectRegion('region','Jeju', key)}>{key}</Key>
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
                  <InfoValueTextArea {...descriptionInput} placeholder="요리사님만의 시그니처 코스와 메뉴에 대한 간단한 설명을 적어주세요."></InfoValueTextArea>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCellHeader>
                  <InfoLabel>서비스 범위 및 희망 시급</InfoLabel>
                </TableCellHeader>
                <TableCell>
                  <div style={{fontSize: '14px', color: '#B3B3B3', marginBottom: '10px'}}>희망 시급을 설정해주세요.</div>
                  <InfoValueInput {...hopePayInput} placeholder="00,00"></InfoValueInput> 원
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
                      <InfoValueInput {...minServiceTimeInput} placeholder="00" id="time"></InfoValueInput> 시간
                      <span style={{fontSize: '14px', color: '#B3B3B3', marginLeft: '20px'}}>준비시간을 포함한 최소 서비스 시간을 설정해주세요.</span>
                    </div>
                    <RequestRangeCheckBox 
                      onServiceListChange={setServiceList} 
                      serviceList={serviceList} 
                      modifiable="true" 
                      isRow="true" />
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
                      {(portfolioImages || []).map((image) => (
                          <ImagePreview key={image.id}>
                            <img
                              src={image.url.startsWith("blob:") ? image.url : `https://${image.url}` || `${image.key}`}
                              alt={`portfolio-${image.id}`}
                              onLoad={() => URL.revokeObjectURL(image.key)}
                            />
                            <RemoveButton onClick={() => removeImage("portfolio", image.id)}>
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
                      {(licenseImages || []).map((image) => (
                          <ImagePreview 
                          key={image.id}>
                            <img
                              src={image.url.startsWith("blob:") ? image.url : `https://${image.url}` || `${image.key}`}
                              alt={`license-${image.id}`}
                              onLoad={() => URL.revokeObjectURL(image.key)}
                            />
                            <RemoveButton onClick={() => removeImage("license", image.id)}>
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
          <Button onClick={()=>saveActiveProfile()}>
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
