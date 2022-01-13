let myLibrary = [];

function Book(title, author, pages, read, bookIndex) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.bookIndex = bookIndex;

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
  itemTitle.style.fontSize="3rem";
  itemList.appendChild(itemTitle);

  let itemAuthor = document.createElement("li");
  itemAuthor.textContent=book.author;
  itemList.appendChild(itemAuthor);

  let itemPages = document.createElement("li");
  itemPages.textContent=book.pages + " pages";
  itemList.appendChild(itemPages);  

  let itemRead = document.createElement("li");
  let checkItemReadValue = document.getElementById("bookRead");
  if (checkItemReadValue.checked === true) {
    itemRead.textContent="Book is read";
  } else {
    itemRead.textContent = "Book is not read";
  }
  itemList.appendChild(itemRead);

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteBtn");
  deleteButton.textContent = "X";
  itemList.appendChild(deleteButton);

  deleteButton.addEventListener("click", ()=> {
    console.log(book.bookIndex);
    
    let filteredResults = myLibrary.filter((entries)=> {
      return (entries.bookIndex!=book.bookIndex);
    });
    console.log(filteredResults);
    filteredResults.forEach(result => {
      displayBooks(result);
    });
  });

}

// let deleteButtons = document.getElementsByClassName("deleteBtn");

const addBookButton = document.getElementById("addBookButton");
addBookButton.addEventListener("click", ()=> {
  openForm();
});

function openForm() {
  document.getElementById("entry-form").style.display ="flex";

}

function closeForm() {
  document.getElementById("entry-form").style.display ="none";
}

const bookForm = document.getElementById("bookForm");

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", () => {
  const addedTitle = document.getElementById("bookTitle").value;
  const addedAuthor = document.getElementById("bookAuthor").value;
  const addedPages = document.getElementById("bookPages").value;
  const addedRead = document.getElementById("bookRead").value;

  let bookIndex = myLibrary.length;

  let addedBook = new Book(addedTitle, addedAuthor, addedPages, addedRead, bookIndex);
  addBookToLibrary(addedBook);

  bookForm.reset();
  closeForm();

});

const cancelButton = document.getElementById("cancelBtn");
cancelButton.addEventListener("click", ()=> {
  bookForm.reset();
  closeForm();
});

