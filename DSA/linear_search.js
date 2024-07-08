import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function linear_Search() {
    rl.question("Enter the size of the array: ", (size) => 
        {
        let array = [];
        //size = parseInt(size);

        function getElements(index)
        {
            if (index < size) 
                {
                rl.question(`Enter element ${index + 1}: `, (element) => {
                    array.push(element);
                    getElements(index + 1);
                });
            } 
            else 
            {
                rl.question("Enter the element to search: ", (searchElement) => {
                    let found = false;
                    for (let i in array) 
                    {
                        if (array[i] === searchElement) 
                        {
                            console.log(`Element ${searchElement} found at index ${i}`);
                            found = true;
                            break;
                        }
                    }
                    if (!found)
                        console.log(`Element ${searchElement} not found in the array`);
                    rl.close();
                })
            }
        }

        console.log(`Enter those ${size} elements:`);
        getElements(0);
    })
}

linear_Search();
