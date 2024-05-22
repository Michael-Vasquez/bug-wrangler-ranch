const { database } = require("./database.js")

const roundup = (herdSize) => {
    const cattle = []
    const types = database.cattleTypes

    for (let counter = 0; counter < herdSize; counter++) {          // changed size to herdSize
        const randomType = Math.floor(Math.random() * types.length)
        const animal = types[randomType]
        cattle.push(animal.breed)
    }

    return cattle
}

module.exports = { roundup }