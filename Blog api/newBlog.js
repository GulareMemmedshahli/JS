let form=document.querySelector("form")
let btn1=document.querySelector(".btn1")
let title=document.querySelector("#title")
let body=document.querySelector("#body")
let author=document.querySelector("#author")

const BASE_URL = "http://localhost:8000/blogs";

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let newObj={
        title:"",
        body:"",
        author:"",
    };

    newObj.title=title.value;
    newObj.body=body.value;
    newObj.author=author.value;
    console.log(newObj)
    
    fetch(`${BASE_URL}`, {
        method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    });
});





