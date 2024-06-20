let sentence="I am a boy and my name is Soubhagya"
sentence=sentence.toLowerCase()
let a=0,e=0,i=0,o=0,u=0
for(let j in sentence)//using for in loop (or) for(let char of sentence )
    {
        let char=sentence[j]//if you use for of loop then there is no need to take the another variable
        if(char=='a')
            a++
        else if(char=='e')
            e++
        else if(char=='i')
            i++
        else if(char=='o')
            o++
        else if(char=='u')
            u++
    }
    console.log(`The Vowel 'a' appeared ${a} times`)
    console.log(`The Vowel 'e' appeared ${e} times`)
    console.log(`The Vowel 'i' appeared ${i} times`)
    console.log(`The Vowel 'o' appeared ${o} times`)
    console.log(`The Vowel 'u' appeared ${u} times`)