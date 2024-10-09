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

mergeAlternately( 'abc', 'qrs');
