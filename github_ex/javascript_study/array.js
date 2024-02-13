// 자바스크립트 배열은 자바의 arraylist와 유사.

let numbers1 = [10,20,30];
let numbers2 = new Array();

numbers1.push(10);
console.log(numbers1);
numbers1.push(20);
console.log(numbers1);
console.log(numbers1[0]);
numbers1[0] = 30;
console.log(numbers1);
numbers1[2] = 50;
console.log(numbers1);
numbers1[5] = 100;
console.log(numbers1);
console.log(numbers1[3]);

for(let i = 0; i < 10; i++) {
    console.log(numbers1[i]);
}


// 항상된 for문
// 마지막 들어있는 값까지 가져온다. 
for(let num of numbers1) { // let num : numbers1
    console.log(num);
}

numbers1.forEach(n => console.log(n)); // 자바에서 for each는 ->

