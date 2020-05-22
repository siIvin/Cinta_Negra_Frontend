import React, {useState, useContext, useEffect} from 'react';
import {AuthContext} from '../context/AuthContext';
import BookCard from '../components/BookCard'

const BookList = () =>{
    const {axiosInstance} = useContext(AuthContext);
    const [books, setBooks] = useState ([])
    const [text, setText]= useState('Cargando libros')
    const getBooks = () => axiosInstance.get('/api/v1/books');

    useEffect (()=>{
        getBooks()
        .then((response)=>{
            const books = response.data;
            setBooks (books);
            setText (`Hay ${books.length} libros disponibles`)
        })
        .catch(()=>setText('No hay libros disponibles'))
    }, [])

    return(
        <React.Fragment>
            <div className="dashboard">
                <div className="title">Libros</div>
                {books.map((book)=>{
                    return  <BookCard
                    key ={book._id}
                    author= {book.author}
                    title ={book.title}
                    pages = {book.pages}/>
                })}
            </div>
        </React.Fragment>
    );

}

export default BookList