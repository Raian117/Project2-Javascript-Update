var menuBox = document.getElementsByClassName("navMenu")[0];
var liElement = document.createElement("li");
liElement.innerHTML = "<a style='color: red; margin-left:50%; width:100%;' href = '/assects/pages/design.html'>Change Page Design</a>"
menuBox.appendChild(liElement);

//Buttons
var blueBg = document.getElementById("bgBlue");
var blueText = document.getElementById("textBlue");
var blueBtn = document.getElementById("btnBlue");

var redBg = document.getElementById("bgRed");
var redText = document.getElementById("textRed");
var redBtn = document.getElementById("btnRed");

var orangeBg = document.getElementById("bgOrange");
var orangeText = document.getElementById("textOrange");
var orangeBtn = document.getElementById("btnOrange");

var styleTag = document.createElement("style");
var text = document.getElementsByClassName("text");
var menu = document.getElementById("menu");
var cards = document.getElementsByClassName("cards")
var reset = document.getElementById("reset");
var buttons = document.getElementsByTagName("button");
var links = document.getElementsByTagName("a");
var savedColor
//Blue
blueBg.addEventListener("click", function(){
    document.body.setAttribute(
        "style",
        "background-color:#0077b6"
    )
    menu.setAttribute(
        "style",
        "background-color:#03045e"
    )
    for(var i = 0; i < cards.length; i++){
        cards[i].style.backgroundColor = "#03045e" ;
    }
    localStorage.setItem("bgColor", "#0077b6");
    localStorage.setItem("menuColor", "#03045e");
    localStorage.setItem("cardsColor", "#03045e");


})

blueText.addEventListener("click", function(){
    for(var i = 0; i < text.length; i++){
    text[i].style.color = "#caf0f8"
    }
    localStorage.setItem("textColor", "#caf0f8");
})

blueBtn.addEventListener("click", function(){
    for(var i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundColor = "#001d3d" ;
    }
    localStorage.setItem("btnColor", "#001d3d")
})

//Red
redBg.addEventListener("click", function(){
    // Body
    document.body.setAttribute(
        "style",
        "background-color: #a22522"
    )
    // Menu
    menu.setAttribute(
        "style",
        "background-color: #461220"
    )
    // Cards
    for(var i = 0; i < cards.length; i++){
        cards[i].style.backgroundColor = "#780000" ;
    }
    localStorage.setItem("bgColor", "#a22522");
    localStorage.setItem("menuColor", "#461220");
    localStorage.setItem("cardsColor", "#780000");


})

redText.addEventListener("click", function(){
    // Text
    for(var i = 0; i < text.length; i++){
        text[i].style.color = "#ffbab8"
    }
    localStorage.setItem("textColor", "#ffbab8");
})

redBtn.addEventListener("click", function(){
    // Buttons
    for(var i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundColor = "#461220" ;
    }
    localStorage.setItem("btnColor", "#461220")
})

//Orange
orangeBg.addEventListener("click", function(){
    // Body
    document.body.setAttribute(
        "style",
        "background-color: #e36414"
    )
    // Menu
    menu.setAttribute(
        "style",
        "background-color: #780116"
    )
    // Cards
    for(var i = 0; i < cards.length; i++){
        cards[i].style.backgroundColor = "#621708" ;
    }
    localStorage.setItem("bgColor", "#e36414");
    localStorage.setItem("menuColor", "#780116");
    localStorage.setItem("cardsColor", "#621708");


})

orangeText.addEventListener("click", function(){
    // Text
    for(var i = 0; i < text.length; i++){
        text[i].style.color = "#ffbf69"
    }
    localStorage.setItem("textColor", "#ffbf69");
})

orangeBtn.addEventListener("click", function(){
    // Buttons
    for(var i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundColor = "#bb4d00" ;
    }
    localStorage.setItem("btnColor", "#bb4d00")
})


//Load
window.addEventListener("load", function () {
    document.body.style.backgroundColor =
        localStorage.getItem("bgColor");
    menu.setAttribute(
        "style",
        "background-color:" + localStorage.getItem("menuColor")
    )
    for(var i = 0; i < cards.length; i++){
        cards[i].style.backgroundColor = localStorage.getItem("cardsColor") ;
    }
    for(var i = 0; i < text.length; i++){
        text[i].style.color = localStorage.getItem("textColor");
    }
        for(var i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundColor = localStorage.getItem("btnColor") ;
    }
});
// Reset
reset.addEventListener("click", function() {
document.querySelectorAll('[style]').forEach(element => 
{
        element.removeAttribute('style');
});
    localStorage.clear()
})

