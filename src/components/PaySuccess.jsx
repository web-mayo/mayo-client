import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { checkSumPost, finalPayConfirm } from "../apis/PaymentCtrlAPI";
import moment from "moment";
export const PaySuccess = () => {
  const navigate = useNavigate();
  const now = new Date();

  // data 받아오기
  const params = useLocation();
  const parameterArray = params.search.split("?")[1].split("&");

  //   두 번 보내기 막기
  var postBan = false;
  // completed
  const onCompleted = async (checkInput) => {
    var payInfo = JSON.parse(sessionStorage.getItem("payInfo"));
    const finalPayInput = {
      mid: "mid_1234",
      version: 2,
      paymentKey: checkInput.paymentKey,
      status: "DONE",
      orderId: payInfo.orderId,
      orderName: payInfo.orderName,
      requestedAt: moment(now).format("YYYY-MM-DD HH:mm:ss"),
      approvedAt: moment(now).format("YYYY-MM-DD HH:mm:ss"),
      totalAmount: Number(checkInput.amount),
      method: checkInput.methodId,
      customerName: payInfo.customerName,
      metadata: payInfo.metadata,
    };
    const finalPay = await finalPayConfirm(finalPayInput);
    if (finalPay && finalPay.call == 1) {
      alert("결제가 완료되었습니다.");
      console.log(finalPay);
      sessionStorage.removeItem("payInfo");
      navigate("/customerMatch");
    } else {
      alert("결제 중 문제가 생겼습니다. 다시 시도해주세요.");
      // navigate("/customerMatch");
    }
  };

  //   checkSum handler
  const checkSumHandler = async () => {
    if (postBan === true) {
      return;
    }
    postBan = true;
    var checkInput = {
      orderId: parameterArray.find((e) => e.includes("orderId")).split("=")[1],
      amount: Number(
        parameterArray.find((e) => e.includes("amount")).split("=")[1]
      ),
      paymentKey: parameterArray
        .find((e) => e.includes("paymentKey"))
        .split("=")[1],
      methodId: parameterArray
        .find((e) => e.includes("paymentType"))
        .split("=")[1],
    };
    const checkSum = await checkSumPost(checkInput);
    if (checkSum && checkSum.call) {
      onCompleted(checkInput);
    } else {
      alert("결제 중 문제가 생겼습니다. 다시 시도해주세요.");
      navigate("/customerMatch");
    }
  };

  //   postPayInfo
  useEffect(() => {
    if (!postBan) {
      checkSumHandler();
    }
  }, []);

  return <Container>결제 정보를 확인 중입니다.</Container>;
};
const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #acacac;
  display: flex;
  justify-content: center;
  align-items: center;
`;
