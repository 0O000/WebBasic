async function process22(char, num) {
    const [result, char2, num2] = await new Promise((resolve) => {
        let sum_str = char.repeat(num);
        resolve([sum_str, char, num]);
    });
    console.log(char2 + "이 " + num2 + "번 반복하여 " + result + "가 만들어짐.");
}

process22("*", 10);