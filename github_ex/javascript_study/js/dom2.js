const submitButton = document.querySelector(".input-submit");

submitButton.onclick = () => {
    // 클릭이 일어 났을때 함수가 호출이 된다.
    // 이벤트 속성이라고 한다.더블클릭,온드래그,키업,키다운,마우스 오버,마우스 엔터 

    const input = document.querySelector(".inputs");
    const dataList = document.querySelector(".data-list");

    dataList.innerHTML += `<li> ${input.value} </li>`;
    
}

/* 

   let submitButton = { 
    onclick: null
   }

   submitButton.onclick = () => {

   }
   */