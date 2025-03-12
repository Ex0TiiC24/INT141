const p = (...x) =>{
    console.log(...x)
}


function misc() {
    let str1 = "string1"
    let str2 = "string2"
    p(str1)
    p("length:",str1.length)
    p("str1+=str2:",str1+=str2)

}

function manipulate(){
    let word = "HELLOE"
    let target = "E"
    let indexof = []
    p("chartat[1]",word[1])
    p("slice",word.slice(1,3))

    for(i=0;i<=word.length;i++){
        if (word[i]===target){
            indexof.push(i)
        }
    }
    p("indexof",indexof)
}

