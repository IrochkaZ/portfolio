
const frame = document.querySelectorAll('frame');
const backToMainPageButton =  document.querySelector('.back');
const gohome =()=>{
window.location.href="./index.html"
}
backToMainPageButton.addEventListener('click', gohome);

const mobile = document.querySelector('.mobile');
const convertPage = () =>{
const frame = document.querySelector('iframe');
  if(mobile.innerHTML  == "Mobile"){
  frame.style.width = '640px';
  mobile.innerText = "Desktop";
  }else {
    frame.style.width = '1440px';
    mobile.innerText = "Mobile";
  };
}
mobile.addEventListener('click', convertPage);





