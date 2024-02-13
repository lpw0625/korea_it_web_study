// 이름 나이 주소를 입력하여 추가하면 나오고 
// 입력 칸 버튼 안에 그 값이 사라진다.

let index = 1;

const appendButton = document.querySelector(".append-button");
// 어팬드버튼 선언. 


appendButton.onclick = () => {
    const textInputs = document.querySelectorAll(".text-inputs");
    const dataTableBody = document.querySelector(".data-table-body");

    dataTableBody.innerHTML += `
    
    <tr>
        <td>${index}</td>  // index = 1;
        <td>${textInputs[0].value}</td>
        <td>${textInputs[1].value}</td>
        <td>${textInputs[2].value}</td>
    </tr>

    `;

    index++; 

    for(let input of textInputs) { //textInputs를 input해서 
        input.value = ""; // input한 값은 아무것도
    }
}