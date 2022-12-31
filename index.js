var soundList=["sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3","sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3"];


for (var i=0; i < document.querySelectorAll("button").length; i++) {
document.querySelectorAll("button")[i].addEventListener("click", function() {
    var textButton = this.textContent;
    makeSound(textButton);
    buttonAnimation(textButton);
})}

document.addEventListener("keydown", function(event) {
    var keyboardPressed = event.key;
    makeSound(keyboardPressed);
    buttonAnimation(keyboardPressed);
})

function makeSound(key) {
    switch (key) {
        case "w":
            var crash=new Audio(soundList[0]);
            crash.play();
            break;
        case "a" :
            var kick=new Audio(soundList[1]);
            kick.play();
            break;
        case "s" :
            var snare=new Audio(soundList[2]);
            snare.play();
            break;
        case "d" :
            var tom1=new Audio(soundList[3]);
            tom1.play();
            break;
        case "j" :
            var tom2=new Audio(soundList[4]);
            tom2.play();
            break;  
        case "k" :
            var tom3=new Audio(soundList[5]);
            tom3.play();
            break;
        case "l" :
            var tom4=new Audio(soundList[6]);
            tom4.play();
            break;
        default :
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100)
}