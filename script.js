/* ===========================
INTRO
=========================== */

const intro = document.getElementById("intro");
const openSurprise = document.getElementById("openSurprise");


openSurprise.onclick = ()=>{

    intro.style.opacity="0";

    setTimeout(()=>{

        intro.style.display="none";

    },800);

};




/* ===========================
LOADER
=========================== */


const loader = document.getElementById("loader");


window.onload = ()=>{

    setTimeout(()=>{

        loader.style.display="none";

    },2000);

};





/* ===========================
PASSWORD
=========================== */


const realPassword = "2004";


const passwordPage =
document.getElementById("passwordPage");


const website =
document.getElementById("website");


const music =
document.getElementById("music");



function checkPassword(){


let input =
document.getElementById("password").value;



if(input === realPassword){


passwordPage.style.display="none";


website.style.display="block";


createHearts();


}

else{


alert("Wrong Password ❌");


}


}







/* ===========================
START BUTTON
=========================== */


document.getElementById("startBtn").onclick=()=>{


window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});


};




/* ===========================
LETTER — opens into big paper
=========================== */

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letterText");

const letterOverlay = document.getElementById("letterOverlay");
const letterOverlayText = document.getElementById("letterOverlayText");
const closeLetterOverlay = document.getElementById("closeLetterOverlay");

let letterText = letter.innerHTML.trim();

letter.innerHTML = "";


envelope.onclick = () => {

    envelope.classList.add("open");

    setTimeout(() => {

        letterOverlay.style.display = "flex";

        letterOverlayText.innerHTML = "";

        let i = 0;

        function typing() {

            if (i < letterText.length) {

                if (letterText[i] === "<") {

                    let tagEnd = letterText.indexOf(">", i);

                    if (tagEnd !== -1) {

                        letterOverlayText.innerHTML += letterText.substring(i, tagEnd + 1);

                        i = tagEnd + 1;

                    } else {

                        letterOverlayText.innerHTML += letterText[i];

                        i++;

                    }

                } else {

                    letterOverlayText.innerHTML += letterText[i];

                    i++;

                }

                setTimeout(typing, 20);

            }

        }

        typing();

    }, 900);

};


closeLetterOverlay.onclick = () => {

    letterOverlay.style.display = "none";

};










/* ===========================
IMAGE VIEWER
=========================== */


const images =
document.querySelectorAll(".photo-card img");


const viewer =
document.getElementById("imageViewer");


const bigImage =
document.getElementById("bigImage");



images.forEach(img=>{


img.onclick=()=>{


viewer.style.display="flex";


bigImage.src=img.src;


};


});



viewer.onclick=()=>{


viewer.style.display="none";


};









/* ===========================
MUSIC PLAYER
=========================== */


const musicBtn =
document.getElementById("musicBtn");


const vinyl =
document.getElementById("vinyl");



let playing=false;



musicBtn.onclick=()=>{


if(!playing){


music.play();


musicBtn.innerHTML="⏸";


vinyl.classList.add("playing");


playing=true;


}

else{


music.pause();


musicBtn.innerHTML="▶";


vinyl.classList.remove("playing");


playing=false;


}


};




/* ===========================
GIFT POPUP CLOSE
(popup is opened by fireBtn celebration; keep a close handler)
=========================== */


const popup =
document.getElementById("giftPopup");


const closePopup =
document.getElementById("closePopup");


if(closePopup){

closePopup.onclick=()=>{


popup.style.display="none";


};

}









/* ===========================
FLOATING HEARTS
=========================== */


function createHearts(){


setInterval(()=>{


let heart =
document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="fixed";

heart.style.left=
Math.random()*100+"vw";


heart.style.bottom="-30px";


heart.style.fontSize=
20+Math.random()*25+"px";


heart.style.zIndex="9999";


heart.style.pointerEvents="none";


heart.style.transition="6s";


heart.style.filter="drop-shadow(0 0 6px #e8b87288)";



document.body.appendChild(heart);



setTimeout(()=>{


heart.style.bottom="110vh";


},100);



setTimeout(()=>{


heart.remove();


},6000);



},500);


}









/* ===========================
CLICK HEARTS
=========================== */


document.addEventListener("click",(e)=>{


for(let i=0;i<6;i++){


let h=document.createElement("div");


h.innerHTML="💖";


h.style.position="fixed";


h.style.left=e.clientX+"px";


h.style.top=e.clientY+"px";


h.style.fontSize="25px";


h.style.zIndex="99999";


document.body.appendChild(h);



h.animate([

{
transform:"translate(0,0)",
opacity:1
},

{
transform:
`translate(${Math.random()*100-50}px,-150px)`,
opacity:0
}

],

{

duration:1500

}

);



setTimeout(()=>{

h.remove();

},1500);



}


});









/* ===========================
STARS BACKGROUND
=========================== */


const canvas =
document.getElementById("stars");


const ctx =
canvas.getContext("2d");



canvas.width =
window.innerWidth;


canvas.height =
window.innerHeight;



let stars=[];



for(let i=0;i<160;i++){


stars.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*1.6,

speed:Math.random()*1.2,

tw:Math.random()*Math.PI*2

});


}



function drawStars(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



stars.forEach(s=>{


s.tw+=0.02;


let alpha = 0.4+Math.abs(Math.sin(s.tw))*0.6;


ctx.beginPath();


ctx.fillStyle=`rgba(232,184,114,${alpha})`;


ctx.arc(
s.x,
s.y,
s.r,
0,
Math.PI*2
);


ctx.fill();



s.y+=s.speed;



if(s.y>canvas.height){

s.y=0;

s.x=Math.random()*canvas.width;

}



});



requestAnimationFrame(drawStars);



}



drawStars();



window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});






/* ===========================
CONFETTI (golden sparkles)
=========================== */


function confetti(){


for(let i=0;i<150;i++){


let c=document.createElement("div");


c.innerHTML="✨";


c.style.position="fixed";


c.style.left=Math.random()*100+"vw";


c.style.top="-20px";


c.style.fontSize=
15+Math.random()*20+"px";


c.style.zIndex="99999";



document.body.appendChild(c);



c.animate([

{

transform:"translateY(0)"

},

{

transform:
`translate(${Math.random()*300-150}px,100vh)`

}

],

{

duration:3000

}

);



setTimeout(()=>{

c.remove();

},3000);



}


}









/* ===========================
FIREWORKS
=========================== */


document.getElementById("fireBtn").onclick=()=>{


confetti();


for(let i=0;i<100;i++){


let spark =
document.createElement("div");


spark.innerHTML="✨";


spark.style.position="fixed";


spark.style.left="50%";


spark.style.top="50%";


spark.style.fontSize="25px";


spark.style.zIndex="99999";


document.body.appendChild(spark);



let x =
(Math.random()-0.5)*window.innerWidth;


let y =
(Math.random()-0.5)*window.innerHeight;



spark.animate([

{
transform:"translate(0,0)",
opacity:1
},

{

transform:
`translate(${x}px,${y}px)`,

opacity:0

}

],

{

duration:2000

}

);



setTimeout(()=>{

spark.remove();

},2000);



}


setTimeout(()=>{

popup.style.display="flex";

},700);


};









/* ===========================
SCROLL REVEAL
=========================== */


const reveal =
document.querySelectorAll(
"section,.content,.photo-card"
);



reveal.forEach(el=>{

el.classList.add("reveal");

});



window.addEventListener("scroll",()=>{


reveal.forEach(el=>{


let top =
el.getBoundingClientRect().top;



if(top < window.innerHeight-100){


el.classList.add("show");


}


});


});


const items = document.querySelectorAll(".timeline-item");

window.addEventListener("scroll", () => {

    items.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            item.classList.add("show");

        }

    });

});
