const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const second = document.querySelector('#second')

let clock = setInterval(clockTime,1000)

function zr(n){
    if(n<10){
        return "0"+n
    }
    else{
        return n
    }
}

function clockTime(){
    let actualTime = new Date()
    let ahour = zr(actualTime.getHours())
    let aminute = zr(actualTime.getMinutes())
    let asecond = zr(actualTime.getSeconds())
    hour.innerText = ahour
    minute.innerText = aminute
    second.innerText = asecond
}
