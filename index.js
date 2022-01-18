let myLibrary = [];

// Book Constructor ///////////////////////////////////////////////////////

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
    book.read = true;
  } else if (checkItemReadValue.checked === false){
    book.read = false;
  }

  if (book.read === true) {
    itemRead.textContent = "Book is read!";
    itemRead.style.color = "#0a8f0a";
  } else if (book.read === false) {
    itemRead.textContent = "Book is NOT read";
    itemRead.style.color = "#c95656";
  }
  itemList.appendChild(itemRead);



  // Handle item deletion //////////////////////////////////////////////

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteBtn");
  deleteButton.textContent = "X";
  itemList.appendChild(deleteButton);


  deleteButton.addEventListener("click", ()=> {
    
    let currentCards = Array.from(document.getElementsByClassName("card"));
    currentCards.forEach(card => {
      card.remove();
    });
    
    let filteredResults = myLibrary.filter((entries)=> {
      return (entries.bookIndex!=book.bookIndex);
    });

    myLibrary = filteredResults;
    console.log(myLibrary);
    filteredResults.forEach(result => {
      result.bookIndex = myLibrary.indexOf(result);
      displayBooks(result);
    });
  });

  // Change read status button /////////////////

  let changeReadStatus = document.createElement("li");
  changeReadStatus.classList.add("changeReadStatus");
  changeReadStatus.textContent = "Click here to change the read status";
  itemList.appendChild(changeReadStatus);

  changeReadStatus.addEventListener("click", ()=> {
    if (book.read === true) {
      book.read = false;
      checkItemReadValue.checked = false;
      itemRead.textContent = "Book is NOT read!";
      itemRead.style.color = "#c95656";
    } else {
      book.read = true;
      checkItemReadValue.checked = true;
      itemRead.textContent = "Book is Read!"
      itemRead.style.color = "#0a8f0a";
    }
  });

}

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
submitBtn.disabled = true;
submitBtn.addEventListener("click", () => {
  const addedTitle = document.getElementById("bookTitle").value;
  const addedAuthor = document.getElementById("bookAuthor").value;
  const addedPages = document.getElementById("bookPages").value;
  const addedRead = document.getElementById("bookRead").value;

  let bookIndex = myLibrary.length;

  let addedBook = new Book(addedTitle, addedAuthor, addedPages, addedRead, bookIndex);
  addBookToLibrary(addedBook);

  bookForm.reset();
  submitBtn.disabled = true;
  closeForm();

});

const cancelButton = document.getElementById("cancelBtn");
cancelButton.addEventListener("click", ()=> {
  bookForm.reset();
  closeForm();
});

// Input validation--making sure pages field is actually a number

let regPage = /[0-9]/g;
const inputPages = document.getElementById("bookPages");

inputPages.addEventListener('keyup', (e)=> {
    validateInput(e.target, regPage);
  });

function validateInput(inputField, regex) {
  if ((regex.test(inputField.value))) {
    submitBtn.disabled = false;
  }

}