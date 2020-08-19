/*EASY q1
function convert(a){
console.log(a*60);
}
convert(5)
convert (3)
convert (2) */

/*EASY q2
function dividesEvenly(a,b)
{
  if (a%b===0)
  {
console.log('true')
  }
  else{
console.log('false')  }
}
dividesEvenly(98,7)
dividesEvenly (85, 4)
*/
/*EASY q3
function charCount(a,b)
{let sum=0
 for(let i=0;i<b.length;i++){
   if (a===b[i]){
     sum=sum+1;
   }
 }
 console.log(sum)
}
charCount("a","edabit")
charCount ("c", "Chamber of secrets") 
charCount ("b", "big fat bubble")
*/

/*EASY q4
function addUp(a)
{
  let sum=0
  for (let i=1;i<=a;i++)
  {
    sum=sum+i
  }
console.log(sum)
}
addUp(4)
addUp (13)
addUp (600) 
*/

/*EASY q5
function replaceVowel(a)
{b="aeiou";
let st="";
var c=0
for(let i=0;i<a.length;i++){
  let c =b.indexOf(a[i])+1;
  if(c>0)
  {
    st=st+c;
  }
  else{
    st=st+a[i];
  }
}
console.log(st)
}
replaceVowel("karachi")
replaceVowel("chembur") 
replaceVowel("khandbari")
*/

/*MEDIUM Q1
function specialReverse(a,b){
  let _a=a.split(" ");
for (let i=0;i<_a.length;i++)
{
  if(_a[i].indexOf(b)==0){
    _a[i]=_a[i].split("").reverse().join("");
  }
}
console.log(_a.join(" "))

}
specialReverse("word searches are super fun","s")
specialReverse ("first man to walk on the moon", "m")
specialReverse ("peter piper picked pickled peppers", "p")
*/
/* MEDIUM Q2
function testJackpot(a){
  const k=a[0]
  let sum=0
  for (let i=0;i<4;i++){
    if(a[i]==k){
      sum=sum+1
    }
  }
  if(sum==4){
console.log("true")
  }
}
testJackpot(["@","@","@","@"])
testJackpot (["abc", "abc", "abc", "abc"]) 
testJackpot (["SS", "SS", "SS", "SS"])
testJackpot (["&&", "&", "&&&", "&&&&"]) 
testJackpot (["SS", "SS", "SS", "Ss"])
*/
/*MEDIUM Q3
function removeDup(array) {
  let x = {};
  array.forEach(function(i) {
    if(!x[i]) {
      x[i] = true
    }
  })
  return Object.keys(x)
};

console.log(removeDup([1,0,1,0]))
removeDups (["The", "big", "cat"]) 
removeDups (["John", "Taylor", "John"])
*/
/* HARD Q1
function realType(a)
{ arr=[]
  if(typeof a==typeof 1){
  console.log(typeof a)
}
else if(typeof a==typeof arr){
  console.log("Array")
}
else if(typeof a==typeof "su"){
  console.log(typeof a)
}
else if(typeof a==typeof null){
  console.log(typeof a)
}
else{
console.log(typeof a)
}
}
realType (1) 
realType("a") 
realType(true) 
realType ([]) 
realType(null) */