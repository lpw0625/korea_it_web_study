const menuButton = document.querySelector(".menu-button");

menuButton.onclick = () => {
    const sideBarLayout = document.querySelector(".side-bar-layout");
    sideBarLayout.classList.add("side-bar-show");
    const sideBarContainer = document.querySelector(".side-bar-container");
    sideBarContainer.classList.add("side-bar-container-show");
}

const closeButton = document.querySelector(".side-bar-close-button");

closeButton.onclick = () => {
        const sideBarLayout = document.querySelector(".side-bar-layout"); 
        sideBarLayout.classList.remove("side-bar-show"); //선택자를 쓰지 않으므로 .을 안찍는다.
        const sideBarContainer = document.querySelector(".side-bar-container");
        sideBarLayout.classList.remove("side-bar-container-show");
        
}