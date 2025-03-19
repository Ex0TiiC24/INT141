//regex.js
function p(...a){
    console.log(...a)
}

function createRegex(){
    
    let legeg = /\w{6,}@[a-z]+(.com)/g
    let pass = /\w{8,}/i
    let number = /\d+/g
    // p(legeg.test('taiyoyama@outlook.com'))
    // p(pass.test('hwefiwefji@9234923-+-_-wdw[}}'))
    p("daowmdoamwdojfiwje.miscellaneouse@gmail.com".search(legeg))
    p("daowmdoamwdojfiwje.miscellaneouse@gmail.com.omegalul@gmail.com".match(legeg))

    for(let o of "miscellaneouse@gmail.com.omegalul@gmail.com".matchAll(legeg)) p(o)
    p("miscellaneo123use22@gmail.com".match(number))

}

createRegex()