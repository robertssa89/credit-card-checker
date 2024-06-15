// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

const validateCred = arrayOfCardNumbers => {
  // store last number of the array  
  const lastNumber = arrayOfCardNumbers[arrayOfCardNumbers.length - 1];

  // create a new array copy
  const copyArray = [];
  for (let i = arrayOfCardNumbers.length - 2; i >= 0 ; i--) {
    copyArray[i] = arrayOfCardNumbers[i];
  };

  //reverse the copied array
  copyArray.reverse();

  //use .map() to double every other value of the copied array (values that have an even index number: index % 2 = 0), subract 9 if over 10
  const doubled = copyArray.map((value, index) => { 
    if (index % 2 === 0) {
        if (value * 2 >= 10) {
          return (value * 2) - 9;
        } else return (value * 2);
    } else {
        return value;
    }
  });
  
  // use .reduce() to add all the numbers including the last digit of the original array 
  const checkNumber = doubled.reduce((accumulator, currentValue) => 
    accumulator + currentValue, 0,
  ) + lastNumber;

  // if checkNUmber % 10 = 0, return true, otherwise false
  return checkNumber % 10 === 0 ? true : false;
};

const findInvalidCards = arrayOfCards => {
    
    // create new array of invalid cc numbers using .filter()
    const invalidCards = arrayOfCards.filter(card => validateCred(card) === false);
    return invalidCards;
};

//console.log(findInvalidCards(batch));

// create array of card companies that issued invalid card numbers using switch statement
const idInvalidCardCompanies = arrayOfInvalidCards => {
    const cardCompanies = [];
    arrayOfInvalidCards.forEach(card => {
            switch (card[0]) {
                case 3:
                    if (!cardCompanies.includes('Amex')) {
                        cardCompanies.push('Amex');
                    };
                    break;
                case 4:
                    if (!cardCompanies.includes('Visa')) {
                        cardCompanies.push('Visa');
                    };
                    break;
                case 5:
                    if (!cardCompanies.includes('Mastercard')) {
                        cardCompanies.push('Mastercard');
                    };
                    break;
                case 6:
                    if (!cardCompanies.includes('Discover')) {
                        cardCompanies.push('Discover');
                    };
                    break;
                default:
                    console.log('Company not found');
                    break;
            };
        })

        return cardCompanies;
    };

//console.log(idInvalidCardCompanies(batch));











