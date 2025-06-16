import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

const View = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [bookList, setBookList] = useState([]);
  
  const navigate = useNavigate();


  const bookCollectionRef = collection(db, "books");

  const getBookList = async () => {
    try {
      const data = await getDocs(bookCollectionRef);
      const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setBookList(filteredData);
    } catch (err) {
      setErrorMessage(err.message);
      setTimeout(()=>{
        setErrorMessage("");
      }, 3000);
      console.error(err);
    }
  }

  useEffect(() => {
    getBookList();
  }, []);

  const deleteBook = async (id) => {
    try {
      const book = doc(db, "books", id);
      console.log(book);
      await deleteDoc(book);
      getBookList();

    } catch (error) {
      console.error(error);
    }
  }

  const updateMovie = (id) => {
    try{
      navigate(`/edit/${id}`);
    }catch(er){
      console.log("hihi");
    }
  }

  return (
    <>    
    {
      errorMessage ?
      <div className="alert alert-danger" role="alert">
        {errorMessage}
      </div> : ""
    }
      <div className='container mt-5'>
        <table className='table w-75 mx-auto'>
          <thead>
            <tr>
              <th>Index</th>
              <th>Title</th>
              <th>Author</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              bookList.map((book, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.price}</td>
                  <td><button className='btn btn-info' onClick={() => updateMovie(book.id)}>Edit</button> <button className='btn btn-danger' onClick={() => deleteBook(book.id)}>Delete</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default View
