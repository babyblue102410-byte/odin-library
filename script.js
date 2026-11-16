function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

const myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

const libraryContainer = document.querySelector("#library");

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("Harry Potter", "J.K. Rowling", 309, false);

for (const book of myLibrary) {
    const bookCard = document.createElement("div");
    bookCard.textContent = book.title;
    libraryContainer.appendChild(bookCard);
}

console.log(myLibrary);