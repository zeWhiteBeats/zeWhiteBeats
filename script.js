document.querySelector("#input").addEventListener("keydown", function(event) {
        if(event.key === "Enter"){
          const input = document.querySelector("#input");
          addItem(input.value);
          console.log(input.value);
        }}
    );
      
      document.querySelector("#add_item").addEventListener("click", function(){
        const input = document.querySelector("#input");
        addItem(input.value);
      });
        function text(form){
          if(strlen(form.searc.value)>0){
            alert("длина текста не совпадает");
            return false;
          }
          else{
            return true;
          }
      }
        
      function addItem(input) {
        const item = document.createElement("div");
        const div = document.createElement("div");
        const checkIcon = document.createElement("i");
        const trashIcon = document.createElement("i");
        const text = document.createElement("p");
    item.className = "item";
        text.textContent = input;
    document.body.append(text)
      
    trashIcon.addEventListener("click", () => {
        item.remove();
    })
    div.appendChild(trashIcon);
      
    item.appendChild(text);
    item.appendChild(div);
      
    document.querySelector("#to_do_list").appendChild(item);
    document.querySelector("#input").value = "";
    
    };
