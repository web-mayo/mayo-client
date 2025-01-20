// 리스트 앞에 각각 #을 붙인 키워드 string으로 바꾸는 함수
export const listToTags = (arr) => {
    if(!arr){
        return;
    }
    return arr.map(element => `#${element}`).join('  ');
}

// 리스트를 쉼표로 구분하여 string으로 바꾸는 함수
export const listToString = (arr) => {
    if(!Array.isArray(arr)){
        return "";
    }
    return arr.join(', ')
}

export const stringToList = (string) => {
    
}