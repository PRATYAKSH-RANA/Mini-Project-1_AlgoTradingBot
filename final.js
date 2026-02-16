/* 
given balance is 1000, stk price= 100 holding=0 
for update i used a maths.floor and maths.random->>> maths.random prints value from 0 to 1 with decimal value and then we mul it with 41 because of numbers of digits bet 80 and 120 is 41 including 80 and now maths.floor is basically using to remove the decimal and round off the values and thenw it will count 0 to 40 now we shift from 0 to 40 and then 40+80=120 so we have to add 80 for shift to 120 now its done
made an another function now used if else statement iff price is less than 90 and you have enough money to buy so we buy and if it is greater than 120 and we have holding so we sell it for profit and if it is bet 80 to 120 so we dont buy and sell and will be hold
now 
*/

// Initial setup
let balance = 1000; //balance is given to 1000
let stockPrice = 100; //stock price is 100
let holdings = 0; //holding is 0

// Update stock price (80–120)
function updatePrice() {
    stockPrice = Math.floor(Math.random() * (120 - 80 + 1)) + 80; //40+1=41  
}

// Decide action
function decideAction(price) {
    if (price < 90 && balance >= price) {
        return "BUY";
    } else if (price > 120 && holdings > 0) {
        return "SELL";
    } else {
        return "HOLD";
    }
}

// Execute trade
function trade(action) {
    if (action === "BUY" && balance >= stockPrice) {
        balance -= stockPrice; //money goes down
        holdings += 1; //and the stock ups
    } else if (action === "SELL" && holdings > 0) {
        balance += stockPrice; //money up
        holdings -= 1;  //stock down
    }
}

// Run simulation (10 rounds)
let round = 1;

while (round <= 10) {
    updatePrice();  //change the stock evry time
    let action = decideAction(stockPrice); //deceide what to do
    trade(action);  //acc to upper part dec holdings

    console.log(
        "Round " + round +
        ": Stock price = " + stockPrice +
        " → Action = " + action +
        " → Balance = " + balance +
        ", Holdings = " + holdings
    );

    round++;
}



