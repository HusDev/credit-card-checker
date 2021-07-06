/*  Intro
	1. American Express
		a. 15 digits, starts with 34, 37
	2. Master card 
	 	a. 16 digits, starts with 22, 51, 52, 53, 54, and 55   
	3. VISA card
		a. 13, 16 digits, starts with digit 4 
*/

/* Validation (based on Luhn’s Algorithm)
	Checksum 
	1. Multiply every other digit by 2, starting  with second-to-last-digit.
	2. Add those products' digits together.
	3. Add the sum to the sum of the digits that weren't multiplied by 2.
	4. If the total's last digit is 0, number is valid!

	Ex: 4003600000000014
	(4*2) + (0*2) + (6*2 = 12 => 1+2) + (0*2) + (0*2) + (0*2) + (0*2) + (1*2) = 13
	(13) + 0 + 3 + 0 + 0 + 0 + 0 + 0 + 4 = 20
	Last digit of the 20 is Zero. So, the credit card number is valid.
*/

export const sumDigits = (number) => {
  let sum = 0;
  while (number != 0) {
    sum = sum + (number % 10);
    number = Math.floor(number / 10);
  }
  return sum;
};

export const isValid = (creditNumber) => {
  // vars
  let length = creditNumber.length;
  let secondToLast = 0;
  let firstToSecondLast = 0;
  let checksum;

  // verification on the length
  if (
    !(length === 13 || length === 15 || length === 16) ||
    isNaN(creditNumber) 
  ) {
    return false;
  }

  //  Luhn’s Algorithm
  for (let index = 0; index < length; index++) {
    if (index % 2 == 0) {
      firstToSecondLast =
        firstToSecondLast + sumDigits(parseInt(creditNumber[index]) * 2);
    } else {
      secondToLast += parseInt(creditNumber[index]);
    }
  }
  checksum = secondToLast + firstToSecondLast;
  return checksum % 2 == 0 ? true : false;
};

export const getCreditType = (creditNumber) => {
  if (creditNumber[0] === "4") {
    return "VISA";
  } else if (["34", "37"].includes(creditNumber.slice(0, 2))) {
    return "AMEX";
  } else if (
    ["22", "51", "52", "53", "54", "55"].includes(creditNumber.slice(0, 2))
  ) {
    return "MASTERCARD";
  }
  return "INVALID";
};
