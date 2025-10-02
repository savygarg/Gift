// ------------------ Floating Hearts & Emojis ------------------
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random()*window.innerWidth + "px";
  heart.style.backgroundColor = ["#FF4D6D","#FF758F","#FF8FA3","#FFB3C1","#FFCCD5"][Math.floor(Math.random()*5)];
  document.getElementById("hearts-container").appendChild(heart);
  setTimeout(()=>heart.remove(),6000);
}
setInterval(createHeart, 500);

function createEmoji() {
  const emojis = ["💖"];
  const emoji = document.createElement("div");
  emoji.className="emoji";
  emoji.textContent = emojis[Math.floor(Math.random()*emojis.length)];
  emoji.style.left = Math.random()*window.innerWidth+"px";
  emoji.style.fontSize = "20px";
  document.getElementById("emoji-container").appendChild(emoji);
  setTimeout(()=>emoji.remove(),6000);
}
setInterval(createEmoji,800);

// ------------------ Section Reveal ------------------
function showLetter(){
  const sections = ["letter-section","scrapbook","quiz","countdown-section","love-counter","spotify-section","secret-section","polaroid-section","surprise"];
  sections.forEach((id,index)=>{
    setTimeout(()=>{ document.getElementById(id).style.display="block"; finalSurpriseMini(); }, index*2000);
  });
}

// ------------------ Quiz ------------------
function quizAnswer(correct){
  const result = document.getElementById("quiz-result");
  result.textContent = correct?"Correct! It's you ":"Nope! Only YOU are the best ";
}

// ------------------ Countdown + Love Meter ------------------
const targetDate = new Date("2025-10-08 00:00:00").getTime();
let lovePercent = 0;
setInterval(()=>{
  const now = new Date().getTime();
  const distance = targetDate - now;
  const days = Math.floor(distance/(1000*60*60*24));
  const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
  const seconds = Math.floor((distance % (1000*60))/1000);
  document.getElementById("countdown").textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  document.getElementById("love-meter").style.width = lovePercent + "%";
},1000);

// Click anywhere to boost love meter
document.addEventListener("click", ()=>{ lovePercent=Math.min(100,lovePercent+5); });

// ------------------ Love Counter ------------------
const loveStart = new Date("2024-09-26 00:00:00").getTime();
setInterval(()=>{
  const now = new Date().getTime();
  const seconds = Math.floor((now-loveStart)/1000);
  document.getElementById("love-seconds").textContent = `${seconds} seconds 💖`;
},1000);

// ------------------ Secret Unlock ------------------
function checkSecret(){
  const input = document.getElementById("secret-input").value.toLowerCase();
  const result = document.getElementById("secret-result");
  result.textContent = input==="sayam"?"You found my secret 💌 Love you!":"Try again 😉";
}

// ------------------ Polaroid Drag ------------------
const polaroids = document.querySelectorAll(".polaroid");
polaroids.forEach(p=>{
  let offsetX,offsetY;
  p.addEventListener("mousedown",startDrag);
  p.addEventListener("touchstart",startDrag);
  function startDrag(e){
    e.preventDefault();
    const evt = e.type==="touchstart"?e.touches[0]:e;
    offsetX = evt.clientX - p.getBoundingClientRect().left;
    offsetY = evt.clientY - p.getBoundingClientRect().top;
    document.addEventListener("mousemove",drag);
    document.addEventListener("mouseup",stopDrag);
    document.addEventListener("touchmove",drag);
    document.addEventListener("touchend",stopDrag);
  }
  function drag(e){
    const evt = e.type==="touchmove"?e.touches[0]:e;
    p.style.position="absolute";
    p.style.left=(evt.clientX-offsetX)+"px";
    p.style.top=(evt.clientY-offsetY)+"px";
  }
  function stopDrag(){
    document.removeEventListener("mousemove",drag);
    document.removeEventListener("mouseup",stopDrag);
    document.removeEventListener("touchmove",drag);
    document.removeEventListener("touchend",stopDrag);
  }
});

// ------------------ Surprise Burst ------------------
function finalSurpriseMini(){
  for(let i=0;i<5;i++){
    const burst=document.createElement("div");
    burst.className="burst";
    burst.style.width=burst.style.height="15px";
    burst.style.backgroundColor=["#FF4D6D","#FF758F","#FF8FA3","#FFB3C1","#FFCCD5"][Math.floor(Math.random()*5)];
    burst.style.left=Math.random()*window.innerWidth+"px";
    burst.style.top=Math.random()*window.innerHeight+"px";
    document.body.appendChild(burst);
    setTimeout(()=>burst.remove(),1000);
  }
}
function finalSurprise(){
  for(let i=0;i<30;i++){
    const burst=document.createElement("div");
    burst.className="burst";
    burst.style.width=burst.style.height="20px";
    burst.style.backgroundColor=["#FF4D6D","#FF758F","#FF8FA3","#FFB3C1","#FFCCD5"][Math.floor(Math.random()*5)];
    burst.style.left=Math.random()*window.innerWidth+"px";
    burst.style.top=Math.random()*window.innerHeight+"px";
    document.body.appendChild(burst);
    setTimeout(()=>burst.remove(),1000);
  }
}
