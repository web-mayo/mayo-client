import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { loadTossPayments } from "@tosspayments/tosspayments-sdk";
import { comma } from "../functions/funcs";
import { v4 as uuidv4 } from "uuid";
import { getCustomerInfoOnce } from "../apis/CustomerMyPage";
import { registPayImp } from "../apis/PaymentCtrlAPI";
export const Payments = (props) => {
  // 모달 닫기
  const CloseModal = () => {
    props.func(false);
  };
  // data 받아오기
  const [data, setData] = useState(new Array());
  const [partyIds, setPartyIds] = useState([]);
  const [amount, setAmount] = useState(0);
  const [userData, setUserData] = useState();
  // userData
  const getUserDataHandler = async () => {
    const userInfo = await getCustomerInfoOnce();
    setUserData(userInfo.back);
  };
  useEffect(() => {
    setData(props.datas);
    setAmount(props.datas.reduce((sum, { budget }) => sum + budget, 0));
  }, [props]);
  useEffect(() => {
    var ids = new Array();
    for (let i = 0; i < data.length; i++) {
      ids.push(data[i].id);
    }
    setPartyIds(ids);
  }, [data]);

  // Toss payments
  const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
  const customerKey = "8x6-XTsSrsRTqpLyQ7FK6";
  const [widgets, setWidgets] = useState(null);

  // post res Draft
  const postResDraftHandler = async (resInput) => {
    const resImp = await registPayImp(resInput);
    sessionStorage.setItem("payInfo", JSON.stringify(resInput));
    console.log(resImp);
  };

  useEffect(() => {
    async function fetchPaymentWidgets() {
      // ------  결제위젯 초기화 ------
      const tossPayments = await loadTossPayments(clientKey);
      // 회원 결제
      const widgets = tossPayments.widgets({
        customerKey,
      });
      // 비회원 결제
      // const widgets = tossPayments.widgets({ customerKey: ANONYMOUS });
      setWidgets(widgets);
    }
    fetchPaymentWidgets();
  }, [clientKey, customerKey]);

  useEffect(() => {
    async function renderPaymentWidgets() {
      if (widgets == null) {
        return;
      }
      // ------ 주문의 결제 금액 설정 ------
      await widgets.setAmount({
        currency: "KRW",
        value: amount,
      });

      await Promise.all([
        // ------  결제 UI 렌더링 ------
        widgets.renderPaymentMethods({
          selector: "#payment-method",
          variantKey: "DEFAULT",
        }),
        // ------  이용약관 UI 렌더링 ------
        widgets.renderAgreement({
          selector: "#agreement",
          variantKey: "AGREEMENT",
        }),
      ]);
    }
    renderPaymentWidgets();
  }, [widgets, amount]);
  // Toss end
  useEffect(() => {
    getUserDataHandler();
  }, []);
  return (
    <Container>
      <ContainerHead>결제 페이지</ContainerHead>
      <ContainerBody>
        <ListContainer>
          <ListChecked>
            <ListTitle>선택된 내용</ListTitle>
            {data.length > 0 &&
              data.map((data) => (
                <PaymentCard key={`paymentCard-${data.id}`}>
                  <PaymentCardHead>
                    ✔️
                    <PaymentCardDesc>
                      <PaymentCardDescTitleContainer>
                        <PaymentCardDescTitle>
                          {data.partyInfo}
                        </PaymentCardDescTitle>
                        <PaymentCardDescSubTitle>
                          홈파티 상세보기
                        </PaymentCardDescSubTitle>
                      </PaymentCardDescTitleContainer>
                      <PaymentCardDescInfo>
                        <PaymentCardDescInfoText>
                          &#91; 결제 일자 &#93;
                        </PaymentCardDescInfoText>
                        <PaymentCardDescInfoText>
                          {data.modifiedAt}
                        </PaymentCardDescInfoText>
                      </PaymentCardDescInfo>
                    </PaymentCardDesc>
                  </PaymentCardHead>
                  <PaymentCardData>
                    <PaymentPriceLabel>&#91; 금액 &#93;</PaymentPriceLabel>
                    <PaymentPrice>{comma(data.budget)}원</PaymentPrice>
                  </PaymentCardData>
                </PaymentCard>
              ))}
          </ListChecked>
        </ListContainer>
        <PayContainer>
          <PayAmountBox>
            <Text>결제 금액</Text>
            <Amount>{comma(amount)} 원</Amount>
          </PayAmountBox>
          <PayWaysBox id="payment-method">
            {/* <Text>결제 방법</Text>
            <Ways>
              <PayCard>신용/체크 카드</PayCard>
              <NaverPay>네이버페이</NaverPay>
              <KakaoPay>카카오페이</KakaoPay>
              <VirtualAccount>가상계좌</VirtualAccount>
            </Ways> */}
          </PayWaysBox>
        </PayContainer>
        <PayBtnBox>
          <div id="agreement" />
          <CancelBtn onClick={CloseModal}>취소</CancelBtn>
          <PayBtn
            onClick={async () => {
              try {
                // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
                // 결제를 요청하기 전에 orderId, amount를 서버에 저장하세요.
                // 결제 과정에서 악의적으로 결제 금액이 바뀌는 것을 확인하는 용도입니다.
                console.log(data);
                var commonInput = {
                  orderId: uuidv4(),
                  orderName:
                    data.length === 1
                      ? data[0].partyInfo
                      : data[0].partyInfo + " 외 " + (data.length - 1) + "건",
                  customerName: userData.name,
                };
                var resDraftInput = {
                  ...commonInput,
                  amount: amount,
                  metadata: {
                    customerKey: userData.username + "_" + userData.id,
                    customerId: userData.id,
                    customerHomePartyIds: partyIds,
                  },
                };
                postResDraftHandler(resDraftInput);
                var tossInput = {
                  ...commonInput,
                  successUrl: window.location.origin + "/success",
                  failUrl: window.location.origin + "/fail",
                  customerEmail: userData.email,
                  customerMobilePhone: userData.phone,
                };
                await widgets.requestPayment(tossInput);
              } catch (error) {
                // 에러 처리하기
                console.error(error);
              }
            }}
          >
            결제
          </PayBtn>
        </PayBtnBox>
      </ContainerBody>
    </Container>
  );
};
const Container = styled.div`
  width: 660px;
  border: 1px solid rgba(217, 217, 217, 1);
  border-radius: 10px;
`;
const ContainerHead = styled.div`
  background-color: rgba(255, 243, 234, 1);
  padding: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
`;

const ContainerBody = styled.div`
  padding: 33px 38px 29px;
  background-color: #ffffff;
`;
const ListContainer = styled.div`
  padding: 30px;
  border: 2px dashed rgba(217, 217, 217, 1);
`;
const ListChecked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ListTitle = styled.p`
  font-weight: 600;
  line-height: 22px;
  margin: 0;
`;
const PaymentCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5%;
  border: solid 1px #dddddd;
  cursor: pointer;
  height: 40px;
  border-radius: 8px;
`;
const PaymentCardHead = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const PaymentCardDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
`;
const PaymentCardDescTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
const PaymentCardDescTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
`;
const PaymentCardDescSubTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  color: #b3b3b3;
  font-size: 14px;
`;
const PaymentCardDescInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  color: rgba(0, 0, 0, 0.5);
  align-items: center;
`;
const PaymentCardDescInfoText = styled.div`
  font-size: 13px;
`;
const PaymentCardData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const PaymentPriceLabel = styled.div`
  color: #b3b3b3;
  font-size: 12px;
`;
const PaymentPrice = styled.div`
  font-weight: 600;
  color: #ff0000;
  font-size: 18px;
`;
const PayContainer = styled.div`
  margin-top: 20px;
  padding: 0 24px;
`;
const PayAmountBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;
const Text = styled.p`
  font-weight: 600;
  line-height: 22.4px;
  font-size: 16px;
  margin: 0;
`;
const Amount = styled.div`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 0 17px;
  line-height: 33.6px;
  font-size: 24px;
  font-weight: 500;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: right;
  background-color: rgba(245, 245, 245, 1);
`;
const PayWaysBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;
const Ways = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4px;
  width: 100%;
  height: 76px;
  & div {
    border: 1px solid #000;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 19.6px;
    font-size: 14px;
    font-weight: 500;
    padding: 8px 0;
  }
`;
const PayCard = styled.div`
  grid-column: 1 / span 3;
`;
const NaverPay = styled.div``;
const KakaoPay = styled.div``;
const VirtualAccount = styled.div``;
const PayBtnBox = styled.div`
  margin-top: 34px;
  text-align: center;
`;
const PayBtn = styled.button`
  border: 0;
  border-radius: 5px;
  width: 208px;
  height: 39px;
  background-color: rgba(250, 124, 21, 1);
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`;
const CancelBtn = styled.button`
  border: 0;
  border-radius: 5px;
  width: 208px;
  height: 39px;
  background-color: rgba(217, 217, 217, 1);
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin-right: 10px;
`;
