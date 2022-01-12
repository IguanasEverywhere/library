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
  console.log(book);

  displayBooks();
}

function displayBooks() {
  myLibrary.forEach(entry => {
    let itemCard = document.createElement("div");
    itemCard.className = "card";
    itemCard.textContent = entry.title + entry.author + entry.pages + entry.read;
    document.getElementById("cards-body").appendChild(itemCard);
  });
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



// let book1 = new Book("Deep Work", "Cal Newport", 296, true);
// let book2 = new Book("A Walk In the Woods", "Bill Bryson", 275, true);

// addBookToLibrary(book1);
// addBookToLibrary(book2);



console.log(myLibrary);