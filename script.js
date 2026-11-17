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
const bookForm = document.querySelector("#book-form");

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

        const removeButton = document.createElement("button");

        removeButton.textContent = "Remove";

        bookCard.appendChild(removeButton);

        removeButton.addEventListener("click", () => {
        const bookIndex = myLibrary.findIndex((item) => {
        return item.id === book.id;
    });

    if (bookIndex !== -1) {
        myLibrary.splice(bookIndex, 1);
        displayBooks();
        }
    });

    const toggleButton = document.createElement("button");

    toggleButton.textContent = book.read ? "Mark Unread" : "Mark Read";

    bookCard.appendChild(toggleButton);

    toggleButton.addEventListener("click", () => {
        book.read = !book.read;
        displayBooks();
        });

    }
}

displayBooks();

bookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const titleInput = document.querySelector("#title");
    const title = titleInput.value;

    const authorInput = document.querySelector("#author");
    const author = authorInput.value;

    const pagesInput = document.querySelector("#pages");
    const pages = Number(pagesInput.value);

    const readInput = document.querySelector("#read");
    const read = readInput.checked;

    addBookToLibrary(title, author, pages, read);

    displayBooks();

    bookForm.reset();
});