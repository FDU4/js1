let isEven = function (numb) {
    if (numb == 0) return true;
    else if (Math.abs(numb) == 1) return false;
    else return numb = isEven(Math.abs(numb) - 2);
}
console.log(isEven(-1));