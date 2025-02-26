function countDigit(num,target){
    if (!Number.isInteger(num) || num<0){
        return null
    }
    if (!Number.isInteger(target) || target<0){
        return null
    }
    let temp = []
    num = String(num)
    let count = 0
    for(i=0;i<num.length;i++){
        temp.push(Number(num[i]))
    }
    for(i=0;i<temp.length;i++){
        if(temp[i]===target){
            count++
        }
    }
    // while (num>0){
    //     remainder = num%10
    //     if (num == 0 && target == 0) {
    //         return 1
    //     }
    //     if (remainder === target){
    //         count++;
    //     }
    //     num = Math.round((num-remainder)/10)
    // }
    // return count
}

console.log(countDigit(0,0))