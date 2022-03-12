import React, {useState, useEffect} from 'react';

const EditBook = (props) => {

    const [book, setBook] = useState(props.currentBook);

    useEffect(() => {
        setBook(props.currentBook)
    }, [props])

    const handleInput = (e) => {
        const {name, value} = e.target;
        setBook({ ...book, [name]:value })
    }

    const submitEditForm = (e) => {
        e.preventDefault();
        props.updateBook(book.id, book)
    }


    return(
        <form onSubmit={submitEditForm} className="text-light font-weight-bold">
            <div className="form-group">
            <label for="">Name</label>
            <input type="text" className="form-control" name="name" placeholder="Book name" value={book.name} onChange={handleInput}/>
            </div>
            <div className="form-group">
            <label for="">Author</label>
            <input type="text" className="form-control" name="author" placeholder="Author" value={book.author} onChange={handleInput} />
            </div>
            <div className="form-group">
            <label for="">categorie </label>
            <input type="text" className="form-control" name="categorie" placeholder="categorie" value={book.categorie} onChange={handleInput} />
            </div>
            <button className="btn btn-primary mr-4">Submit</button>
            <button 
                type="submit" 
                className="btn btn-warning"
                onClick={() => props.setEdit(false)}
            >
                Cancel
            </button>
        </form>
    )
}

export default EditBook;