const myLibrary = [];

const libraryContainer = document.querySelector("#library-container");
const bookForm = document.querySelector("#modal-book-form")
const dialogBook = document.querySelector("#dialog-book")
const newBookButton = document.querySelector("#dialog-open");
const dialogBookClose = document.querySelector("#dialog-book-close");
const dialogBookConfirm = document.querySelector("#dialog-book-confirm");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");

function Book(title, author, year, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, year, pages, read) {
    const newBook = new Book(title, author, year, pages, read);
    myLibrary.push(newBook);
    clear();
    display();
}

function clear() {
    while (libraryContainer.firstChild) {
        libraryContainer.removeChild(libraryContainer.firstChild);
    }
}

function display() {
    myLibrary.forEach((book) => { 
        const newBook = document.createElement("div");
        newBook.classList.add(book.id, "card");
        const titleDiv = document.createElement("div");
        titleDiv.textContent = "\"" + book.title + "\"";
        newBook.appendChild(titleDiv);
        const authorDiv = document.createElement("div");
        authorDiv.textContent = "written by " + book.author;
        newBook.appendChild(authorDiv);
        const yearDiv = document.createElement("div");
        yearDiv.textContent = "in " + book.year;
        newBook.appendChild(yearDiv);
        const pagesDiv = document.createElement("div");
        pagesDiv.textContent = book.pages + " pages";
        newBook.appendChild(pagesDiv);
        const readDiv = document.createElement("div");
        readDiv.textContent = book.read ? "already read" : "not read yet";
        newBook.appendChild(readDiv);
        libraryContainer.appendChild(newBook);
    })
}

newBookButton.addEventListener("click", () => {
    dialogBook.showModal();
})

dialogBookClose.addEventListener("click", () => {
    dialogBook.close();
})

bookForm.addEventListener("submit", (e) => {
    addBookToLibrary(title.value, author.value, year.value, pages.value, read.checked);
    e.preventDefault();
    dialogBook.close();
})