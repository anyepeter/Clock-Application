const second = document.getElementById('firstHand')

  setInterval(()=>{
const date = new Date()
const seconds = date.getSeconds()
const secondsDegree = ((seconds / 60) * 360) + 90

second.style.transform = `rotate(${secondsDegree}deg)`;
  }, 1000)
