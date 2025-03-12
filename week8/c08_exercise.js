
function sumUntilInfinity (ar) {
    //sum all number ikn the array until you reached infinity
    //skip anything that's not a nubmer or negative value
    let sum = 0
    for(i=0;i<ar.length;i++){
        if (ar[i]== Infinity){
            break;
        }
        if( typeof(ar[i]) != "number"||ar[i] < 0){
            continue
        }
        sum+=ar[i]
    }
    return sum
}

const data = [0,-1,"w",2,Infinity,"dqwqdw",123123,-23]

console.log("1",sumUntilInfinity(data))

function replaceAllNegativeValueWith(ar,increment) {
    let replaced = Array(...ar)
    for(i=0;i<replaced.length;i++){
        if (replaced[i]<0){
            replaced[i]+=increment
        }
    }
    return replaced
}

console.log("2",replaceAllNegativeValueWith(data,20))
console.log(data)
console.log(typeof(0))