const second = document.getElementById('firstHand')
const mins = document.getElementById('secondHand')
const hour = document.getElementById('thirdHand')
  setInterval(()=>{
const date = new Date()
const seconds = date.getSeconds()
const secondsDegree = ((seconds / 60) * 360) + 90;
second.style.transform = `rotate(${secondsDegree}deg)`;

const minute = date.getMinutes()
const minsDegree = ((minute / 60) * 360) + 90;
mins.style.transform = `rotate(${minsDegree}deg)`

const hours = date.getHours()
const hoursDegree = ((hours / 12) * 360) + 90;

hour.style.transform = `rotate(${hoursDegree}deg)`


  }, 1000)

