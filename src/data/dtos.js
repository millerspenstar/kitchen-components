class KitchenDto {
    constructor(microwave, stove) {
        this.stove = stove
        this.microwave = microwave
    }
}
class ApplianceDto {
    constructor(haspower) {
        this.haspower = haspower
    } switchpower() {
        this.haspower = !this.haspower
        return this.haspower
    }
}
class MicrowaveDto extends ApplianceDto {

    heatsfood() {
        return true
    }
    constructor(haspower) {
        super(haspower)
    }

}
class StoveDto extends ApplianceDto {


    soup() {
        return this.makesoup
    }
    constructor(haspower, makesoup) {
        super(haspower)
        this.makesoup = makesoup
    }
}

export{KitchenDto, MicrowaveDto, StoveDto}