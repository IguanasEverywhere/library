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
  itemCard.textContent = book.title + book.author + book.pages + book.read;
  document.getElementById("cards-body").appendChild(itemCard);
}


const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", () => {
  const addedTitle = document.getElementById("bookTitle").value;
  const addedAuthor = document.getElementById("bookAuthor").value;
  const addedPages = document.getElementById("bookPages").value;
  const addedRead = document.getElementById("bookRead").value;

  let addedBook = new Book(addedTitle, addedAuthor, addedPages, addedRead);
  addBookToLibrary(addedBook);
});


console.log(myLibrary);