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
