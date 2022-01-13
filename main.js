const input = document.querySelector('.text');
const btn = document.querySelector('.submit');
const ul = document.querySelector('ul');
//Event Listeners
btn.addEventListener('click', createTodo);

function createTodo()
{
    if(input.value === "")
    {
        alert('Input cannot be empty.')
        return false;
    } else
    {
        //First Create a div to hold the list items. The div will have a class of ListContainer
        const listDiv = document.createElement('div');
        listDiv.classList.add('.list-container');

        //next place the div to the ul
        ul.appendChild(listDiv);

        //Then create an li and append it to the ul
        const listItems = document.createElement('li');
        ul.appendChild(listItems);
        //listItems.innerText = 'HelloWorld';
        listItems.innerText = input.value;
        input.value = '';
    }
}

