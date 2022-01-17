const input = document.querySelector('.text');
const btn = document.querySelector('.submit');
let ul = document.querySelector('ul');



//Event Listeners
btn.addEventListener('click', createTodo);

//Functions
//creating a todo
function createTodo()
{
    if(input.value === "")
    {
        alert('Input cannot be empty.')
        return false;
    } 
    else
    {
        //First Create a div to hold the list items. The div will have a class of ListContainer
        const listDiv = document.createElement('div');
        listDiv.classList.add('.list-container');

        //next place the div to the ul
        ul.appendChild(listDiv);

        //Then create an li and append it to the ul
        const listItems = document.createElement('li');
        ul.appendChild(listItems);
        listItems.innerText = input.value;
        setLS();
        input.value = '';
    }
}

//setting tasks to local storage
function setLS()
{
  
  //Create an Array of tasks and parse them as a string so tasks aren't getting replaced. 

  //first check to see if there is an existing task in the local storage. If there is, getItem
let tasks;
  if(localStorage.getItem('tasks')=== null)
 {
    tasks = []; //If nothing exists, create an empty array. JSON is needed to parse an array
 } else

 {
     tasks = JSON.parse(localStorage.getItem('tasks'));
 }

      tasks.push(input.value); //Add each value to the array

    localStorage.setItem("tasks", JSON.stringify(tasks)); //converts the value to a string. 

        tasks.forEach(function(task) //Loops through each list.
    {
       ul.innerHTML = tasks; 
    });

}





