function pattern1(n) {
    for (let index = 0; index < n; index++) {
        let str = ""
        for (let index = 0; index < n; index++) {
            str = str + "* "
        }
        console.log(str);
    }
}

function pattern2(n) {
    for (let i = 0; i < n; i++) {
        let str = ""
        for (let j = 0; j <= i; j++) {
            str = str + "* "
        }
        console.log(str);
    }
}

function pattern3(n) {
    for (let i = 0; i < n; i++) {
        let str = ""
        for (let j = 0; j <= i; j++) {
            str = str + `${j + 1}`
        }
        console.log(str);
    }
}

function pattern4(n) {
    for (let i = 0; i < n; i++) {
        let str = ""
        for (let j = 0; j <= i; j++) {
            str = str + `${i + 1}`
        }
        console.log(str);
    }
}
function pattern5(n) {
    for (let i = n; i >= 0; i--) {
        let str = ""
        for (let j = 0; j <= i; j++) {
            str = str + `* `
        }
        console.log(str);
    }
}

function pattern6(n) {
    for (let i = n; i >= 0; i--) {
        let str = ""
        for (let j = 0; j <= i; j++) {
            str = str + `${j + 1}`
        }
        console.log(str);
    }
}

function pattern6(n) {
    for (let i = n; i >= 0; i--) {
        let str = ""
        for (let j = 0; j <= i; j++) {
            str = str + `${j + 1}`
        }
        console.log(str);
    }
}

function pattern7(n) {
    for (let i = 0; i < n; i++) {
        let str = ""
        for (let j = 0; j < (n - i) - 1; j++) {
            str = str + " "
        }
        for (let j = 0; j < i * 2 + 1; j++) {
            str = str + "*"
        }
        for (let j = 0; j < (n - i) - 1; j++) {
            str = str + " "
        }
        console.log(str);
    }
}

function pattern8(n) {
    for (let i = n - 1; i >= 0; i--) {
        let str = ""
        for (let j = 0; j < (n - i) - 1; j++) {
            str = str + " "
        }
        for (let j = 0; j < i * 2 + 1; j++) {
            str = str + "*"
        }
        for (let j = 0; j < (n - i) - 1; j++) {
            str = str + " "
        }
        console.log(str);
    }
}

function pattern9(n) {

    for (let i = 0; i < n; i++) {
        let str = ""
        for (let j = 0; j < (n - i) - 1; j++) {
            str = str + " "
        }
        for (let j = 0; j < i * 2 + 1; j++) {
            str = str + "*"
        }
        for (let j = 0; j < (n - i) - 1; j++) {
            str = str + " "
        }
        console.log(str);
    }

    for (let i = n - 1; i >= 0; i--) {
        let str = ""
        for (let j = 0; j < (n - i) - 1; j++) {
            str = str + " "
        }
        for (let j = 0; j < i * 2 + 1; j++) {
            str = str + "*"
        }
        for (let j = 0; j < (n - i) - 1; j++) {
            str = str + " "
        }
        console.log(str);
    }
}

function pattern10(n) {
    for (let i = 0; i < n; i++) {
        let str = ""
        for (let j = 0; j <= i; j++) {
            str = str + "* "
        }
        console.log(str);
    }
    for (let i = n; i >= 0; i--) {
        let str = ""
        for (let j = 0; j <= i; j++) {
            str = str + `* `
        }
        console.log(str);
    }
}

function pattern11(n) {
    let start = 1;

    for (let i = 0; i < n; i++) {
        let str = ""
        if (i % 2 == 0) {
            start = 1
        }
        for (let j = 0; j <= i; j++) {
            str = str + `${start} `
            if (start) {
                start = 0
            } else {
                start = 1
            }
        }
        console.log(str);
    }
}

function pattern12(n) {
    for (let i = 0; i < 2 * n - 1; i++) {
        let str = ""
        for (let j = 0; j < 2 * n - 1; j++) {
            const topDistance = i;
            const leftDistance = j;
            const bottomDistance = (2 * n - 2) - i;
            const rightDistance = (2 * n - 2) - j;
            const number = n - Math.min(Math.min(topDistance, bottomDistance), Math.min(rightDistance, leftDistance))

            str = str + `${number} `
        }
        console.log(str);
    }
}


const n = 4
pattern12(n)
// pattern11(n)
// pattern10(n)
// pattern9(n)
// pattern8(n)
// pattern7(n)
// pattern6(n)
// pattern5(n)
// pattern4(n)
// pattern3(n)
// pattern2(n)
// pattern1(n)
