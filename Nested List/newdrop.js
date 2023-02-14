//create first node
const section = document.querySelector(".section");
const form = document.querySelector(".form-category");
const input_text = document.querySelector("#input");
const mainul = document.querySelector(".mainul");
form.addEventListener("submit", (e) => {
    e.preventDefault();   
    const inputValue = input_text.value;
    const newul = document.createElement("ul");
    newul.setAttribute("id","ul")
    newul.setAttribute("ondragstart","dragStart(event)")
    newul.setAttribute("draggable","true")
    newul.setAttribute("ondragover","dragOver(event)")
    const innerLiHTML = `    <li>
    
               <h5 class="" >${inputValue}</h5>
                <input id="text-category"  class="text-category"/>
                <div class="btn"> 
                <button type="button" class="btn btn-success btn-sm" onclick="libutton()">AddChild</button>
                <button type="button" class="btn btn-success btn-sm" onclick="addSibling()">AddSibling</button>
                <button type="button" class="btn btn-primary btn-sm" onclick="edit()">Edit</button>
                <button type="button" class="btn btn-danger btn-sm" onclick="del()">Delete</button>
                </div>
 
                </li>      `;

    newul.innerHTML = innerLiHTML;
    mainul.append(newul);

    //localstorage
    let task=localStorage.getItem("parent")
    let myobj=[]
    myobj=JSON.parse(task)
    myobj.push({"parent":inputValue})
    // Object.assign(myobj,{"parent":inputValue})
    console.log(myobj)
    // maincat = JSON.parse(task);
    // maincat.push(inputValue)
    localStorage.setItem("parent",JSON.stringify(myobj))
    input_text.value = "";

});
//add next child
function libutton() {
    
    let inputValue = event.target.parentNode.parentNode.children[1].value
    // console.log(inputval)
    // const inputValue = newinputval;
    // console.log(inputValue)
    const newLi = document.createElement("li");
    newLi.setAttribute("ondragstart","dragStart(event)")
    newLi.setAttribute("draggable","true")
    newLi.setAttribute("ondragover","dragOver(event)")
    const innerLiHTML = `
    <div>
    <h5 class="text-category d-flex justify-content-center">${inputValue}</h5>
  
  <input id="text-category" class="text-category"/>
                
                <div class="btn"> 
                <button type="button" class="btn btn-success btn-sm" onclick="libutton()">Add</button>
                <button type="button" class="btn btn-danger btn-sm" onclick="del()">Delete</button>
                <button type="button" class="btn btn-primary btn-sm" onclick="edit()">Edit</button>
                </div>
      </div>      
           `;

    newLi.innerHTML = innerLiHTML;
    let li = event.target.parentNode.parentNode;
    li.appendChild(newLi);
    event.target.parentNode.parentNode.children[1].value = "";

   //localstorage
    parenthead=event.target.parentNode.parentNode.children[0].innerHTML
    let task=localStorage.getItem("parent")
    myobj = JSON.parse(task);
    myobj.push({[parenthead]:inputValue})
    localStorage.setItem("parent",JSON.stringify(myobj))
}
//add sibling
function addSibling(){
    const inputValue = event.target.parentNode.parentNode.children[1];
    console.log(inputValue)
    const newul = document.createElement("ul");
    newul.setAttribute("id","ul")
    newul.setAttribute("ondragstart","dragStart(event)")
    newul.setAttribute("draggable","true")
    newul.setAttribute("ondragover","dragOver(event)")
    const innerLiHTML = `    <li>
                <h5 class=" " >${inputValue.value}</h5>
                <input id="text-category"  class="text-category"/>
                <div class="btn"> 
                <button type="button" class="btn btn-success  btn-sm" onclick="libutton()">AddChild</button>
                <button type="button" class="btn btn-success btn-sm" onclick="addSibling()">AddSibling</button>
                <button type="button" class="btn btn-primary btn-sm" onclick="edit()">Edit</button>
                <button type="button" class="btn btn-danger btn-sm" onclick="del()">Delete</button>
                </div>
                </li>      `;

    newul.innerHTML = innerLiHTML;
    let sib = event.target.parentNode.parentNode.parentNode;
    sib.append(newul);
    inputValue.value = "";
}
//delete button
function del() {
    let ul = event.target.parentNode.parentNode.parentNode;
    // console.log(ul)
    ul.remove();
    let task=localStorage.getItem("parent")
    myobj =[];
    myobj = JSON.parse(task);
    
    localStorage.setItem("parent",JSON.stringify(myobj))

// console.log(maincat)
}
//drag and drop
let div;
function dragStart(event) {
    div = event.target;
}
function dragOver(event) {
    event.preventDefault();
    let over = event.target.parentNode.parentNode;
    over.append(div);
}


function edit(){
    
    let newEditNode = event.target.parentNode.parentNode.children;
    if(newEditNode[1].value.trim()!=""){
        let changeSpan= newEditNode[0];
        changeSpan.innerHTML = newEditNode[1].value;
        input_text.value = "";
        newEditNode[1].value="";
        
    }

  }

  function deleteAll(){
    
   
    let task=localStorage.getItem("parent")
    myobj = JSON.parse(task);
myobj=[]
    localStorage.setItem("parent",JSON.stringify(myobj))
    document.getElementsByClassName('mainul')
    mainul.innerHTML=""
  }


  function displayData(){




  }

