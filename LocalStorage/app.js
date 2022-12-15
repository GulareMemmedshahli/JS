let box1 = document.querySelector(".box1");
let input = document.querySelector(".input");
let Delete = document.querySelector(".delete");
let Edit = document.querySelector(".edit");

let alldata =
  JSON.parse(localStorage.getItem("data")) == null
    ? []
    : JSON.parse(localStorage.getItem("Data"));

input.addEventListener("keypress", function (event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    let textarea = document.createElement("div");
    textarea.className = "textarea";

    let text = document.createElement("p");
    text.className = "text";
    text.innerText = input.value;
    textarea.appendChild(text);
    box1.appendChild(textarea);

    alldata.push(textarea.innerText);
    localStorage.setItem("Data", JSON.stringify(alldata));
    input.value = " ";

    text.addEventListener("click", function () {
      Edit.addEventListener("click", function () {
        textarea.innerText = input.value;
      });
      Delete.addEventListener("click", function () {
        textarea.innerText = " ";
        
        localStorage.removeItem("alldata");
        for (let i = 0; i < alldata.length; i++) {
          if (alldata[i] == input.value) {
            alldata.splice(i, 1);
          }
        }
      });
    });
  }
});
