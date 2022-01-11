let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  
    this.info = function() {
      return (this.title + this.author + this.pages + this.read);
    }
  }

  function addBookToLibrary(book) {
      myLibrary.push(book);
  }

  function formSubmit() {
      let addedTitle = document.getElementById("bookTitle").value;
      let addedAuthor = document.getElementById("bookAuthor").value;
      let addedPages = document.getElementById("bookPages").value;
      let addedRead = document.getElementById("bookRead").value;

      addBookToLibrary(addedTitle, addedAuthor, addedPages, addedRead);

      let addedBook = new Book(addedTitle, addedAuthor, addedPages, addedRead);
   alert(addedBook.addedTitle); // this doesn't work
   alert(addedTitle); // this does
   alert(typeof(addedTitle)); // yes it's a string
      
  }

  let book1 = new Book("Deep Work", "Cal Newport", 296, true);
  let book2 = new Book("A Walk In the Woods", "Bill Bryson", 275, true);

  addBookToLibrary(book1);
  addBookToLibrary(book2);

  myLibrary.forEach(entry => {
    let itemCard = document.createElement("div");
    itemCard.className = "card";
    itemCard.textContent = entry.title + entry.author + entry.pages + entry.read;
    document.getElementById("cards-body").appendChild(itemCard);
  }); 


  console.log(myLibrary);