function handleSubmitClick() {
    const dataInputs = document.querySelectorAll(".data-inputs");
    const data = {
        name: dataInputs[0].value,
        age: dataInputs[1].value
    };

    console.log(data);
    const jsonData = JSON.stringify(data); // 객체에서 Json으로 바꾸는 과정.
    console.log(jsonData); // 값이 잘 담겼나 확인. 

    const option = {
        method: "post", // insert 
        headers: {
            "Content-Type": "application/json" 
        },
        body: jsonData
    }

fetch("http://localhost:8080/insert_and_select/data/addition", option)
    then((response) => {
      response.json()
        .then((json) => {
            console.log(json.data);
        }); // 비동기 처리가 정상적으로 실행이 됬을때 실행되는 함수.
});

console.log("test");

}