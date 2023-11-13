export const convertNumber = (number) => {
    const numWithCommas = number.toLocaleString();
    var arr = numWithCommas.split(",");
    if (arr.length === 5) {
        //trillion
        return arr[0] + "." + arr[1].slice(0, 2) + "T";
    }
    else if (arr.length === 4) {
        //billion
        return arr[0] + "." + arr[1].slice(0, 2) + "B";
    }
    else if (arr.length === 3) {
        //million
        return arr[0] + "." + arr[1].slice(0, 2) + "M";
    }
    else if (arr.length === 2) {
        //thousand
        return arr[0] + "." + arr[1].slice(0, 2) + "K";
    }
    else {
        //hundred
        return number.toLocaleString();
    }
}