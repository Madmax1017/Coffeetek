
const orderbtns = document.querySelectorAll('.Orders');

const modelOverlay = document.querySelector('.modal-overlay');

const closebtn= document.querySelector(".modal-cta")
const loginbtn = document.querySelector(".Login-popup")

const LoginOverlay =document.querySelector(".Login-overlay")
orderbtns.forEach( button => {
  button.addEventListener("click",()=>{
    modelOverlay.classList.add("active");
  }); 
});
modelOverlay.addEventListener("click",(event) =>{
  if(event.target==modelOverlay){
    modelOverlay.classList.remove("active")
  }
})

closebtn.addEventListener("click",()=>{
 modelOverlay.classList.remove("active");
}

);

LoginOverlay.addEventListener("click",(event) =>{
  if(event.target==LoginOverlay){
    LoginOverlay.classList.remove("active")
  }
})
// reveal
// const revealElemnets =document.querySelectorAll(".reveal");

// const revelOnScroll = () => {
//   revealElemnets.forEach(el =>{
//     const position = el.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;
//     if(position , windowHeight - 100){
//       el.classList.add("visible");
//     }
//   })
// }
// window.addEventListener("scroll", revelOnScroll);
// document.addEventListener("DOMContentLoaded",revelOnScroll)

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate once only
    }
  });
}, {
  threshold: 0.2 // Trigger when 20% is visible
});

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});





























loginbtn.addEventListener("click",() =>{
  LoginOverlay.classList.add("active")
})