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

	addBook(newBook) {
		if(!isInList(newBook))
			this.books.push(newBook)
	}

	removeBook(title) {
		this.books = this.books.filter( book => book.title != title)
	}

	getBook(title) {
		return this.books.find( book => book.title === title)
	}

	isInList(newBook){
		return this.books.some( book => book.title === newBook.title)
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

function openAddBookModal() {
	addBookForm.reset()
	addBookModal.classList.add('active')
	overlay.classList.add('active')
}

function closeAllModals() {
	addBookModal.classList.remove('active')
	overlay.classList.remove('active')
}



