const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
})

// const reducer = (accumulator, currentValue) => accumulator + currentValue
// let totalBatteries = batteryBatches.reduce(reducer, 0)


console.log(totalBatteries)
