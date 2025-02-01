const h1 = document.querySelector('h1');
const speedInput = document.querySelector('input');
const heading = 'We love Programming!'


let intervalId
window.onload = changeText()
speedInput.addEventListener('input', changeText);

function changeText(){
  clearInterval(intervalId)
  h1.innerHTML = ''; 
  let currentIndex = 0; 

   intervalId = setInterval(() => {
    h1.innerHTML += heading[currentIndex]
    currentIndex++;

    if (currentIndex === heading.length) {
      setTimeout(() => {
        h1.innerHTML = ''; 
      }, 0);
      currentIndex = 0;
    }
  }, Math.floor(400/speedInput.value)); 
}
