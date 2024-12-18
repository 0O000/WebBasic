//비동기처리 => async, await가 간단하고 편하다.!

function delay(word, num){
    return new Promise((success) => {
        setTimeout(() => {
            setTimeout(() => success(word + "가 반환됨."))
        }, num);
    });
}

async function process() {
    const result = await delay("내가 찍혀", 1000); //먼저 처리할 부분 함수 호출해줌. Promise객체 리턴    
    console.log(result);
}