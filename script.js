const h1 = document.querySelector('h1');
const speedInput = document.querySelector('input');
const arr = 'We love Programming!'.split('');
console.log(arr);


let intervalId
window.onload = changeText()
speedInput.addEventListener('change', changeText);

function changeText(){
  clearInterval(intervalId)
  h1.innerText = ''; 
  let currentIndex = 0; 

   intervalId = setInterval(() => {
     if(arr[currentIndex] === ' '){
         h1.innerText += '\u00A0'
     }
     else  h1.innerText += arr[currentIndex]
      console.log(h1.innerText)
    currentIndex++;

    if (currentIndex === arr.length) {
      setTimeout(() => {
        h1.innerText = ''; 
      }, 0);
      currentIndex = 0;
    }
  }, Math.floor(400/speedInput.value)); 
}