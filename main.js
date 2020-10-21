// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

// CHALLENGE 1
function createFunction() {
  function tmp () {
    console.log(`hello`)
  }
  return tmp;
}

/*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1(); // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
  
  function tmp() {
    console.log(input);
  }

  return tmp;
}

/*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');


// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
willCounter(); // 1
willCounter(); // 2
willCounter(); // 3

jasCounter(); // 1
willCounter(); // 4


function addByX(x) {
  
  function tmp(input) {
    console.log(`${input + x}`);
    return input + x;
  }
  
  return tmp;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5

const addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9


// CHALLENGE 4
function once(func) {
  let result;
  function tmp(input) {
    if(result) return result;
    result = func(input);
		return result;
  }
  
  return tmp;
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
function after(count, func) {
	let counter = 1;
  
  function exec(input) {
    if(counter >= count) func(input);
    counter++;
  }
  
  return exec;
}

// /*** Uncomment these to check your work! ***/
const called = function() { console.log('hello') };
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed


// CHALLENGE 6
function delay(func, wait, ...params) {
  setTimeout(func(...params), wait);    
}


// CHALLENGE 7
function rollCall(names) {
  
  let it = 0;
  function roll() {
    if(it == names.length) {
      console.log(`Everyone accounted for`);
      return;
    }
    console.log(names[it++]);
  }
  
  return roll;
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'
rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8
function saveOutput(func, magicWord) {
  
  let values = {};
  function magic(input) {
    if(input == magicWord) {
			return JSON.stringify(values);
    } else {
			values[input] = func(input);
    	return values[input];
    }
  }

  return magic;
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
function cycleIterator(array) {
  let it = 0;
  function tmp() {
    return array[it++ % array.length];
  }
  
  return tmp;
}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'


// CHALLENGE 10
function defineFirstArg(func, arg) {
  
  function tmp(...params) {
    return func(arg, ...params);
  }
  
  return tmp;
}

// /*** Uncomment these to check your work! ***/
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15


// CHALLENGE 11
function dateStamp(func) {
  
  function tmp(...params) {
    
    return {
      date: new Date().toString(),
      output: func(...params)
    }
  }
  
  return tmp;
}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
function censor() {
  const censorMap = {};
  function tmp(...params) {
    if(params.length == 2) {
      censorMap[params[0]] = params[1];
    } else {
      let str = params[0];
      for(const [key, value] of Object.entries(censorMap)) {
				str = str.replace(key, value);
      }
      return str;
    }
  }
  
  return tmp;
}

// /*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13
function createSecretHolder(secret) {
  
	let mySecret = secret;
  
  const obj = {
    getSecret: function() { return mySecret; },
    setSecret: function(newSecret) { mySecret = newSecret; },
  }
  
  return obj;
}

// /*** Uncomment these to check your work! ***/
const obj = createSecretHolder(5)
console.log(obj.getSecret()) // => returns 5
console.log(obj.setSecret(2))
console.log(obj.getSecret()) // => returns 2


// CHALLENGE 14
function callTimes() {
  
  let counter = 0;
  
  function tmp() {
    console.log(++counter);
  }
  
  return tmp;
}

// /*** Uncomment these to check your work! ***/
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
myNewFunc1(); // => 1
myNewFunc1(); // => 2
myNewFunc2(); // => 1
myNewFunc2(); // => 2


// CHALLENGE 15
function russianRoulette(num) {
  
  let counter = 0;
  function tmp() {
    counter++;
    if(counter < num) {
      return `click`;
    }
    if(counter == num) {
      return `bang`;
    }
    return `reload to play again`;
  }
  
  return tmp;

}

// /*** Uncomment these to check your work! ***/
const play = russianRoulette(3);
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'bang'
console.log(play()); // => should log 'reload to play again'
console.log(play()); // => should log 'reload to play again'


// CHALLENGE 16
function average(input) {

  let avg = 0;
  let counter = 0;
  
  function tmp(input) {
    if(input) {
      counter++;
      avg = (avg*(counter - 1) + input)/counter
    }
    return avg;
  }
  
  return tmp;
}

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8


// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  
  function tmp(cb) {
    for(let arr of arrOfTests) {
      if(cb(arr[0]) != arr[1]) {
        return false;
      }
    }
    return true;
  }
  
  return tmp;
}

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = str => str.toUpperCase();
const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


// CHALLENGE 18
function makeHistory(limit) {
  
  const arr = []

  function tmp(input) {
    if(input == `undo`) {
      if(arr.length == 0) return `nothing to undo`;
      return `${arr.pop()} undone`;
    }
    if(arr.length <= limit) {
      if(arr.length == limit) arr.shift();
      arr.push(input);
      return `${input} done`;
    }
  }
  
  return tmp;
}

// /*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
console.log(myActions('jump')); // => should log 'jump done'
console.log(myActions('undo')); // => should log 'jump undone'
console.log(myActions('walk')); // => should log 'walk done'
console.log(myActions('code')); // => should log 'code done'
console.log(myActions('pose')); // => should log 'pose done'
console.log(myActions('undo')); // => should log 'pose undone'
console.log(myActions('undo')); // => should log 'code undone'
console.log(myActions('undo')); // => should log 'nothing to undo'


// CHALLENGE 19
function blackjack(array) {
  
  function dealer(...args) {
    
    let callCount = 0;
    let myCards = 0;
    let isBusted = false;
    function player() {
      if(!isBusted && array.length > 0) {
        if(callCount++ == 0) {
          myCards = args[0] + args[1];
        	return myCards;
      	} else {
          myCards += array[0];
          array.shift();
          isBusted = myCards > 21;
          return isBusted ? `bust` : myCards;
      	}
      }
      return `you are done`;
    }
    
    return player;
  }
  
  return dealer;
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

/*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
const i_TOO_like_to_live_dangerously = deal(2, 2);
console.log(i_TOO_like_to_live_dangerously()); // => should log 4
console.log(i_TOO_like_to_live_dangerously()); // => should log 15
console.log(i_TOO_like_to_live_dangerously()); // => should log 19
console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
const i_ALSO_like_to_live_dangerously = deal(3, 7);
console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
