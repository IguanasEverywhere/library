let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return (this.title + this.author + this.pages + this.read);
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks(book);
}

function displayBooks(book) {
  let itemCard = document.createElement("div");
  itemCard.className = "card";

  let itemList = document.createElement("ul");

  document.getElementById("cards-body").appendChild(itemCard);
  itemCard.appendChild(itemList);

  let itemTitle = document.createElement("li");
  itemTitle.textContent=book.title;
  itemList.appendChild(itemTitle);

  let itemAuthor = document.createElement("li");
  itemAuthor.textContent=book.author;
  itemList.appendChild(itemAuthor);

  let itemPages = document.createElement("li");
  itemPages.textContent=book.pages;
  itemList.appendChild(itemPages);  

  let itemRead = document.createElement("li");
  itemRead.textContent=book.read;
  itemList.appendChild(itemRead);
}

const bookForm = document.getElementById("bookForm");

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", () => {
  const addedTitle = document.getElementById("bookTitle").value;
  const addedAuthor = document.getElementById("bookAuthor").value;
  const addedPages = document.getElementById("bookPages").value;
  const addedRead = document.getElementById("bookRead").value;

  let addedBook = new Book(addedTitle, addedAuthor, addedPages, addedRead);
  addBookToLibrary(addedBook);

  bookForm.reset();

});


console.log(myLibrary);