/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.compute = (req, res) => {

  let num = req.body.compute;
  let result;

  function fiboArray(num) {
    let index = 0;
    let fibNumbers = [];
    let memo = {};
    let fibNum;

    function fib(n) {
      if (n in memo) { 
        return memo[n] 
      } else { 
          if (n <= 1) { 
            memo[n] = n 
          } else { 
            memo[n] = fib(n - 1) + fib(n - 2) 
          } 
          return memo[n]
      }
    }

    do {
      fibNum = fib(index);
      fibNumbers.push(fibNum);
      index++;
    } while (fibNum <= num) 

    return fibNumbers.slice(0, fibNumbers.length - 1);
  }

  function isOdd(num) { 
    return num % 2;
  }

  function sumOdd(numArray) {
    let sum = 0;
    for (var i = 0; i < numArray.length; i++) {		
      if ( isOdd( numArray[i] ) ) {
        sum += numArray[i];
      }				
    }
    return sum;
  }

    
  if (Number.isInteger(num)) {
    let fibNumbers = fiboArray(num);
    result = sumOdd(fibNumbers);

  } else {
    result = 'Wrong format! Provided value is not an integer';
  }

  res.status(200).send({ "result": result });
};
