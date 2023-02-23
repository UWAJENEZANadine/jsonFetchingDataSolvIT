const listposts = async () => {
  const url = "http://localhost:3000/posts";
  const res = await fetch(url);
  const result = await res.json();
  console.log(result);

  const myData = document.querySelector(".post");
  let content = ``;
  result.forEach((post) => {
    content += `
   <h1>${post.title}</h1>
   <p>${post.author}</p>
  `;
  });
  myData.innerHTML = content;
};

window.addEventListener("DOMContentLoaded", () => listposts());
