import { getListItems } from './localStorage.js';

class bookStack {
    static list = getListItems();

    static bookCard = ({ title, author, id }) => {
      // assigns class and id to each bookCard
      const bookCardHolder = document.createElement('div');
      bookCardHolder.id = id;
      bookCardHolder.classList.add('book-card');

      // creates div where newly added books are displayed
      const newBookShowcase = document.createElement('div');
      newBookShowcase.textContent = `"${title}" by ${author}`;

      // creates button to remove books from list created
      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.classList.add('remove-book-btn');
      removeBtn.textContent = 'remove';

      bookCardHolder.append(newBookShowcase, removeBtn);
      return bookCardHolder;
    }

    static addBookUI = (book) => {
      // creates books container and Adds Books to list.
      const bookContainer = document.querySelector('.booksContainer');
      bookContainer.appendChild(bookStack.bookCard(book));
      bookStack.list = [...bookStack.list, book];
    }

    // Displays the books in Book list on page load
    static bookDisplay = () => {
      const bookContainer = document.querySelector('.booksContainer');
      bookStack.list.forEach((book) => {
        bookContainer.appendChild(bookStack.bookCard(book));
      });
    }

    // Removes book(s) from the bookList
    static removeBook = (id) => {
      bookStack.list = bookStack.list.filter((item) => (item.id).toString() !== id);
    }
}

export default bookStack;