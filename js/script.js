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
}

function display(books) {
    books.forEach(book => {
        console.log(book.name);
        console.log(book.author);
        console.log(book.year);
        console.log(book.pages);
        })
}