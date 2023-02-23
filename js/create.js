const createForm = document.querySelector('form');


const createPost = async (e) =>{
  e.preventDefault()
 let data = {
  title:createForm.title.value,
  author:createForm.author.value,
  content:createForm.content.value,
 }
 await fetch('http://localhost:3000/posts', {
  method: 'POST',
  body: JSON.stringify(data),
  headers:{'content-Type':'application/json'}
 })
}


createForm.addEventListener("submit", createPost)

