// Book Structure

class Book {
	constructor(title, author, pages, isRead) {
		this.title = title || 'Unknown',
		this.author = author || 'Unknown',
		this.pages = pages || 0, 
		this.isRead = Boolean(isRead)
	}
}

class Library {
	constructor() {
		this.books = []
	}

	isInList(newBook){
		return this.books.some( book => book.title === newBook.title)
	}

	addBook(newBook) {
		if(!this.isInList(newBook))
			this.books.push(newBook)
	}

	removeBook(title) {
		this.books = this.books.filter( book => book.title != title)
	}

	getBook(title) {
		return this.books.find( book => book.title === title)
	}

	getAllBooks() {
		return this.books
	}
}

// UI 
const library = new Library()
const addBookBtn = document.querySelector('#addBookbtn')
const addBookModal = document.querySelector('#addBookModal')
const errMsg = document.querySelector('#errorMsg')
const overlay = document.querySelector('#overlay')
const addBookForm = document.querySelector('#addBookForm')
const bookList = document.querySelector('#bookList')


//addBookBtn.onclick = openAddBookModal
// overlay.onclick = closeModals

addBookBtn.addEventListener('click', openAddBookModal)
overlay.addEventListener('click', closeAllModals)
addBookForm.addEventListener('submit', addNewBook)

function openAddBookModal() {
	addBookForm.reset()
	addBookModal.classList.add('active')
	overlay.classList.add('active')
}

function closeAddBookModal() {
	addBookModal.classList.remove('active')
	overlay.classList.remove('active')
}

function closeAllModals() {
	closeAddBookModal()
}

function addNewBook(e) {
	e.preventDefault()
	const newBook = getBookFromUser()
	
	if (library.isInList(newBook)) {
		errMsg.textContent = 'This book already exists in Library'
		errMsg.classList.add('active')
		return
	} else {
		library.addBook(newBook)
		updateBookList()
	}

	closeAddBookModal()

}

function getBookFromUser() {
	const title = document.getElementById('title').value
	const author = document.getElementById('author').value
	const pages = document.getElementById('pages').value
	const isRead = document.getElementById('readBtn').checked
	return new Book(title, author, pages, isRead)
}

function updateBookList(){
	resetBookList()
	for (let book of library.books) {
		createBookCard(book)
	}
}

function resetBookList() {
	bookList.innerHTML = ''
}

function createBookCard (book) {
	const bookCard = document.createElement('div')
	const title = document.createElement('p')
	const author = document.createElement('p')
	const pages = document.createElement('p')
	const buttonGroup = document.createElement('div')
	const readBtn = document.createElement('button')
	const removeBtn = document.createElement('button')

	bookCard.classList.add('book-card')
	buttonGroup.classList.add('button-group')
	readBtn.classList.add('btn')
	removeBtn.classList.add('btn')
	readBtn.onclick = toggleRead
	removeBtn.onclick = removeBook

	title.textContent = `'${book.title}'`
	author.textContent = book.author
	pages.textContent = book.pages +' ' +((book.pages <= 1)? 'page': 'pages')
	removeBtn.textContent = 'Remove book'

	if (book.isRead) {
		readBtn.textContent = 'Read'
		readBtn.classList.add('btn-light-green')
	} else {
		readBtn.textContent = 'Not read'
		readBtn.classList.add('btn-light-grey')
	}

	bookCard.appendChild(title)
	bookCard.appendChild(author)
	bookCard.appendChild(pages)
	buttonGroup.appendChild(readBtn)
	buttonGroup.appendChild(removeBtn)
	bookCard.appendChild(buttonGroup)
	bookList.append(bookCard)
}



function toggleRead() {
	return
}

function removeBook() {
	return
}
