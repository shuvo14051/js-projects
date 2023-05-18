let count = 0
const h1 = document.querySelector("#count")
const increase = document.querySelector("#increase")
const decrease = document.querySelector("#decrease")


increase.addEventListener('click',function(){
  count++
  h1.innerHTML=count
})

decrease.addEventListener('click',function(){
  count--
  h1.innerHTML=count
})