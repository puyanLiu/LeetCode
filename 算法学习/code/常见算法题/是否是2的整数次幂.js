function isAPowerOf2_back(num) {
    var temp = 1;
    while (num >= temp) {
        if (num == temp)
            return true;
        temp = temp << 1;
    } 
    return false;
}

function isAPowerOf2(num) {
    return (num & (num - 1)) == 0;
}

console.log("0", isAPowerOf2(0));
console.log("2", isAPowerOf2(2));
console.log("18", isAPowerOf2(18));
console.log("64", isAPowerOf2(64));