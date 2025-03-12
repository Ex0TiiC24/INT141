
const p = (...a) =>{
    console.log(...a)
}

function creating() {
    let ar1 = [10,"two",false,0.2,null,"two"]
    let ar2 = new Array("x","y",undefined)
    let ar3 = Array(5)
    let ar4 = Array.of(5)
    let ar5 = Array.from("hello")
    
    p(ar1)
    p(ar2)
    p(ar3)
    p(ar4)
    p(ar5)
    
}

function typeChecking() {
    let ar = [10,undefined,null,Infinity,NaN,"","last"]
    p(ar)
    p(typeof(ar))
    p(Array.isArray(ar))
    p(ar instanceof Array)
    p(ar.constructor === Array)
}

function asStackAndQueue(){
    let ar = [10,undefined,null,Infinity,NaN,"","last"]
    p(ar)
    stack ---
    ar.push("final")
    p(ar)
    ar.pop()
    p(ar)
    let arpeek = ar[ar.length-1]
    p(arpeek)
    ar = [10,undefined,null,Infinity,NaN,"","last"]
    
    // queue ---
    ar.push("final") //enqueue
    p(ar)
    let peek = ar[0]
    ar.shift() //dequeue
    ar.shift()
    ar.shift()
    ar.shift()
    p(ar)
}

asStackAndQueue()