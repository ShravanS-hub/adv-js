let x=1;

const parentFunction=()=>{
    let myValue=2;
    console.log(x);
    console.log(myValue);

    const childFunction=()=>{
        console.log(x+=5);
        console.log(myValue+=1);

    }
    return childFunction;
}

//
const result= parentFunction();
console.log(result);

const credits=((num)=>{
    let credits=num;
    console.log(`initial credits value: ${credits}`);
    return()=>{
        credits-=1;
        if(credits>0) console.log(`playing game,${credits} credits remaining`);
        if(credits<=0) console.log('not enough credits');
    }
})(3);

credits();
credits();
credits();

//
const person={
    alive:true
}
const musician={
    plays:true
}

musician.__proto__=person;
console.log(musician.plays);
console.log(musician.alive);

//
function Animal(species){
    this.species=species;
    this.eat=true;
}
Animal.prototype.walks=function(){
    return `A ${this.species} is walking`;

};
 const Bear=new Animal("beae");
 console.log(Bear.species);
 console.log(Bear.walks());

 console.log(Bear.__proto__);
 console.log(Bear.__proto__===Animal.prototype);
 console.log(Animal.prototype);
 console.log(Bear);

 //
 const fibonacciPos=(pos)=>{
    if(pos<=1) return pos;
    const seq = [0,1];
    for(let i=2;i<=pos;i++){
        const [nextToLast,last]=seq.slice(-2);
        seq.push(nextToLast+last);

    }
    return seq[pos];
 }

console.log(fibonacciPos(8));

//
const mySandwich=buildSandwich("Bacon")("Lettuce")("Tomato");
console.log(mySandwich);

const buildSammy=ingred1=>ingred2=>ingred3=>
    `${ingred1},${ingred2},${ingred3}`;

const mySammy=buildSammy("turkey")("cheese")("bread");
console.log(mySammy);

//
const pureAddToScoreHistory=(array,score,cloneFunc)=>{
 const newArray=cloneFunc(array);
 newArray.push(score);
 return newArray;
}

const pureScoreHistory=pureAddToScoreHistory(scoreArray,18,deepClone);
console.log(pureScoreHistory);
console.log(scoreArray);

//
let y=1;
const increment=()=>y+=1;
console.log(increment());
console.log(y);

//
const myArray=[1,2,3];
const addToArray=(array,data)=>{
    array.push(data);
    return array;
}
console.log(addToArray(myArray,4));
console.log(myArray);

//ex2
const pureIncrement=(num)=>num+=1;
console.log(pureIncrement(y));
console.log(y);

//
const inicrement=(()=>{
    let counter=0;
    console.log(counter);
    const credits=(num)=>console.log(`I have ${num} credit(s)`);
    return ()=>{counter++;credits(counter);}
})();
inicrement();  
inicrement();

class pizza{
    constructor(size,crust,sauce){
        this.size=size;
        this.crust=crust;
        this.sauce=sauce;
        this.toppings=[];
    }
    prepare(){console.log('Preparing...')}
    bake(){console.log('Baking...')}
    ready(){console.log('Ready!...')}

}
class stuffedCrustPizza extends pizza{
    stuff(){console.log('Stuffing the crust...')}
    butter(){console.log('Buttering the crust...')}
}

const myPizza=new stuffedButteredCrustPizza();
myPizza.stuff();
myPizza.butter();

const prepare=()=>{
    return{
        prepare:()=>console.log('Preparing..')
    }
}
const bake=()=>{
    return{
        bake:()=>console.log('Baking..')
    }
}
const toss=()=>{
    return{
        toss:()=>console.log('Tossing..')
    }
}
const ready=()=>{
    return{
        ready:()=>console.log('Ready!..')
    }
}

const createPizza=(size,crust,sauce)=>{
    const pizza={
        size:size,
        crust:crust,
        sauce:sauce,
        toppings:[]
    }
    return{
        ...pizza,
        ...prepare(),
        ...bake(),
        ...ready()
    }
}
const createSalad=(size,dressing)=>{
  
    return{
        size:size,
        dressing:dressing,
        ...prepare(),
        ...bake(),
        ...ready()
    }
}
const createStuffedButterCrustPizza=(pizza)=>{
  
    return{
       
        ...pizza(),
        ...stuff(),
        ...butter()
    }
}

const anotherPizza=createPizza("medium","thin","original");
const somebodysPizza=createStuffedButterCrustPizza(anotherPizza);


//
const extension='.css'
const extensionObj={
    '.css':'text/css',
    '.js':'text/javascript',
    '.jason':'application/json',
    '.jpg':'image/jpg',
    '.png':'image/png',
    '.txt':'text/plain'
}
const myMap=new Map();
myMap.set('.css','text/css')
myMap.set('.json','appliction/json');
console.log(myMap.get(extension)||'text/html')
console.log(extensionObj[extension])

//
let myArray1=[];
console.log(myArray1.length);

