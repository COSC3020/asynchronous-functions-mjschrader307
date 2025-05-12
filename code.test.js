const { arrayCountMatches } = require("./code.js");

function normal_implementation(arr, element_val) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element_val) sum++;
    }

    return sum;
}

function eval(arr, element_val) {
    arrayCountMatches(arr, element_val).then(result => {
        if (result !== normal_implementation(arr, element_val)) {
            throw new Error("Unexpected element count")
        }
    });
}

function test() {
    const tests = [
        {
            "array": [0, 1, 0, 1, 0, 1],
            "value": 0,
        },
        {
            "array": [],
            "value": 10,
        },
        {
            "array": [1, 2, 3, 4, 5],
            "value": 10,
        }
    ];

    for (let i = 0; i < tests.length; i++) {
        const T = tests[i];

        eval(T["array"], T["value"]);
    }
}

test();