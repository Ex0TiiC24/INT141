function p(...a) {
    console.log(...a)
}

class car {
    constructor(brand,year){
        this.brand = brand
        this.year = year
    }

    get getspeed(){
        return this.speed()
    }

    speed(){
        return this.brand.length*100-30
    }

    static hello(){
        return "HONK"
    }
    
}

const ferrari = new car("Ferrari",1990)
p(ferrari.speed())
