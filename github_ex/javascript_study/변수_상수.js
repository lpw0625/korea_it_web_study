// 변수 var, let
// 상수 const

var num1 = 10; // 1((선언)  4(대입)
var num2 = 20; // 2 (선언) 5(대입)

console.log(num1 + num2);

// 호이스팅
// 메모리 참조 이전에 선언이 무조건 먼저 일어나는 현상.
//호이스팅은 코드를 실행하기 전 변수선언/함수선언을 해당 스코프의 최상단으로 끌어올리는 것이 아니다.
// 호이스팅은 코드가 실행하기 전 변수선언/함수선언이 해당 스코프의 최상단으로 끌어 올려진 것 같은 현상을 말한다.
// var는 재선언이 가능하므로 쓰이지 않는다.
console.log(num1 + num3);
var num3 = 40; // 3 (선언)
console.log(num3);
var num3 = "안녕";
console.log(num3);


// let은 호이스팅이 안된다.

//console.log(num4);
console.log(num4);
let num4 = 10;
num4 = 20;
console.log(num4);

// 상수

const num5 = 30;
// num5 = 40;
console.log(num5);



