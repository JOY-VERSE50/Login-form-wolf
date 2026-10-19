const dragonFlight = document.getElementById("dragonFlight");
const dragon = document.getElementById("dragon");
const loginCard = document.getElementById("loginCard");
const impact = document.getElementById("impact");
const hint = document.getElementById("hint");
const world = document.getElementById("world");

let started = false;

function startSequence(){
  if(started) return;
  started = true;

  // The dragon animation lasts 4.2s and starts after 0.7s.
  // The login card drops immediately after the dragon reaches the destination.
  setTimeout(()=>{
    impact.classList.add("fire");
    world.animate(
      [
        {transform:"translate(0,0)"},
        {transform:"translate(5px,-3px)"},
        {transform:"translate(-6px,4px)"},
        {transform:"translate(3px,0)"},
        {transform:"translate(0,0)"}
      ],
      {duration:450,easing:"ease-out"}
    );

    loginCard.classList.add("show");
    hint.classList.add("hide");
  }, 4900);
}

window.addEventListener("load", startSequence);

const password = document.getElementById("password");
document.getElementById("showPassword").addEventListener("click",()=>{
  password.type = password.type === "password" ? "text" : "password";
});

document.getElementById("loginForm").addEventListener("submit",(e)=>{
  e.preventDefault();

  const message = document.getElementById("message");
  message.textContent = "ACCESS GRANTED";

  loginCard.animate(
    [
      {boxShadow:"0 0 50px rgba(0,120,255,.18)"},
      {boxShadow:"0 0 80px rgba(50,180,255,.8)"},
      {boxShadow:"0 0 50px rgba(0,120,255,.18)"}
    ],
    {duration:900}
  );
});
