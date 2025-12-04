const books = [
  {
    bookName: "JavaScript Guide",
    author: "John Doe",
    pages: 350,
    price: 499,
    rating: 4.3,
    category: "Programming",
    publishedYear: 2019,
  },
  {
    bookName: "React Mastery",
    author: "Siddharth Sharma",
    pages: 280,
    price: 599,
    rating: 4.8,
    category: "Programming",
    publishedYear: 2023,
  },
  {
    bookName: "History of India",
    author: "R. Sharma",
    pages: 420,
    price: 399,
    rating: 4.1,
    category: "History",
    publishedYear: 2015,
  },
  {
    bookName: "CSS Basics",
    author: "Meena Gupta",
    pages: 180,
    price: 199,
    rating: 3.9,
    category: "Design",
    publishedYear: 2020,
  },
  {
    bookName: "Node.js Deep Dive",
    author: "Alex Ron",
    pages: 510,
    price: 699,
    rating: 4.7,
    category: "Programming",
    publishedYear: 2021,
  },
];
// 1. Get all books name with rating greater than 4.5
const highRatedBooks = books
  .filter(book => book.rating > 4.5)
  .map(book => book.bookName);

console.log(highRatedBooks);



// 2. Get the names of all books published after 2020
const booksAfter2020 = books
  .filter(book => book.publishedYear > 2020)
  .map(book => book.bookName);

console.log(booksAfter2020);



// 3. Calculate the total price of all Programming books
const totalProgrammingPrice = books
  .filter(book => book.category === "Programming")
  .reduce((sum, book) => sum + book.price, 0);

console.log(totalProgrammingPrice);



// 4. Find the average number of pages of all books in the Design category
const designBooks = books.filter(book => book.category === "Design");
const avgDesignPages =
  designBooks.reduce((sum, book) => sum + book.pages, 0) /
  (designBooks.length || 1);

console.log(avgDesignPages);


// 5. Get a list of authors who have written books with a rating less than 4.0
const lowRatedAuthors = books
  .filter(book => book.rating < 4.0)
  .map(book => book.author);

console.log(lowRatedAuthors);



// 6. Find the most expensive book in the collection
const mostExpensiveBook = books.reduce((max, book) =>
  book.price > max.price ? book : max
);

console.log(mostExpensiveBook);



// 7. Get all books that have more than 300 pages and are priced below 500
const specificBooks = books.filter(
  book => book.pages > 300 && book.price < 500
);

console.log(specificBooks);



// 8. Create a new array with book names and their respective authors
const bookAuthorList = books.map(book => ({
  name: book.bookName,
  author: book.author
}));

console.log(bookAuthorList);



