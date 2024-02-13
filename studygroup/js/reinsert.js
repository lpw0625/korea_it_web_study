function clickEvent() {
const dataInputs= document.querySelectorAll(".data-inputs");

const data = {
   PhoneName : dataInputs[0].value,
   Color : dataInputs[1].value,
   Price : dataInputs[2].value
};

console.log(data);
const phoneJson = JSON.stringify(data);
console.log(phoneJson);

const dataOption = {
method: "post",

header : {
    
    "Content-Type" : "application/json"

},

body : phoneJson // 제이슨으로 변환할 객체를 넣는다.


}



}


