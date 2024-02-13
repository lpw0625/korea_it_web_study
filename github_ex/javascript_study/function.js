// 함수 자바스크립트에서 제일 중요.
// 자바스크립트는 함수 자체로도 값으로 쓰인다.
// 함수를 변수에 담을 수 있다.
// 이를 통해 함수 이름도 변경이 가능하다.

function add(num1, num2) {
    console.log("num1: " + num1);
    console.log(`num2: ${num2} `); // EL표현식
    return num1 + num2; // return은 선택의 자유
}

console.log(add(10,20));

let addFucnction = add; //함수

console.log(add);
console.log(addFucnction);
console.log(addFucnction(30,40));

let user = { 
     username: "lpw",
     password: "1234",
     addFucnction: function add(a,b) {
        return a + b
     }

}

console.log(user.addFucnction(10,20)); 

// 익명 함수
let sub = function (a, b) {
    return a - b;
}

let result1 = sub(10, 5);
console.log(result1);

console.log(sub);

// 화살표함수 (람다)

let div = (a, b) => {
    return a / b;
}

console.log(div(10, 5));

div = (a, b) => a / b;
console.log(div(20, 5));
console.log(div);
