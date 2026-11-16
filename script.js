function Book(title, author, pages, read) {
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

const readList = document.querySelector("#read-list");
const unreadList = document.querySelector("#unread-list");

//Test books
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("Harry Potter", "J.K. Rowling", 309, false);
addBookToLibrary("Animal Farm", "George Orwell", 112, true);
addBookToLibrary("Dune", "Frank Herbert", 412, false);

function displayBooks() {
    readList.replaceChildren();
    unreadList.replaceChildren();
    myLibrary.sort((a, b) => {
    return a.title.localeCompare(b.title);
    });

    for (const book of myLibrary) {
        const bookCard = document.createElement("div");

        bookCard.textContent = `${book.title} - ${book.author} - ${book.pages} pages ${book.read ? "Read" : "Unread"}`;

        if (book.read === true) {
            readList.appendChild(bookCard);
        } else {
            unreadList.appendChild(bookCard);
        }
    }
}

displayBooks();