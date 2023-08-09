const input = document.querySelector(".input"); 
const addBtn = document.querySelector(".add");
const alertText = document.querySelector('small');
const ul = document.getElementById('todos');





const  addItem = () => {
    if(input.value === ''){
        alertText.style.display = "block";
    }else { 
        alertText.style.display = "none";
        createLiElement(input.value);
    }     
}

const completed = (e)=>{
   const parent = e.target.parentElement;
   const thisP = parent.firstElementChild ;
   thisP.classList.toggle('completed') 
}

const deleteItem = (e) => {
    ul.removeChild(e.target.parentElement)
}

const createLiElement= (text)=>{
    
    // create complete button 
    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete';
    completeBtn.innerText = "Complete";
    completeBtn.addEventListener('click',completed);
    completeBtn.style.marginRight = '5px';

    // create delete button 

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener('click',deleteItem);

    // create paragrafh 

    const parag = document.createElement('p');
    parag.innerText = text

    // create list item 
    const li = document.createElement('li');
    li.appendChild(parag);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    

    ul.appendChild(li);

}





addBtn.addEventListener('click',addItem);