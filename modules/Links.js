// Handles Click events in the Navbar
const clickHandler = (e) => {
  let i;

  // Sets initial display of sections to none
  const sections = document.getElementsByClassName('section');
  for (i = 0; i < sections.length; i += 1) {
    sections[i].style.display = 'none';
  }

  // Sets initial color of links to black
  const sectionLinks = document.getElementsByClassName('main-nav-links');
  for (i = 0; i < sectionLinks.length; i += 1) {
    sectionLinks[i].style.color = 'black';
  }

  //  Sets display and color of individual links after click events

  if (e.target.classList.contains('book-list')) {
    const contactStyle = document.querySelector('#allBooks');
    contactStyle.style.display = 'block';
    e.target.style.color = '#2f32db';
  }

  if (e.target.classList.contains('add-new-book')) {
    const addBookStyle = document.querySelector('#add-book-form');
    addBookStyle.style.display = 'block';
    e.target.style.color = '#2f32db';
  }

  if (e.target.classList.contains('contact')) {
    const contactStyle = document.querySelector('#contact');
    contactStyle.style.display = 'block';
    e.target.style.color = '#2f32db';
  }
};

export default clickHandler;