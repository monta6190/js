import React, {useState} from 'react';

const Addbook = (props) => {

    const formState = {
         id:null, 
         name:'', 
         author:'', 
         categorie:''
        }
    const [book, setBook] = useState(formState);

    const handleInput = (e) => {
        const {name, value} = e.target;
        setBook({ ...book, [name]:value })
    }

    const submitBook = (e) => {
        e.preventDefault();
        if(!book.name || !book.author || !book.categorie) return
        props.addBook(book)
        setBook(formState)
    }

    return(
        <form onSubmit={submitBook} className="text-light font-weight-bold">
            <div class="form-group">
            <label for="">Name</label>
            <input type="text" class="form-control" name="name" placeholder="Book name" value={book.name} onChange={handleInput}/>
            </div>
            <div class="form-group">
            <label for="">Author</label>
            <input type="text" class="form-control" name="author" placeholder="Author" value={book.author} onChange={handleInput} />
            </div>
            <div class="form-group">
            <label for="">categorie </label>
            <input type="text" class="form-control" name="categorie" placeholder="categorie" value={book.categorie} onChange={handleInput} />
            </div>
            <button type="submit" class="btn btn-primary">Add Book</button>
        </form>
    )
}

export default Addbook;