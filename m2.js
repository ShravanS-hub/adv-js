let myAr="Dev";
console.log(myAr&&myAr.length?true:false);
console.log(myAr?.length?true:false);
console.log(Array.isArray(myAr));
myAr=[{id:1}];
console.log(Array.isArray(myAr)&&myAr.length?true:false);
