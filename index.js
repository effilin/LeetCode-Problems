// problem 1768 

var mergeAlternately = function(word1, word2) {
    let zippered = '';
    const w1 = word1.length;
    const w2 = word2.length; 
    let x = w1 >= w2? w1 : w2 ;

    console.log(`step1 word1 length:${w1} word2 length: ${w2}`)

    for (i = 0; i <= x; i++) {

       let myLetter= word1.charAt(i)

       if (myLetter === null || undefined) {
        return null
       } else {
       zippered += myLetter;
       };

       let nextLetter= word2.charAt(i)

        if (nextLetter === null || undefined) {
        return null
       }else{
       zippered += nextLetter;
    }};
   
    console.log(`the result is ${zippered}`)
    return zippered
};

// mergeAlternately( 'abc', 'qrs');

/* problem #6 https://leetcode.com/problems/zigzag-conversion/
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
        return s
    };
    const rows = new Array(numRows).fill().map(() => []);
    let dir = 1;
    let rowNumber = 0;

    
    for (i=0; i <= s.length; i++) {
        let myLetter = s.charAt(i);
        rows[rowNumber].push(myLetter)

        if (dir === 1) {
        rowNumber ++
            if ( (rowNumber - 1) === numRows) {
                dir = -1;
            }
        }
        if (dir === -1) {
            rowNumber -= 1;
            if (rowNumber === 0) {
                dir = 1;
            }
        }
    }
        console.log(rows)

    };

    
//convert("PAYPALISHIRING", 3);

var searchRange = function(nums, target) {
    
};
