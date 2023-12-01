console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item){
    basket.push(item);
    if (isFull() == false){
        return true;
    }
    else{
        return false;
    }
}

console.log(addItem('fortnite'));
addItem('test');
function listItems(){
    for (items of basket){
        console.log(items);
    }
}

console.log(listItems());

 function empty(){
 basket.length = 0;
 }

//function empty(){
    //while (basket.length > 0){
    //    basket.pop();
  //  }
//}

console.log(basket);


function isFull(){
    if (basket.length < maxItems){
        return false;
    }
    else{
        return true;
    }
}

empty();

addItem(1);
addItem(2);

console.log(basket);

if ( basket.indexOf(1) === 0){
    console.log('One is present.');
}
else{
    console.log('Wrong result');
}


function removeItem(item){
    if (basket.indexOf(item) > -1){
        return basket.splice(item - 1, 1);
    }
    else{
        return null;
    }
}

removeItem(1);
console.log(basket);


// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
