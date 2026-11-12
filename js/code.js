let container = document.querySelector("#menu-nav");
let details = document.querySelector("#book-details");

fetch("js/books.json")
  .then(response => response.json())
  .then(books => {
    books.forEach(book => {
      container.innerHTML += `
        <button class="btn btn-danger  border border-secondary text-start"
                onclick="showBook('${book.title}')">
          ${book.title}
        </button>
      `;
    });

    showBook(books[0].title);
  });

function showBook(title) {
  fetch("js/books.json")
    .then(response => response.json())
    .then(books => {
      const book = books.find(book => book.title === title);

      details.innerHTML = `
      <div class="card-body">
        <h2 class="mb-4 card-title">${book.title}</h2>
        <img src="${book.image}" class="card-img-top img-fluid  mb-4" alt="${book.title}">
        <p class="card-text">${book.description}</p>
         </div>
   <div class="card-footer">

        <a href="${book.destination}" target="_blank" class="btn btn-outline-danger">
          Learn more
        </a>
 
     </div>
       
      `;
    });
}