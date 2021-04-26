var Book = /** @class */ (function () {
    function Book(year, author, title) {
        this.year = year;
        this.author = author;
        this.title = title;
    }
    Book.prototype.display = function () {
        console.log(this.year + ", " + this.author + ", \"" + this.title + "\"");
    };
    return Book;
}());
