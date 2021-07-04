let positionDeg = 0


function rotate(type){
    const position = document.getElementById("carousel");
    if(type=="right"){
    positionDeg -= 90
    position.style.transform = "translateZ(-50vw) rotateY("+positionDeg+"deg)"
}else{
    positionDeg += 90
    position.style.transform = "translateZ(-50vw) rotateY("+positionDeg+"deg)"
}
}

function projectShow(action, item){
    let tempItem=document.getElementById("pInfo"+item);
    if(action==="open"){
        tempItem.style.display = "block";
    }else if(action==="close"){
        tempItem.style.display ="none";
    }
}

let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

const gestureZone = document.getElementById('carousel');

gestureZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

gestureZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false); 

function handleGesture() {
    if (touchendX < touchstartX) {
        console.log('Swiped left');
    }
    
    if (touchendX > touchstartX) {
        console.log('Swiped right');
    }
    
    if (touchendY < touchstartY) {
        console.log('Swiped up');
    }
    
    if (touchendY > touchstartY) {
       console.log('Swiped down');
    }
    
    if (touchendY === touchstartY) {
       console.log('Tap');
    }
}
