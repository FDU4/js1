
let countBs = function(str, symb) {
    let x = 0;
    for (let i = 0; i <= str.length - 1; i++) {
        if (str.charAt(i) == symb) x++;
    }
    return(x);
}
console.log(countBs('чяаврапрттxfgnfghfттпролоghттттпнрт' , 'т'));


