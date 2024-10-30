// Description: Create a simple to-do list where users can add, delete, 
// and mark tasks as complete.
const todo=[]
// const para='';
document.querySelector('.add-button').addEventListener('click',function(){
    const text=document.querySelector('#text-js').value
    // console.log(text)
    if(text){
        todo.push(text);
        document.querySelector('#text-js').value='';

        const listItem=document.createElement('li');
        listItem.className='list-content';

        listItem.innerHTML=
        `
        ${text}<button class="delete-btn delete">DELETE</button>`;
        document.querySelector('.list').appendChild(listItem)

        const deleteButtons=listItem.querySelector('.delete');
        deleteButtons.addEventListener('click', function(){
            listItem.remove();
            const index=todo.indexOf(text);
            if(index>-1){
                todo.splice(index,1);
            }
            
        });
    }
    
    console.log(todo)
})


// const para=document.querySelector('.para').innerHTML=todo;