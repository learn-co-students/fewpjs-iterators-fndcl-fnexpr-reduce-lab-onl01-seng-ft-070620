const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function(total, current) {return total + current},0)


// batteryBatches.reduce(function(total, current) {
//     total += current
// })


