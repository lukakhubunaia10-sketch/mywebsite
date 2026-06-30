// ==========================
// DONUTCASH PART 1
// ==========================

// Fade in page
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Create cursor glow
const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "250px";
glow.style.height = "250px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background =
"radial-gradient(circle, rgba(170,80,255,.18), transparent 70%)";

glow.style.filter = "blur(20px)";
glow.style.zIndex = "0";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left = (e.clientX-125)+"px";
glow.style.top = (e.clientY-125)+"px";

});

// Button animation

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="";

});

});

// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Floating hero animation

const hero=document.querySelector(".hero");

let offset=0;

setInterval(()=>{

offset+=0.03;

hero.style.transform=`translateY(${Math.sin(offset)*3}px)`;

},20);
