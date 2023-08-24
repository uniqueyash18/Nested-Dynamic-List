//create first node
const section = document.querySelector(".section");
const form = document.querySelector(".form-category");
const input_text = document.querySelector("#input");
const mainul = document.querySelector(".mainul");
loadFromLocalStorage()
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
                <div class="btn"> 
                <button type="button" class="btn btn-success btn-sm" onclick="libutton()">AddChild</button>
                <button type="button" class="btn btn-success btn-sm" onclick="addSibling()">AddSibling</button>
                <button type="button" class="btn btn-danger btn-sm" onclick="del()">Delete</button>
                </div>
 
                </li>      `;

    newul.innerHTML = innerLiHTML;
    mainul.append(newul);
    saveToLocalStorage()
    input_text.value = "";

});
//add next child
function libutton() {
    let inputValue = event.target.parentNode.parentNode.children[1].value
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
    saveToLocalStorage()
    event.target.parentNode.parentNode.children[1].value = "";
}
//add sibling
function addSibling(){
    const inputValue = event.target.parentNode.parentNode.children[1];
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
    saveToLocalStorage()
    inputValue.value = "";
}
//delete button
function del() {
    let ul = event.target.parentNode.parentNode.parentNode;
    ul.remove();
    saveToLocalStorage()
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

  function deleteAll(){
    document.getElementsByClassName('mainul')
    mainul.innerHTML=""
    saveToLocalStorage()
  }

  function saveToLocalStorage() {
    const mainulHTML = mainul.innerHTML;
    localStorage.setItem('savedHTML', mainulHTML);
}

// Loading HTML from Local Storage
function loadFromLocalStorage() {
    const savedHTML = localStorage.getItem('savedHTML');
    if (savedHTML) {
        mainul.innerHTML = savedHTML;
    }
}