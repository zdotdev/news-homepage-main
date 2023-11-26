window.onload = function(){
    menu_open = document.querySelector("#menu-open");
    menu_close = document.querySelector("#menu-close");
    navlist = document.querySelector("#navlist");
    cover = document.querySelector("#cover");

    menu_open.onclick = function(){
        navlist.classList.toggle("active");
        cover.classList.toggle("active");
    }
    menu_close.onclick = function(){
        navlist.classList.remove("active");
        cover.classList.remove("active");
    }
}