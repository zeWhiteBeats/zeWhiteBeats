document.querySelector("#input").addEventListener("keydown", (event) => {
  if(event.key === "Enter"){
    const input = document.querySelector("#input");
    addItem(input.value);
  }
    
}}

document.querySelector("#add_item").addEventListener("click", () => {
  const input = document.querySelector("#input");
  addItem(input.value);
}};
  function text(form){
    if(strlen(form.searc.value)>0){
      alert("длина текста не совпадает");
      return false;
    }
    else{
      return true;
    }
}
  
function addItem(input) => {
  const item = document.createElement("div");
  const div = document.createElement("div");
  const checkIcon = document.createElement("i");
  const trashIcon = document.createElement("i");
  const text = document.createElement("p");
}
  item.className = "item";
  text.textContent = input;


  checkIcon.className = "fas fa-check-square";
  checkIcon.style.color = "lightgray";
  checkIcon.addEventListener("click", () => {
    checkIcon.style.color = "limegreen";
  )
  div.appendChild(checkIcon);

  trashIcon.className = "fas fa-trash";
  trashIcon.style.color = "darkgray";
  trashIcon.addEventListener("click", () => {
    item.remove();
    }
  div.appendChild(trashIcon);

  item.appendChild(text);
  item.appendChild(div);
  document.querySelector("#input").value = "";
}
