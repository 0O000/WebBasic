function sumNumbers(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    console.log(total);
}

function printInfo(name, age, ...hobbies){
    console.log("이름: " + name);
    console.log("나이: " + age);
    console.log("취미: " + hobbies.join(", "));
}

sumNumbers(10, 20, 30);
sumNumbers(5, 15);
printInfo("이영희", 25, "독서", "요가", "영화감상");
printInfo("김철수", 30);