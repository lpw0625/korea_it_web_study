// 배열 다루기 (스프레드 연산)
// html은 해석과 분석의 과정. 
// html에서 스크립트를 만나게 되면 스크립트가 실행.

/*let array = [1,2,3,4];
array.push(5);
array = [...array, 5, 6, ...array]; // 배열 안에 들어있는 값들이 그대로 복사된다. 

comsole.log(array);
let obj = { 
    name: "이평원",
    age: 31

}

let obj2 = {
    ...obj, // 위의 obj 객체가 복사됨.
    name: "이평투",
    name: "이평쓰리" // 이런식으로 같은 객체가 더 들어온다면 뒤에 있는 것으로 적용이 된다. 
                    // 키값은 중복이 되지 않으므로 마지막 키값으로 적용이 된다. 
} */

// 비구조할당

let obj = { 
    id: 1,
    name: "이평원",
    age:30
}

let {id,name,age} = obj;

console.log(age);

let dataList = [];
    getDataList();

window.onload = () => { // 이벤트 정의  스크립트가 정의가 다 되고 html이 닫을때 이벤트 발생. 
    const addInput = document.querySelector(".add-input");

    addInput.onkeyup = (e) => { // 어떤 키를 누르든지 간에 이벤트가 벌여진다.
        if(e.keyCode === 13) { 
            const inputvalue = addInput.value; // value값 넣어주기.
                                            //엔터가 들어가지면 이벤트 종료 
            
            const lastId = dataList.length === 0 ? 0 : dataList[dataList.length -1 ].id;
            
            // [ {1d.1,content: inputvalue}, { id: 2,content: inputvalue}, {id: 3.,content : inputvalue}

           
            const dataObj = { // 데이터 오브젝트.
                id: lastId + 1, // 아이디값.
                content: inputvalue
            }
            fetch("http://localhost:8080/data_array/data/addition", {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(dataObj)
            });
            dataList = [...dataList, dataObj]; //  객체를 만들어서 추가하라. 
            
            addInput.value = "";

            getDataList();  

        }
        
    }
}

//컴포넌트 
//함수의 시작은 대문자로 시작한다.

function ContentData({id,content}) {

    return `

        <li>
            <span>${id}번</span>
            <span>${content}</span>
            <input type = "text" class="edit-inputs" value="${content}">
            <button onclick="editData (${id})">수정</button>
            <button onclick="removeData(${id})">삭제</button>
        </li>

     `;

}

function getDataList () {
    const contentList = document.querySelector(".content-list"); //ul

    contentList.innerHTML = "";

    for(let dataObj of dataList) {
        contentList.innerHTML += ContentData(dataObj);
    }
    
}

    /*
            <li>
                <span >1번</span>
                <span >내용1</span>
                <input type = "text">
                <button>수정</button>
                <button>삭제</button>
            </li>

            한번 비워주는 과정. 

            */ 


    
 // 문자열 코드를 계속 추가하라. 
 
// 함수를 만드는건 기능을 추가 .
// 기능을 추가를 하는건 일을 같이할 친구를 두는것.

function removeData(id) {
    // 함수 안에다가 함수를 만드는 것이 좋다.
   // 인덱스 값을 여기에 넣어줌

    
   // [ {id: 1, content: "test1"}, {id: 2, content: "test2"} , {id: 3, content: "test2"}]//첫번째 인덱스 값을 
     // 조건이 참일때만 배열에 담긴다. 
     // const findId = function () {}
    dataList = dataList.filter((dataObj) =>  dataObj.id !== id);
    // id가 2일때 {id: 1, content: "test1"}, {id: 3, content: "test2"} 만 담는다.
    // 필터 조건이 바뀐다 . 

    getDataList();
    
    // 인덱스 값을 여기에 넣어줌
    // 아이디가 같은것만 배열에 넣어줌 
    //  dataList에 필터를 써서 함수를 넣음 
  
}

    function editData(id) { 
        const editInputs = document.querySelectorAll(".edit-inputs");
        /*let findIndex = -1

        for(let i = 0; i < dataList.length; i++) {
            if(dataList[i].id === id) { 
                findIndex = i;
                break;
            // 선형탐색 : 순서대로 탐색을 하는 것. 
            // 인덱스 번호는 무조건 찾아야 한다.

        }
    }*/


    /// const dataObj = dataList[findIndex];
    // 단지 변수에 값을 넣었을 뿐이지 객체의 주소는 아니다.
    // 배열 자체가 객체의 주소.   
                                             

    let findObj = dataList.filter((dataObj) => dataObj.id === id) [0]; // 배열 자체가 객체인 상태. 그 중에서 인덱스 번호 0번째인 객체를 가지고 오는 것이다.

    findIndex = dataList.indexOf(findObj);


    // 위치 찾기. 괄호 안에는 객체를 넣어햐 한다 .
    // let array = [1,2,3,4,5];
    // indexof(4)
    dataList[findIndex].content = editInputs[findIndex].value;

    getDataList();
}









 

