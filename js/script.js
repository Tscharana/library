const myLibrary = [];

function Book(name, author, year, pages) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.year = year;
    this.pages = pages;
}

function addBookToLibrary(name, author, year, pages) {
    const newBook = new Book(name, author, year, pages);
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
        const name = document.createElement("div");
        name.textContent = book.name;
        newBook.appendChild(name);
        const author = document.createElement("div");
        author.textContent = book.author;
        newBook.appendChild(author);
        const year = document.createElement("div");
        year.textContent = book.year;
        newBook.appendChild(year);
        const pages = document.createElement("div");
        pages.textContent = book.pages;
        newBook.appendChild(pages);
        libraryContainer.appendChild(newBook);
    })
}

const libraryContainer = document.querySelector("#library-container");