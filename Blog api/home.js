let umumi=document.querySelector(".umumi")
const newBlog = "http://localhost:8000/blogs";

const getBlogs = async () => {

  let response = await fetch(`${newBlog}`);
  let data = await response.json();
  console.log(data);

  data.forEach((element)=>{

  let text=document.createElement("div")
  text.className=element.id


  let title=document.createElement("h1")
  title.innerText=element.title
  text.appendChild(title)

  let body=document.createElement("h2")
  body.innerText=element.body
  text.appendChild(body)

  let author=document.createElement("h1")
  author.innerText=element.author
  text.appendChild(author)
  
  let delet=document.createElement("button")
  delet.innerText="delet"

  delet.addEventListener("click",function(){
    fetch(`${newBlog}/${text.className}`,{
        method:"DELETE"
    });
  })
  text.appendChild(delet)
umumi.appendChild(text)

})};
getBlogs()