/*const idButton = document.querySelector(".id-button");
const idPassword = document.querySelector(".pw-button")*/


/*let signArray = new Array();

let signInmember = {

    addId : sdsdsd,
    addPassword : dsdsdds

}

l

let signInJson = localStorage.getItem("sign-in");
let signIn = signInJson !== null ? JSON.parse(signInJson )*/

window.onload = () => {
let user = {
    id : "test",
    password : "1234"
};

const userJson = localStorage.getItem("userInfo"); // 키값인 userInfo를 가져온다.
const userInfoList = userJson !== null ? JSON.parse(userJson): new Array();

userInfoList.push(user);

localStorage.setItem("userInfo",JSON.stringify(userInfoList));
}






const signInbutton = document.querySelector(".signin-button");
signInbutton.onclick = () => {

    const idButton = document.querySelector(".id-button");
    const pwButton = document.querySelector(".pw-button");

    let user = {

        id:idButton.value, 
        password:pwButton.value
    }

    const userJson = localStorage.getItem("userInfo"); // userInfo를 value로 가져온다.
    const userInfoList = userJson !== null ? JSON.parse(userJson) : new Array();

  

    for(i > 0; userInfoList.length; i++); {

        if(userInfoList[i].id === user.id && userInfoList[i].password === user.password) {
        
        alert("로그인 성공")
        

         } else {

            alert("로그인 실패")


            }   

    
        }
        
    }


    // 대상 정하기 
    /*
    const idInput = document.querySelector("id-input");
   


    // 로그인 버튼 클릭했을때 함수 만들기
    function buttonCilick() {
            // id, password 인풋값 받기
            const.idInput = document.querySelector(".id-input");

    }



// 삼항 연산자
// 조건 ? 깂 : 깂 */
