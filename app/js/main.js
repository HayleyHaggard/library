class Book {
  constructor(
    title = 'Unknown',
    author = 'Unknown',
    pages = '0',
    isRead = false
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

class Library {

  constructor() {
    this.books = []
  }

  addBook(newBook) {
    if (!this.isInLibrary(newBook)) {
      this.books.push(newBook);
    }
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
  }

  isInLibrary(newBook) {
    return this.books.some((book) => book.title === newBook.title);
  }
}



const library = new Library();

const addBookBtn = document.getElementById('addBookBtn');
const addBookForm = document.getElementById('addBookForm')
const modalTab = document.getElementById('modalTab');
const overlay = document.getElementById('overlay');


const openModalTab = () => {
  modalTab.classList.add('active');
  overlay.classList.add('active');
}



const getBookFromInput = () => {
  const titleInp = document.getElementById('title').value;
  const authorInp = document.getElementById('author').value;
  const pagesInp = document.getElementById('pages').value;
  const isReadInp = document.getElementById('isRead').checked;

  return new Book(titleInp, authorInp, pagesInp, isReadInp);
}


const addBook = (e) => {
  e.preventDefault();
  const newBook = getBookFromInput();

  if (library.isInLibrary(newBook)) {
    //   //todo add such class and item
    // errorMessage.textContent = 'Such book already exists in your library';
    // errorMessage.classList.add('active');
    console.log('error')
  } else {
    library.addBook(newBook);
    //todo write savelocal and updateBooksGrid
    // saveLocal();
    // updateBooksGrid();
  }

  //todo write func
  // closeModal();
}





addBookBtn.onclick = openModalTab;
addBookForm.onsubmit = addBook;





