const getListItems = () => {
  let books;
  if (localStorage.getItem('bookList') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('bookList'));
  }
  return books;
};

// adds new book to the list
const addBooks = (book) => {
  const books = getListItems();
  books.push(book);
  localStorage.setItem('bookList', JSON.stringify(books));
};

// removes book from the list
const removeBook = (id) => {
  const books = getListItems();
  books.forEach((book, index) => {
    if ((book.id).toString() === id) {
      books.splice(index, 1);
    }
  });
  localStorage.setItem('bookList', JSON.stringify(books));
};

export { getListItems, removeBook, addBooks };