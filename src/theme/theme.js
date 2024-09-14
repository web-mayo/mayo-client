export const theme = {
    main : "rgb(250, 124, 21)",
    sub : "#FFF3EA"
};

export const rgba = (rgb, alpha) => {
    // rgb 문자열을 rgba로 변환하는 함수
    const [r, g, b] = rgb.match(/\d+/g);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };