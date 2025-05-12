async function evaluate(arr, index, element_val) {
    return await Promise.resolve((arr[index] === element_val) ? 1 : 0);
}

async function arrayCountMatches(arr, element_val) {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        const to_add = await evaluate(arr, i, element_val);
        sum += to_add;
    }

    return sum;
}

module.exports = { arrayCountMatches };