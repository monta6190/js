import React, {useState} from 'react';
import './index.css';
import Books from './Components/Books';
import Addbook from './Components/Addbook';

import EditBook from './Components/Editbook';

function App() {

  const bookData = [
    { id: 1, name: 'figma', author: 'Author1', catégorie: 'ui/ux'},
    { id: 2, name: 'flutter', author: 'Author 2', year: 'mobile'},
    { id: 2, name: 'angular', author: 'Author 3', year: 'web'}
  ]
  const formState = {id:null, name:'', author:'', catégorie:''}
  const [books, setBooks] = useState(bookData);
  const [edit, setEdit] = useState(false);
  const [currentBook, setCurrentBook] = useState(formState);

 
  const addBook = book => {
    book.id = books.length + 1;
    setBooks([...books, book]);
  }

  const editBook = book => {
    setEdit(true)
    setCurrentBook({ id:book.id, name:book.name, author:book.author, year:book.categorie })
  }
  const updateBook = (id, updatedBook) => {
    setEdit(false)
    setBooks(books.map(book => (book.id === id ? updatedBook : book )))
  }
  const deleteBook = id => {
    setEdit(false);
    setBooks(books.filter(book => book.id !== id))
  }



  return (
    <div className="container">
      <div className="header">
        <h1 style={{color:"red"}}>store</h1>
        <br/>
        <br/>
      </div>
      <div className="row library">
      <div className="col-sm-6 add-book">
        {edit ? (
          <div>
              <h2>Edit Book</h2>
              <EditBook 
                edit={edit}
                setEdit={setEdit}
                currentBook={currentBook}
                updateBook={updateBook}
              />
          </div>
        ) : (
          <div>
            <h1 className='styletext'  style={{color:"green"}}>Add A Book</h1>
              <Addbook
                addBook={addBook}
            />
          </div>
        )}
      </div>
      <div className="col-md-6">
        <h1>Available Books</h1>
          <Books
            books={books}
            editBook={editBook}
            deleteBook={deleteBook}
          />
      </div>
      </div>
    </div>
  );
}

export default App;
