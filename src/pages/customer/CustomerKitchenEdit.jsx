import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Title } from "../../components/Title";
import { Dropdown } from "../../components/Dropdown";
import { useForm } from "react-hook-form";
import { editKitchen, registKitchen } from "../../apis/CustomerMyPage";
import { useNavigate, useLocation } from "react-router-dom";
import { getToken } from "../../token";
import { getMyKitchen } from "../../apis/CustomerMyPage";
import axios from "axios";
export const toolList = [
  { toolName: "오븐" },
  { toolName: "전기압력솥밥" },
  { toolName: "전자레인지" },
  { toolName: "믹서기" },
  { toolName: "튀김기" },
  { toolName: "에어프라이어" },
  { toolName: "전기포트" },
  { toolName: "파니니그릴" },
  {
    toolName: "후라이팬, 냄비, 주걱 등 기본적인 조리도구 있음",
  },
];

export const CustomerKitchenEdit = () => {
  const navigate = useNavigate();

  // get id
  const params = useLocation();
  const kId = params.pathname.split("/")[3];

  // Form
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

  // img 불러오기 , 값 저장
  const [showImgs, setShowImgs] = useState([]);
  const [imgRegists, setImgRegists] = useState([]);
  const [s3ImgPost, setS3ImgPost] = useState();
  const readFile = (files) => {
    var postArr = new Array();
    var s3Arr = new Array();
    var showArr = new Array();
    for (let i = 0; i < files.length; i++) {
      postArr.push({ id: i, key: files[i].name });
      s3Arr.push(files[i]);
      let reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result;
        showArr.push(base64);
        setShowImgs(showArr);
      };
      if (files[i]) {
        reader.readAsDataURL(files[i]);
      }
    }
    setS3ImgPost(s3Arr);
    setImgRegists(postArr);
  };

  // check dataList

  const [checkItems, setCheckItems] = useState([]);
  const checkItemHandler = (data, isChecked) => {
    if (
      !isChecked &&
      Boolean(checkItems.find((item) => item.toolName === data.toolName))
    ) {
      setCheckItems(
        checkItems.filter((item) => item.toolName !== data.toolName)
      );
    } else if (
      isChecked &&
      !Boolean(checkItems.find((item) => item.toolName === data.toolName))
    ) {
      setCheckItems((originList) => [...originList, data]);
    }
  };
  // 이미지 업로드

  const uploadS3 = async (url, image) => {
    await axios
      .put(`${url}`, image, {
        headers: {
          "Content-Type": "image/jpg",
        },
      })
      .catch((e) => {
        console.log("ERROR:", e);
      })
      .then((response) => {
        console.log(response);
      });
  };

  // get Kitchen
  const [kithenData, setKitchenData] = useState({});

  const getKitchenHandelr = async (id) => {
    const kRes = await getMyKitchen(id);
    const kitchen = kRes.back;
    setKitchenData(kitchen);
    setValue("nickName", kitchen.nickName);
    setValue("address", kitchen.address);
    setValue("addressSub", kitchen.addressSub);
    setValue("burnerType", kitchen.burnerType);
    setValue("burnerQuantity", kitchen.burnerQuantity);
    setValue("additionalEquipment", kitchen.additionalEquipment);
    setValue("requirements", kitchen.requirements);
    setValue("considerations", kitchen.considerations);
    setShowImgs(kitchen.kitchenImagesRegisterList.map((row) => row.key));
    setImgRegists(kitchen.kitchenImagesRegisterList);
  };
  useEffect(() => {
    getKitchenHandelr(kId);
  }, [kId]);

  // 전송 완료 피드백
  const [feedback, setFeedback] = useState();
  const onCompleted = (fb) => {
    setRePostBan(false);
    console.log(fb);
    console.log(fb?.back?.result?.kitchenImges?.List);
    // uploadS3(showImgs);
    // if (fb && fb.call) {
    // } else {
    //   if (fb && fb.back.response.data) {
    //     alert(fb.back.response.data.message);
    //   } else {
    //     alert("등록에 오류가 발생했습니다.");
    //   }
    // }
  };

  // 전송
  const [rePostBan, setRePostBan] = useState(false);
  const onSubmit = async () => {
    if (rePostBan) {
      return;
    }
    const {
      nickName,
      address,
      addressSub,
      burnerType,
      burnerQuantity,
      // additionalEquipment,
      requirements,
      considerations,
    } = getValues();
    var registerInput = {
      nickName: nickName,
      address: address,
      addressSub: addressSub,
      burnerType: burnerType,
      burnerQuantity: burnerQuantity,
      kitchenImagesRegisterList: [],
      //   kithenData.kitchenImagesRegisterList == imgRegists ? [] : imgRegists,
      kitchenToolsRegisterList: checkItems,
      additionalEquipment: "없습니다.",
      requirements: requirements,
      considerations: considerations,
    };
    console.log(registerInput);
    const conn = async () => {
      const response = await editKitchen(registerInput, kId);
      console.log(response);
      setFeedback(response);
    };
    conn();
    setRePostBan(true);
    onCompleted(feedback);
  };
  return (
    <>
      <ChefActivityWriteContainer>
        <Title title={"주방 프로필 수정"} backgroundcolor={"white"} />
        <form id="kitchenForm" onSubmit={handleSubmit(onSubmit)}>
          <Middle>
            <Container>
              <Table>
                <TableRow>
                  <TableCellHeader>
                    <InfoLabel>주방 닉네임</InfoLabel>
                  </TableCellHeader>
                  <TableCell>
                    <InfoValueInput {...register("nickName", {})} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCellHeader>
                    <InfoLabel>주소</InfoLabel>
                  </TableCellHeader>
                  <TableCell>
                    <InfoValueTextArea {...register("address", {})} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCellHeader>
                    <InfoLabel>상세주소</InfoLabel>
                  </TableCellHeader>
                  <TableCell>
                    <InfoValueInput
                      placeholder="000동 000호"
                      {...register("addressSub", {})}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCellHeader>
                    <InfoLabel>화구 종류</InfoLabel>
                  </TableCellHeader>
                  <TableCell>
                    <SelectBox
                      defaultValue={"가스레인지"}
                      {...register("burnerType", {})}
                    >
                      <option value="가스레인지">가스레인지</option>
                      <option value="휴대용 가스레인지">
                        휴대용 가스레인지
                      </option>
                      <option value="전기 인덕션">전기 인덕션</option>
                      <option value="전기 하이라이트">전기 하이라이트</option>
                    </SelectBox>
                    <BurnerQuantity
                      type="number"
                      placeholder="화구 갯수를 입력해주세요."
                      {...register("burnerQuantity", {})}
                    ></BurnerQuantity>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCellHeader>
                    <InfoLabel>주방 사진</InfoLabel>
                  </TableCellHeader>
                  <TableCell>
                    <InfoValueButton>
                      <input
                        type="file"
                        multiple
                        onChange={(e) => {
                          readFile(e.target.files);
                        }}
                      />
                      사진 업로드{"("}최대 40MB{")"}
                    </InfoValueButton>
                    <ShowImgBox>
                      {showImgs &&
                        showImgs.length > 0 &&
                        showImgs.map((url, index) => (
                          <ShowImg key={"img" + index} src={url}></ShowImg>
                        ))}
                    </ShowImgBox>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCellHeader>
                    <InfoLabel>조리 기구 및 도구</InfoLabel>
                  </TableCellHeader>
                  <TableCell>
                    <ChkConatiner>
                      {toolList.map((lists, index) => (
                        <ChkListBox key={"tool" + (index + 1)}>
                          <label>
                            <input
                              type="checkbox"
                              onChange={(e) => {
                                checkItemHandler(lists, e.target.checked);
                              }}
                            />
                            {lists.toolName}
                          </label>
                        </ChkListBox>
                      ))}
                    </ChkConatiner>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCellHeader>
                    <InfoLabel>주방 관련 요청사항</InfoLabel>
                  </TableCellHeader>
                  <TableCell>
                    <InfoValueTextArea
                      placeholder="주방에 관련된 요청사항을 작성해주세요."
                      {...register("requirements", {})}
                    ></InfoValueTextArea>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCellHeader>
                    <InfoLabel>주방 관련 특이사항</InfoLabel>
                  </TableCellHeader>
                  <TableCell>
                    <InfoValueTextArea
                      placeholder="예시) 음식물 이송설비 시스템이 있습니다."
                      {...register("considerations", {})}
                    ></InfoValueTextArea>
                  </TableCell>
                </TableRow>
              </Table>
            </Container>
          </Middle>
          <Bottom>
            <Button
              onClick={() => {
                onSubmit();
              }}
            >
              <SaveText>저장하기</SaveText>
            </Button>
          </Bottom>
        </form>
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
`;
const ChkConatiner = styled.div`
  text-align: left;
`;

const ChkListBox = styled.div`
  display: inline-block;
  line-height: 20px;
  padding-right: 30px;
  min-width: 120px;
  & > input {
    margin-right: 8px;
  }
`;

const TableCellHeader = styled(TableCell)`
  background: ${(props) => props.theme.sub};
  width: 282px;
  font-weight: 700;
  text-align: center;
`;

const InfoLabel = styled.div`
  font-size: 17px;
  font-weight: 700;
`;

const InfoValueTextArea = styled.textarea`
  width: 730px;
  height: 40px;
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
`;

const UploadDesc = styled.div`
  font-weight: 400;
  color: #b3b3b3;
  font-size: 14px;
  align-self: flex-start;
`;

const InfoValueButton = styled.label`
  padding: 0 10px;
  font-size: 15px;
  border-radius: 8px;
  border: 1px solid #8e8e8e;
  background-color: #d9d9d9;
  height: 40px;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & > input {
    /* display: none; */
  }
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

const SelectBox = styled.select`
  padding: 10px;
`;
const ShowImg = styled.img`
  vertical-align: top;
  border: 1px solid #dcdcdc;
  max-width: 120px;
  object-fit: contain;
  aspect-ratio: 1/1;
`;
const ShowImgBox = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 20px;
`;
const BurnerQuantity = styled.input`
  width: 150px;
  padding: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  margin-left: 16px;
`;
