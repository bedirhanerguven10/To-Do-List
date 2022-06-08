let input = document.querySelector('.inputData');
let button = document.querySelector('.confirm');
// console.log("merh");


button.addEventListener('click', () => {
    if (input.value == '') {
        alert (`Please add a valid item`);
        input.focus();
    }else {
        addItem(input.value);
    }})


let addItem = (text) => {
    let item = document.createElement("div");
    let deleteCheckDiv = document.createElement("div") ;
    let checkIcon = document.createElement("i");
    let deleteIcon = document.createElement("i");
    let inputText = document.createElement("P");

    item.className = "item";
    inputText.textContent = text;

    checkIcon.className = "fa-solid fa-anchor";
    checkIcon.style.color = "black";
    checkIcon.addEventListener("click" , () => {
    inputText.classList.toggle("tryfirst");
    
    
    // inputText.style.textDecoration = "line-through";
    checkIcon.style.color = "blue";
    })
    deleteCheckDiv.appendChild(checkIcon);
    deleteIcon.className = "fa-solid fa-trash-can";
    deleteIcon.addEventListener("click" , () => {
    item.remove();
    })
    deleteCheckDiv.appendChild(deleteIcon);
    item.appendChild(inputText);
    item.appendChild(deleteCheckDiv);
    console.log(item);
    document.querySelector(".todo-list").appendChild(item);
    document.querySelector('.inputData').value = "";
    input.focus();
  
    }







