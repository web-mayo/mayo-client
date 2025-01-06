import { faTheRedYeti } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import moment from "moment";
export const comma = (num) => {
  let str = num + "";
  var point = str.length % 3;
  var len = str.length;

  let thousand = str.substring(0, point);
  while (point < len) {
    if (thousand !== "") thousand += ",";
    thousand += str.substring(point, point + 3);
    point += 3;
  }
  return thousand;
};
export const uploadS3 = async (imgUrlList, images) => {
  try {
    for (let i = 0; i < imgUrlList.length; i++) {
      const res = await axios.put(`${imgUrlList[i].url}`, images[i], {
        headers: {
          "Content-Type": "image/jpg",
        },
      });
      console.log(res);
      if (i == imgUrlList.length - 1) {
        return { call: 1, back: true };
      }
    }
  } catch (err) {
    return { call: 0, back: err };
  }
};

export const makeReviewArray = (array) => {
  if (array && array.length <= 0) {
    return;
  }
  // 정렬
  array.sort((a, b) => {
    if (a.createdAt < b.createdAt) return 1;
    if (a.createdAt > b.createdAt) return -1;
    if (a.createdAt === b.createdAt) return 0;
  });
  // 1. 날짜별 array
  var ArrByDate = [];
  for (let i = 0; i < array.length; i++) {
    if (
      !ArrByDate.find(
        (el) => el.date == moment(array[i].createdAt).format("YYYY년 MM월 DD일")
      )
    ) {
      ArrByDate.push({
        date: moment(array[i].createdAt).format("YYYY년 MM월 DD일"),
        reviews: [],
      });
    }
  }
  // 2. 날짜별 array에 리뷰 넣기
  for (let i = 0; i < array.length; i++) {
    if (
      ArrByDate.find(
        (el) => el.date == moment(array[i].createdAt).format("YYYY년 MM월 DD일")
      )
    ) {
      var idx = ArrByDate.findIndex(
        (el) => el.date == moment(array[i].createdAt).format("YYYY년 MM월 DD일")
      );
      ArrByDate[idx].reviews.push(array[i]);
    }
  }
  return ArrByDate;
};

export const ReviewEnumToText = (type, value) => {
  if (type == "service") {
    switch (value) {
      case "HYGIENIC":
        return "위생적이에요";
      case "FRIENDLY":
        return "친절해요";
      case "MINIMAL_CONVERSATION":
        return "필요한 대화만 오가요";
      case "GOOD_PERFORMANCE":
        return "퍼포먼스가 좋아요";
      case "COOKS_WELL":
        return "원하는 음식을 잘해줬어요";
      case "ENJOY_CONVERSATION":
        return "대화가 즐거워요";
      case "COMFORTABLE_ATMOSPHERE":
        return "분위기가 편안해요";
      case "EXPLAINS_WELL":
        return "설명을 잘해주세요";
      case "FAST_SERVICE":
        return "음식이 빨리 나와요";
      case "NO_EXCESSIVE_RECOMMENDATION":
        return "과도한 권유가 없어요";
    }
  } else if (type == "food") {
    switch (value) {
      case "SPECIAL_MENU":
        return "특별한 메뉴가 있어요";
      case "TASTY_FOOD":
        return "음식이 맛있어요";
      case "UNIQUE_COURSE":
        return "코스가 독특해요";
      case "LARGE_PORTIONS":
        return "양이 많아요";
      case "WELL_STRUCTURED_MENU":
        return "메뉴 구성이 알차요";
      case "TIMELY_DISH":
        return "요리가 시간에 맞게 나와요";
      case "WORTH_THE_PRICE":
        return "비싼 만큼 가치있어요";
      case "PERFECT_FOR_SPECIAL_OCCASIONS":
        return "특별한 날에 딱이에요";
      case "ARTISTIC_PLATING":
        return "플레이팅이 예술이에요";
    }
  }
};

export const paginationCounter = (allCount, per) => {
  const divided = Number(allCount) / per;
  return Math.ceil(divided);
};

export const makeQueryForChefList = (keywords) => {
  const category = keywords.categories;
  const services = keywords.services;
  const areas = keywords.areas;
  var categoryString = "";
  var serviceString = "";
  var areaString = "";
  if (category.length > 0) {
    for (let i = 0; i < category.length; i++) {
      var thisCateogy = "&categories=" + category[i];
      categoryString += thisCateogy;
    }
  }
  if (services.length > 0) {
    for (let i = 0; i < services.length; i++) {
      var thisServices = "&services=" + services[i];
      serviceString += thisServices;
    }
  }
  if (areas.length > 0) {
    for (let i = 0; i < areas.length; i++) {
      var thisAreas = "&areas=" + areas[i];
      areaString += thisAreas;
    }
  }
  const combineText = "?" + categoryString + serviceString + areaString;
  const completedText = combineText.replace("&", "");
  return completedText;
};

export const maxLengthCheck = (object) => {
  if (object.value.length > object.maxLength) {
    //object.maxLength : 매게변수 오브젝트의 maxlength 속성 값입니다.
    object.value = object.value.slice(0, object.maxLength);
  }
};
