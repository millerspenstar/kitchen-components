import {KitchenDto, MicrowaveDto, StoveDto} from '../dtos'
it('should contain a Microwave and a Stove', () => {
    const microwave = new MicrowaveDto(false)
    const stove = new StoveDto(false)
    const kitchenInstance = new KitchenDto(microwave, stove)
    expect(kitchenInstance).toBeDefined
    expect(kitchenInstance.microwave).toEqual(microwave)
    expect(kitchenInstance.stove).toEqual(stove)
    expect(kitchenInstance.microwave.switchpower()).toBeTruthy()
    expect(kitchenInstance.stove.switchpower()).toBeTruthy()


})
it ('should switch power', () => {
    const targetMicrowave = new MicrowaveDto(false)
    expect(targetMicrowave.switchpower()).toBeTruthy()
})
it ('should switch power', () => {
    const targetStove = new StoveDto(false)
    expect(targetStove.switchpower()).toBeTruthy()
})
it ('should make soup', ()=> {
    const targetStove = new StoveDto(true,'makesoup')
    expect(targetStove.soup()).toEqual('makesoup')
})
it ('should heat food', ()=> {
    const targetMicrowave = new MicrowaveDto(false)
    expect (targetMicrowave.heatsfood()).toEqual(true)
})