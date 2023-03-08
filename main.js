console.log('link');

//UKOL 1
const fillcut = (str, len) => {
    if (str.length > len) {
        const newNumber = str.length - len;
        const newStr = str.slice(0, -newNumber );
        return newStr
    }

    if (str.length < len) {
        const newStr = str.padStart(len, '.');
        return newStr
    }

    if (str.length === len) {
        return str
    }
}

console.log(fillcut('AndreaNovakova', 14));

//UKOL 2
const isLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 != 0) || (year % 400 === 0)) {
        //console.log('prestupny rok')
        return true
    }
    return false
}

console.log(isLeapYear(1997))
