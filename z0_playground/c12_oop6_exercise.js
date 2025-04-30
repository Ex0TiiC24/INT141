/*
1. write a class named Vehicle
2. with property: brand, model
3. with method: getBrand, getModel
4. with method: getLicensePlate, setLicensePlate  
5. write an equivalent code using constructor function
6. write a class named Car by extending Vehicle
7. with property: owner
8. with method: getOwner, setOwner
9. write an equavalent code using constructor function
*/
class vehicle {
    constructor(brand,model){
        this.brand = brand;
        this.model = model;
    }
    getBrand() {
        return this.brand
    }
    getModel(){
        return this.model;
    }
    getLicenseplate(){
        return this.licenseplate
    }
    setLicenseplate(licenseplate){
        this.licenseplate = licenseplate
    }

}
class car {
    setOwner(owner){
        this.owner = owner
    }
    getOwner(){
        return this.owner
    }

}




