let myLibrary = [];

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
    if (!new.target) {
        throw Error("You have to use the new keyword.")
    }
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
}

Book.prototype.removeBookFromLibrary = function () {
    myLibrary = myLibrary.filter((book) => book.id !== this.id);
}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
}

function clear() {
    while (libraryContainer.firstChild) {
        libraryContainer.removeChild(libraryContainer.firstChild);
    }
}

function renderLibrary() {
    clear();
    myLibrary.forEach((book) => { 
        const newBook = document.createElement("div");
        newBook.classList.add("card");
        newBook.dataset.id = book.id;
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
        const toggleReadButton = document.createElement("button");
        toggleReadButton.textContent = "Toggle read status";
        toggleReadButton.addEventListener("click", () => {
            book.toggleRead();
            renderLibrary();
        })
        newBook.appendChild(toggleReadButton);
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove book";
        removeButton.addEventListener("click", () => {
            book.removeBookFromLibrary();
            renderLibrary();
        })
        newBook.appendChild(removeButton);
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
    e.preventDefault();
    addBookToLibrary(title.value, author.value, year.value, pages.value, read.checked);
    bookForm.reset();
    dialogBook.close();
    renderLibrary();
})

addBookToLibrary("Lord of the Rings", "J. R. R. Tolkien", 1954, 423, true);
addBookToLibrary("Lord of the Flies", "William Golding", 1954, 224, false);
addBookToLibrary("Jane Eyre", "Charlotte Bronte", 1847, 656, true);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 1925, 190, true);
addBookToLibrary("Le Deuxième Sexe", "Simone de Beauvoir", 1949, 528, false);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 1813, 448, true);
renderLibrary();