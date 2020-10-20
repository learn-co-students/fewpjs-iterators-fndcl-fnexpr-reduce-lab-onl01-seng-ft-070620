// pry = require('pryjs')

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce( function(total, element){ return element + total}, 0)
// const arrowTotalBatteries = batteryBatches.reduce( myfunction = (total, element) => {return element + total}, 0)


// console.log(totalBatteries)
// console.log(arrowTotalBatteries)