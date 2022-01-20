'use strict';
const assert = require('assert');
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



const hangMan = () => {
    return 1+2 
}




// ----------- test ----------- ----------- test ----------- ----------- test ----------- ----------- test -----------
const getPrompt = () => {
      rl.question('word', (answer) => {
        console.log(answer);
        getPrompt();
      });
    }


if (typeof describe === 'function'){
    // describe('BankAccount', function(){
    //     it("Should have an account number, owner's name and a transaction list", function(){
    //         const bankAccount1 = new BankAccount('1234567', 'Michael H.'); 
    //         assert.equal(bankAccount1.accountNumber, '1234567');
    //         assert.equal(bankAccount1.owner, 'Michael H.')
    //         assert.equal(bankAccount1.transactions.length, 0)
    //         assert.equal(bankAccount1.balance(), 0)
    //     })
    // })
    describe('hangMan', function(){
        it('should add 2 nums', function(){
            assert.equal(hangMan(), 3)
        })
    })


}else {
      getPrompt();
}