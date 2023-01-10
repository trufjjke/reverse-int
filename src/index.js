module.exports = function reverse(n) {
   if (n < 0) {
      n = n * -1;
   }
   let arr = [];
   let result = ``;
   let strArg = n.toString();
   for (let i = 0; i < strArg.length; i++) {
      arr[i] = strArg[i];
   }
   result = arr.reverse().join(``);
   return result;
};
console.log(module.exports(-1));