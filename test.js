//split() and trim()
let anyword = "     Javascript language is the best the than Java      ";

let testSplit = anyword.split("");

let testTrim = anyword.trim();

console.log(testSplit);

console.log(testTrim);

//replace and slice

let text = "Javascript language is the best the than Java";

let testingTheReplace = text.replace("Java", "any language");
let testingTheReplaceInGlogal = text.replace(/Java/g, "Jesus");
/* console.log(testingTheReplace);
console.log(testingTheReplaceInGlogal);
 */
/* console.log("\n"); */

let university = "Javascript language is the best the than Java";

let tamanho = university.length;

let testingSlice = university.slice(0, tamanho);
/* 
console.log(testingSlice); */

/* const family = ["luis", "filipe", "vasco", "evanilson"];

const search = family.lastIndexOf("evanilson");

console.log(search); */
