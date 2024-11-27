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
      const res = await axios.put(`https://${imgUrlList[i].url}`, images[i], {
        headers: {
          "Content-Type": "image/jpg",
        },
      });
      console.log(res);
    }
    return { call: 1, back: true };
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
  console.log(array);
  // 1. 날짜별 array
  var ArrByDate = [];
  for (let i = 0; i < array.length; i++) {
    if (
      !ArrByDate.find(
        (el) => el.date == moment(array[i].createdAt).format("YYYY년-MM월-DD일")
      )
    ) {
      ArrByDate.push({
        date: moment(array[i].createdAt).format("YYYY년-MM월-DD일"),
        reviews: [],
      });
    }
  }
  // 2. 날짜별 array에 리뷰 넣기
  for (let i = 0; i < array.length; i++) {
    if (
      ArrByDate.find(
        (el) => el.date == moment(array[i].createdAt).format("YYYY년-MM월-DD일")
      )
    ) {
      var idx = ArrByDate.findIndex(
        (el) => el.date == moment(array[i].createdAt).format("YYYY년-MM월-DD일")
      );
      ArrByDate[idx].reviews.push(array[i]);
    }
  }
  console.log(ArrByDate);
};
