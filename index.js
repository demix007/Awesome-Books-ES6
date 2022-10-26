import currentDate from './modules/date.js';
import clickHandler from './modules/Links.js';
import Book from './modules/bookConstructor.js';
import bookStack from './modules/bookStack.js';
import { addBooks, removeBook } from './modules/localStorage.js';
import clearForm from './modules/clearFormFields.js';
import {
  form, bookContainer, navbar,
} from './modules/variables.js';

// displays the book stack on load
window.addEventListener('DOMContentLoaded', bookStack.bookDisplay);

// adds event listener to the form element
form.addEventListener('click', (e) => {
  e.preventDefault();
  const author = document.querySelector('#book-author').value;
  const title = document.querySelector('#book-name').value;

  // validates title and author inputs and creates new Book if the inputs are valid
  if (title !== '' && author !== '') {
    if (e.target.classList.contains('btn-add-book')) {
      const newBook = new Book(author, title);
      newBook.id = bookStack.list.length + 1;
      bookStack.addBookUI(newBook);
      addBooks(newBook);
      clearForm();
      form.submit();
    }
  }
});

// removes book from list
bookContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-book-btn')) {
    const bookId = e.target.parentElement.id;
    bookStack.removeBook(bookId);
    removeBook(bookId);
    e.target.parentElement.remove();
  }
});

document.getElementById('main-nav-links').addEventListener('click', clickHandler);
document.getElementById('defaultOpen').click();

// Today's date
const date = document.createElement('p');
date.innerHTML = currentDate();
date.classList.add('current_date');
navbar.appendChild(date);