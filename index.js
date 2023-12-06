
function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}


function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
}

Book.prototype.getBookInfo = function () {
    return `Title: ${this.title}<br>Author: ${this.author.name}<br>Genre: ${this.genre}<br>Price: ₹${this.price}`;
};


const author1 = new Author("J.K. Rowling", 1965, "British");
const author2 = new Author("George R.R. Martin", 1948, "American");


const book1 = new Book("Harry Potter and the Sorcerer's Stone", author1, "Fantasy", 20.99);
const book2 = new Book("A Game of Thrones", author2, "Fantasy", 25.99);


document.getElementById('book1-info').innerHTML = book1.getBookInfo();
document.getElementById('book2-info').innerHTML = book2.getBookInfo();
