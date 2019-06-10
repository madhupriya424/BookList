//Book class
class Book {
    title;
    author;
    isbn;

    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    static displayBooks() {
        const storeBooks = [
            {
                title: 'Book one',
                author: 'John doe',
                isbn: '56789'
            },

            {
                title: 'Book Two',
                author: 'Jane',
                isbn: '67990'
            }
        ];

        const books = storeBooks;

        books.forEach((book)=> UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        console.log(book);
    
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row); 
    }

    static clearFields(){
        // const title = document.querySelector('#title').value='';
        // const author = document.querySelector('#author').value='';
        // const isbn = document.querySelector('#isbn').value='';

        document.querySelector('#title').value='';
        document.querySelector('#author').value='';
        document.querySelector('#isbn').value='';

        // const book = new Book(title, author, isbn);
        // UI.addBookToList(book);
    }

    static deleteBook(e){
        if(e.classList.contains('delete')){
            e.parentElement.parentElement.remove();
        }
    }
}

//Display the book
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Add a book
document.querySelector('#book-form').addEventListener('submit', (e)=>{

    //Prevent submit deafult action
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //Instantiate book
    const book = new Book(title, author, isbn);
    //console.log(book);

    UI.addBookToList(book);

    UI.clearFields();
});


document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
});