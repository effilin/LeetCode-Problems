

function reverseNumber(number) {
    const numString = String(number);
    let results = [];
    
    for (let i=0; i<=numString.length; i++) {
        let char = numString.at(i);
        results.unshift(char);
    }
    
    const reversedNumber = results.join('');
    return reversedNumber;
  }
