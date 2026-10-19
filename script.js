const particles=document.getElementById("particles");
for(let i=0;i<34;i++){
  const s=document.createElement("span");
  s.className="spark";
  s.style.left=Math.random()*100+"%";
  s.style.animationDuration=(5+Math.random()*8)+"s";
  s.style.animationDelay=(-Math.random()*10)+"s";
  s.style.opacity=.2+Math.random()*.8;
  particles.appendChild(s);
}

const eye=document.getElementById("eye");
const password=document.getElementById("password");
eye.addEventListener("click",()=>{
  password.type=password.type==="password"?"text":"password";
  eye.textContent=password.type==="password"?"◉":"◌";
});

document.getElementById("loginForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  const status=document.getElementById("status");
  status.textContent="ACCESS GRANTED";
  document.querySelector(".login-card").animate(
    [{boxShadow:"0 0 35px rgba(0,120,255,.18)"},{boxShadow:"0 0 65px rgba(50,180,255,.8)"},{boxShadow:"0 0 35px rgba(0,120,255,.18)"}],
    {duration:900}
  );
});
