const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

function isBookRead(books, title) {
    const book = books.find(book => book.title === title);
    return book ? book.isRead : false;
}

console.log(isBookRead(books, 'Harry Potter y la piedra filosofal'));
console.log(isBookRead(books, 'Canción de hielo y fuego'));
console.log(isBookRead(books, 'Devastación'));