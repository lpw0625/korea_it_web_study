const addBoxButton = document.querySelector(".add-box-button");

addBoxButton.onclick = () => {
    const boxContainers = document.querySelectorAll(".box-container");
    boxContainers[0].innerHTML += `<div class="box"></div>`;
    const boxList = document.querySelector(".box");

    for(let i = 0; i < boxList.length; i++)
    {

        boxList[0].onclick = () =>  {
            let isBlueBox = boxList[i].classList.contains("blue-box");
            let isRedBox = boxList[i].classList.conains("red-box");
            if (isBlueBox) {
                boxList[i].classList.remove("blue-box")
                boxList[i].classList.add("red-box")
                    
            } 
            else if(isRedBox) {
                    boxList[i].classList.remove("red-box")
                    

            }else {
                boxList[i].classList.add("blue-box")
                boxContainers[0].removeChild(box)
                boxContainers[1].appendChild(box)

            }
        }
    }
}

    

