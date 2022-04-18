    
    // 1. Write a JavaScript function that reverse a number.
    const x = 32243;
    const x_reverse = parseFloat(x.toString().split('').reverse().join(''));

    document.getElementById('first').innerHTML = x_reverse;

    // 2. Write a JavaScript function that checks whether a passed string is palindrome or not?

    function palindrome_checker() {
        let palindrome = document.getElementById('palindrome_input').value;
        
        let reverse = palindrome.split('').reverse().join('');

        if( palindrome == reverse ){
            document.getElementById('second').style.color = 'rgb(5, 142, 1)'
            return document.getElementById('second').innerHTML = 'Palindrome !'
        }
        else {
            document.getElementById('second').style.color = 'red'
            return document.getElementById('second').innerHTML = 'Not palindrome !'
        }
    }

    //3. Write a JavaScript function that generates all combinations of a string.

    function combinator() {
        let combinator_input = document.getElementById('combination_input').value;
        
        let combinations = [];

        for ( i = 0; i < combinator_input.length; i++ ) {
            for ( j = i + 1; j < combinator_input.length + 1; j++ ){
                combinations.push(combinator_input.slice(i,j))
            }
        }
        return document.getElementById('third').innerHTML = combinations;
    }

    // 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.

    function alphabetic_order() {
        let alphabetic_input = document.getElementById('alphabetic_input').value.split('').sort().join('');
        

        return document.getElementById('forth').innerHTML = alphabetic_input;
    }

    // 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
    
    function uppercase() {

        let array_1 = document.getElementById('uppercase_input').value.split(' ');
        const new_array = [];

        
        for ( let x = 0; x < array_1.length; x++ ) {
            new_array.push(array_1[x].charAt(0).toUpperCase() + array_1[x].slice(1));
        }

        return document.getElementById('fifth').innerHTML = new_array.join(' ');
    }

    // 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 

    function longest_search() {

        let array_2 = document.getElementById('finder_input').value.split(' ');
        let max = array_2[0];

        for( let y = 0; y < array_2.length; y++ ) {
            if( max.length < array_2[y].length) {
                max = array_2[y];
            }
            else {
                max = max;
            }
        }


        return document.getElementById('sixth').innerHTML = max;
    }

        // 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 

        function wovel_count() {

            let counts_input = document.getElementById('counts_input').value;
            const all_vovels = 'aeiouAEIOU'
            let vovels = 0;

            for( let c = 0; c < counts_input.length; c++ ) {
                if( all_vovels.indexOf(counts_input[c]) !== -1 ) {
                    vovels = vovels + 1;
                }
            }
    
            return document.getElementById('seventh').innerHTML = vovels;
        }

        
        // 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 

        function prime_checker() {

            let counts_input = parseInt(document.getElementById('prime_input').value);
            let primes = '';

            if( counts_input === 1 ) {
                primes = 'not prime';
                document.getElementById('eights').style.color = 'red';
                return document.getElementById('eights').innerHTML = primes;
            }
            else if ( counts_input === 2 ) {
                primes = 'prime';
                document.getElementById('eights').style.color = 'rgb(5, 142, 1)';
                return document.getElementById('eights').innerHTML = primes;
            }
            else { 

                for( let n = 2; n < counts_input; n++ ){
                    if( counts_input % n === 0)
                    {
                        
                        document.getElementById('eights').style.color = 'red';
                        primes = 'not prime';
                        return document.getElementById('eights').innerHTML = primes;
                    }

                }
                
                document.getElementById('eights').style.color = 'rgb(5, 142, 1)';
                primes = 'prime'
                return document.getElementById('eights').innerHTML = primes;
            }

        }