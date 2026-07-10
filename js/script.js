const myLibrary = [];

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
        const title = document.createElement("div");
        title.textContent = "\"" + book.title + "\"";
        newBook.appendChild(title);
        const author = document.createElement("div");
        author.textContent = "written by " + book.author;
        newBook.appendChild(author);
        const year = document.createElement("div");
        year.textContent = "in " + book.year;
        newBook.appendChild(year);
        const pages = document.createElement("div");
        pages.textContent = book.pages + " pages";
        newBook.appendChild(pages);
        const read = document.createElement("div");
        read.textContent = book.read ? "already read" : "not read yet";
        newBook.appendChild(read);
        libraryContainer.appendChild(newBook);
    })
}

const libraryContainer = document.querySelector("#library-container");
const dialogBook = document.querySelector("#dialog-book")
const newBookButton = document.querySelector("#dialog-open");
const dialogBookClose = document.querySelector("#dialog-book-close");
const dialogBookConfirm = document.querySelector("#dialog-book-confirm");

newBookButton.addEventListener("click", () => {
    dialogBook.showModal();
})

dialogBookClose.addEventListener("click", () => {
    dialogBook.close();
})

dialogBookConfirm.addEventListener("click", () => {
    dialogBook.close();
    clear();
    display();
})