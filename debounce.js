//Accessing Button node
const buttonClick=()=>{

console.log('button clicked')

}

const debounce=(fn,delay)=>{
let timer;
return (...args)=>{
clearTimeout(timer)
timer=setTimeout(()=>{
return fn()
},delay)
}
}
const btn=document.querySelector('#btn')
btn.addEventListener('click',debounce(buttonClick,500))
