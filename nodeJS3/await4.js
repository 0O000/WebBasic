async function process2(stamp, num) {
    let result = await new Promise((success) => {
        let str = "";
        for (let index = 0; index < num; index++) {
            str += stamp;
        }
        // let sum_str = char.repeat(num);
        success(str);
    });
    console.log(result);
}

process2('*', 10);

async function process3(num) {
    let result = await new Promise((success) => {
        let ran = Math.floor(Math.random() * 100) + 1 + num;
        success(ran);
    })
    console.log(result)
}

process3(100);