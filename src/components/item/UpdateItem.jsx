import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../../config/firebase';

const UpdateItem = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  const navigate = useNavigate();

  let title = useRef("");
  let description = useRef("");
  let author = useRef("");
  let price = useRef("");

  useEffect(() => {
    const fetchDoc = async () => {
      const docRef = doc(db, "books", id);
      const book = await getDoc(docRef);
      setBook(book.data());
    }
    fetchDoc();
  }, [])


  const updateMovie = async () => {
    const docRef = doc(db, "books", id);
    await updateDoc(docRef, {
      title: title.current.value,
      description: description.current.value,
      author: author.current.value,
      price: price.current.value
    })
    navigate("/admin");

  }

  return (
    <div className=' d-flex container justify-content-center border p-5 w-50 mt-5'>
      <div className='row'>
        <h1>Edit Book Details</h1>
        <input type="text" className='form-control my-2' defaultValue={book.title} ref={title} />
        <input type="text" className='form-control my-2' defaultValue={book.description} ref={description} />
        <input type="text" className='form-control my-2' defaultValue={book.author} ref={author} />
        <input type="number" className='form-control my-2' defaultValue={book.price} ref={price} />
        <button className='btn btn-primary' onClick={updateMovie}> Update Movie</button>
      </div>
    </div >
  )
}

export default UpdateItem
