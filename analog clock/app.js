const secondHand = document.getElementById("second-hand")
const minuiteHand = document.getElementById("minuite-hand")
const hourHand = document.getElementById("hour-hand")

function getTime() {
    const now = new Date()
    const seconds = now.getSeconds()
    const minuites = now.getMinutes()
    const hours = now.getHours()
    const timeInterval = 6

    secondHand.style.transform = "rotate(" + seconds * timeInterval +"deg)"
    
    minuiteHand.style.transform = "rotate(" + (minuites * timeInterval +seconds/10) + "deg)"
    
    hourHand.style.transform = "rotate(" + hours * 30 +"deg)"
}

setInterval(getTime, 100)