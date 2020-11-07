let htmlBody = document.querySelector("body");

htmlBody.addEventListener("mousemove", cursorEvent);

let obama = document.getElementById("obama");

function cursorEvent(e) {
    let cursorX = e.clientX;
    let cursorY = e.clientY;
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    if(cursorX > windowWidth / 2.5 && cursorX < (windowWidth / 2.5)*1.5
       && cursorY > windowHeight / 2.5 && cursorY < (windowHeight / 2.5)*1.5 ) {
        console.log("mid");
        obama.src = "obamas/obama_center.png";
    }
    else if(cursorX > windowWidth / 2.5 && cursorX < (windowWidth / 2.5)*1.5
    && cursorY < windowHeight / 2) {
        obama.src = "obamas/obama_up.png";
    }
    else if(cursorX > windowWidth / 2.5 && cursorX < (windowWidth / 2.5)*1.5
    && cursorY > windowHeight / 2) {
        obama.src = "obamas/obama_down.png";
    }
    else {
        
        if(cursorX < windowWidth / 2) {
            
            if(cursorY > windowHeight / 2.5 && cursorY < (windowHeight / 2.5)*1.5) {
                obama.src = "obamas/obama_left.png";
            }
            else if(cursorY > windowHeight / 2.5) {
                obama.src = "obamas/obama_down_left.png";
            }
            else {
                obama.src = "obamas/obama_up_left.png";
            }
        }
        else {
            
            if(cursorY > windowHeight / 2.5 && cursorY < (windowHeight / 2.5)*1.5) {
                obama.src = "obamas/obama_right.png";
            }
            else if(cursorY > windowHeight / 2.5) {
                obama.src = "obamas/obama_down_right.png";
            }
            else {
                obama.src = "obamas/obama_up_right.png";
            }
        }
    }

}