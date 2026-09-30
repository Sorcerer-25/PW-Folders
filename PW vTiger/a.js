class Atm{
    #accNo = 1234
    #pin = "9999"
    accHolder = "Atharv"

    getAccNo(){
        return this.#accNo
    }
    getPin(){
        return this.#pin
    }
    setPin(newPin){
        this.#pin = newPin;
    }

}

// let user1 = new Atm()
// console.log(user1.getPin());
// console.log(user1.getAccNo());
// user1.setPin(4965)
// console.log(user1.getPin());


class Vehicle{
    constructor(wheel,color)
    {
        this.wheel = wheel
        this.colour = color
    }
}

class Car{
    constructor()
}