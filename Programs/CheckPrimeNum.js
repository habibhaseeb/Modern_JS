// We make a program to check prime numbers or not.
let lowerNumber = parseInt(prompt('Enter the lower number:..'));
let higherNumber = parseInt(prompt('Enter the Higher number:..'));

// This loop check the number from users input //
for (let i = lowerNumber; i < higherNumber; i++) {
    var value = true;
    // this check the division and remindar
    for(j = 2; j < i; j++)
    {
        if(i % j == 0)

          {

            value = false;
            break;

          }
          
    }
    // this line tells that if the number is greater than 1 or not divisible by other numbers 
    // is called prime numbers so it will printed that number..
    if(i > 1 && value == true)
     {
        console.log(i);
     }
};