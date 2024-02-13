
// 동기처리
console.log(1);
console.log(2);
console.log(3);

// 비동기 함수 처리 

// 콜뱃 함수
/*setTimeout(() => {
    console.log(4);
        setTimeout(() =>  {
            console.log(5);
        }, 2000);
    }, 3000);
*/
    /*new Promise((resolve, reject) => { // Promise >> 비동기 
            setTimeout (() => {
            console.log("1번"); // 요청을 날리고 resolve를 실행.

            }, 2000);
            resolve("3번"); // then 안에 있는 " console.log(result);"를 출력

    }).then((result) =>  {
        console.log(result);
    });

    console.log("2번"); // 실행 속도가 제일 빨라서 먼저 출력.*/

   /* console.log("프로그램 시작");

    const  p = Promise((resolve, reject) => { // 비동기 안에 비동기
        console.log("여기서");
        console.log("여기까지");
        if (1 === 1){
            resolve();
        }else {
            reject(new Error);
        }
        resolve();
    }); 

    p.then((response) => {
        console.log("3초 뒤에 출력");
     }). catch((error) => {
        console.log(error);
     }).finally(() => {

      // promise가 끝나면 실행됨.(비동기)
    });

  // 실행시점이 중요 하지 않다.

    console.log("여기가 먼저");*/


    async function run() {
        const num1 = await print1();
        const num2 = await print2();
        console.log(num1);
        console.log(num2);
    }

    async


    