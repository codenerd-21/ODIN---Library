//Variables
let myLibrary = [];


//DOM Elements
const bookCase = document.getElementById('book-case');
const bookShelf = document.getElementById('book-shelf');
const addBtn = document.getElementById('add-btn');
const formInputs = document.getElementById('form-inputs');


//Event Listeners
addBtn.addEventListener('click', createForm);


//Constructor Function
function Book(title, author, pages, read) {
  this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}


//Functions

//Loops through Array and displays book cards 
function render() {
  bookShelf.style.display = 'grid';
  bookShelf.style.gridTemplateColumns = 'auto auto auto';
  for (let i = 0; i < myLibrary.length; i++) {
    const bookCard = document.createElement('div');
    bookCard.setAttribute('id', i);
    bookCard.style.border = 'thin solid #000000';
    bookShelf.appendChild(bookCard);
    bookCard.innerHTML = `Title:   ${myLibrary[i].title}<br>
                          Author:  ${myLibrary[i].author}<br>
                          Pages:   ${myLibrary[i].pages}<br>
                          Book Read?:   ${myLibrary[i].read} <br>`;

    //Create Book Delete Button in Display                      
    const bookDeleteBtn = document.createElement('input');
    bookDeleteBtn.setAttribute('type', 'button');
    bookDeleteBtn.setAttribute('name', 'delete');
    bookDeleteBtn.setAttribute('id', 'book-delete');
    bookDeleteBtn.setAttribute('value', 'Delete Book');
    bookDeleteBtn.textContent = 'Delete Book';
    bookDeleteBtn.style.display = 'block';
    bookDeleteBtn.style.margin = '0 0 10px 0';
    bookCard.appendChild(bookDeleteBtn);

    //Event Listener to Delete Button
    bookDeleteBtn.addEventListener('click', function () {
      myLibrary.splice(i, 1);
      bookShelf.innerHTML = '';
      render();
    });

    //Create Toggle Book Read Status in Display
    const bookReadBtn = document.createElement('button');
    const bookReadBtnText = document.createTextNode('Toggle Read Status');
    bookReadBtn.setAttribute('id', 'toggle-read-btn');
    bookReadBtn.appendChild(bookReadBtnText);
    bookCard.appendChild(bookReadBtn);

    //Event Listener to Toggle Button
    bookReadBtn.addEventListener('click', function () {
      if (myLibrary[i].read === 'Yes') {
        myLibrary[i].read = 'No';
      } else {
        myLibrary[i].read = 'Yes';
      }
      bookShelf.innerHTML = '';
      render();
    })
  }
}

//Get Data from Form and Create New Object
function getNewData() {
  let argTitle = document.getElementById('new-book-title').value;
  let argAuthor = document.getElementById('new-book-author').value;
  let argPage = document.getElementById('new-book-pages').value;
  let argRead = document.getElementById('new-book-read').value;
  let book = new Book(argTitle, argAuthor, argPage, argRead);
  if (argTitle === '' || argAuthor === '' || argPage === '' || argRead === '') {
    return alert(`You did not enter all values.  Please complete the form.`);
  }
  myLibrary.push(book);
  bookShelf.innerHTML = '';
  document.getElementById('new-book-title').value = '';
  document.getElementById('new-book-author').value = '';
  document.getElementById('new-book-pages').value = '';
  document.getElementById('new-book-read').value = '';
  render();
}

//Create Form to Add Book
function createForm() {
  //Disable Add New Book Button After Clicked
  document.getElementById('add-btn').disabled = true;

  //Style Form Container
  formInputs.style.border = '3px solid blue';
  formInputs.style.margin = '10px 0';
  formInputs.style.padding = '10px 0 10px 10px';

  //Create Form Title Header
  const formHeader = document.createElement('h2');
  formHeader.textContent = 'Add New Book Form';
  formInputs.appendChild(formHeader);

  //Create Book Title Input
  const bookTitleLabel = document.createElement('label');
  bookTitleLabel.innerHTML = 'Enter Book Title:  <br>';
  formInputs.appendChild(bookTitleLabel);

  const bookTitleInput = document.createElement('input');
  bookTitleInput.setAttribute('type', 'text');
  bookTitleInput.setAttribute('name', 'title');
  bookTitleInput.setAttribute('id', 'new-book-title');
  bookTitleInput.style.width = '300px';
  bookTitleInput.style.display = 'block';
  bookTitleInput.style.margin = '0 0 10px 0';
  formInputs.appendChild(bookTitleInput);

  //Create Book Author Input
  const bookAuthorLabel = document.createElement('label');
  bookAuthorLabel.innerHTML = 'Enter Book Author:  <br>';
  formInputs.appendChild(bookAuthorLabel);

  const bookAuthorInput = document.createElement('input');
  bookAuthorInput.setAttribute('type', 'text');
  bookAuthorInput.setAttribute('name', 'author');
  bookAuthorInput.setAttribute('id', 'new-book-author');
  bookAuthorInput.style.width = '300px';
  bookAuthorInput.style.display = 'block';
  bookAuthorInput.style.margin = '0 0 10px 0';
  formInputs.appendChild(bookAuthorInput);

  //Create Book Page Input
  const bookPagesLabel = document.createElement('label');
  bookPagesLabel.innerHTML = 'Enter Number of Pages in Book:  <br>';
  formInputs.appendChild(bookPagesLabel);

  const bookPagesInput = document.createElement('input');
  bookPagesInput.setAttribute('type', 'number');
  bookPagesInput.setAttribute('name', 'pages');
  bookPagesInput.setAttribute('id', 'new-book-pages');
  bookPagesInput.style.width = '300px';
  bookPagesInput.style.margin = '0 0 10px 0';
  bookPagesInput.style.display = 'block';
  formInputs.appendChild(bookPagesInput);

  //Create Book Read Input
  const bookReadLabel = document.createElement('label');
  bookReadLabel.innerHTML = 'Book Read Yet? (Enter Yes or No) <br>';
  formInputs.appendChild(bookReadLabel);

  const bookReadInput = document.createElement('input');
  bookReadInput.setAttribute('type', 'text');
  bookReadInput.setAttribute('name', 'read');
  bookReadInput.setAttribute('id', 'new-book-read');
  bookReadInput.style.width = '300px';
  bookReadInput.style.margin = '0 0 10px 0';
  bookReadInput.style.display = 'block';
  formInputs.appendChild(bookReadInput);


  //Create Form Submit Button
  const bookSubmitBtn = document.createElement('input');
  bookSubmitBtn.setAttribute('type', 'submit');
  bookSubmitBtn.setAttribute('id', 'submit-btn');
  bookSubmitBtn.style.display = 'block';
  bookSubmitBtn.style.padding = '10px';
  bookSubmitBtn.style.margin = '10px 0';
  formInputs.appendChild(bookSubmitBtn);
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.addEventListener('click', getNewData);
}











