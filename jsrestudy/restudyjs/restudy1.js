    // 자바랑 자바스크립트는 비슷하면서도 다르다 

    // 변수t선언 

    //자바 스크립트 타입ㅇ명시ㅌ

    //변수 선언 

    // var let 
    // /  변수 선언 변수명 = 데이터값.

    
    // 출력문
    // console.log

    console.log(typeof(num)); // number

    //자바 상수 
    // final 
    // 자바스크립트 상수
    // const 변수명 = 데이터값;

    const num1 = 0;


    // 함수(메소드)

    //선언 방법 

    // 1. 일반함수 
    // function 함수명() {
        // 구현하는 코드,....

    //}
    // 함수 호출

// 함수명();

function plus(a,b) {
    return a +b;
}
console.log(plus(1,2));
console.log(plus("가", "나") )

// 2 익명함수
// let 변수 =function ( ){
    // 함수 구현 코드 로지
// }
// 함수도 결국에 값으로 되기 때문에.
// 호룿 
// 변수 

let result = sub(1,2)

// 람다식 함수 
// let 변수명 = () => {
 // 함수구현 로직 코드;
    //}

    let division = (a, b) =>  {
      return  a / b;
    }

    // 배열 선언ㅇ
    // 방법 1을 추천.
    // let 배열명 = [];

    let numbers1 = [1,2,3,4,5];

    // 방법2
    // let 배열명 = new Array();

    // 배열 값 주입 

   //  let numbers2= [1,2,3,4,5,];
   // 2) 
   // .push() : 해당하는 배열에 데이터 값을 주입.
    console.log(numbers1[0]); // 해당 배열의 인덱스 값의 


    //반복문 

// for문 (let 변수명 )
// for(선언부, 조건부, 증감부)
// for문 구현 로직 코드;

// java
//for(int i = o)


// js 
// for(let i = 0; i <numbers.length; i++){}

for(let i = 0; i < numbers1,length; i++) {
    console.log(numbers1[i]);

}


// 향상된 for문 

//  for(int num : numbers1) {

//}

// for(let num of numbers1) {
    
for(let num of numbers1) {
    console.log(num);
}


// 객체 
// 객체는 클래스 (자바스크립트에서만)
// javaScrip 객체 형대
// let 변수명 = {};
// key, value 한쌍으로 여러개 들어간다. 
// 자바 list 중에 map이 있다. 
// 이 개념은 자바에선 객체로 쓰인다

let student = { 
    
    name : '이평원',
    age : 20,
    address : '양산'

}

console.log(student);

// 클래스

// class 클래스명(대문자) {

//}

class Student {
    name;
    age;

    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    // 오버로딩이 안됨.
}

let s1 = new Student();
console.log(s1.age);
s1.age = 20;
s1.name = "홍길동";
console.log(s1.name)
console.log(s1.age)

let s2 = new Student("홍길동", 20);
console.log

//#클래스명 :접근 제한 private
