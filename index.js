function print(a)
{
    if(a>=1)
        {
        print(a-1)//Recursion: 10>9>8>7>6>5>4>3>2>1 after that if condition will become false.Now LIFO or FILO,that is 1 will be printed first
        console.log(a)
        }
}
print(10)
