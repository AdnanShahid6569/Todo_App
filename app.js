var ulElement = document.getElementById("List");
function addItem(){

    var todoInput = document.getElementById("addInput");
    if(todoInput.value){
    // console.log(todoInput.value);

    var liElement = document.createElement("li");

    var liText = document.createTextNode(todoInput.value);

    liElement.appendChild(liText);

    ulElement.appendChild(liElement);


    // delete button Create

    var deleteBtncreate = document.createElement("button");

    var btnText = document.createTextNode("Delete");

    deleteBtncreate.appendChild(btnText);

    liElement.append(deleteBtncreate)

    deleteBtncreate.setAttribute("onclick","deleteSingleitem(this)");

    // Edit Button Create

    var editBtncreate = document.createElement("button");

    var btnText = document.createTextNode("Edit");

    editBtncreate.appendChild(btnText);

    liElement.append(editBtncreate)

    editBtncreate.setAttribute("onclick","edititem(this)");
}
else{
    alert("Please Input Field..")
}

    
}
function allDelete()
{
    ulElement.innerHTML = "";
}
function deleteSingleitem(e){

 e.parentNode.remove();
   
}

function edititem(e){

    var opdateVal = prompt("Enter Update Value...");

    e.parentNode.firstChild.nodeValue = opdateVal;
      
   }