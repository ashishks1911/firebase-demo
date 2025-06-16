import React, { useRef, useState } from 'react'
import { addDoc } from 'firebase/firestore'
import { collection } from 'firebase/firestore';
import { db } from '../../config/firebase';


const AddItem = () => {
  let title = useRef("");
  let description = useRef("");
  let author = useRef("");
  let price = useRef("");
  const [error, setErrorMessage] = useState("");

  const bookCollectionRef = collection(db, "books");
  console.log(price.current.value);

  const addBook = async () => {
    try{
      await addDoc(bookCollectionRef, {
        title : title.current.value,
        description : description.current.value,
        author : author.current.value,
        price : price.current.value
      })
    }catch(err){
      console.error(err);
    }
  }

  return (
    <div className=' d-flex container justify-content-center border p-5 w-50 mt-5'>
      <div className='row'>
        <h1>Enter Book Details</h1>
        <input type="text" className='form-control my-2' placeholder='Enter Book Title...' ref={title} />
        <input type="text" className='form-control my-2' placeholder='Enter Description...' ref={description} />
        <input type="text" className='form-control my-2' placeholder='Enter Author name...' ref={author} />
        <input type="number" className='form-control my-2' placeholder='Enter Price...' ref={price} />
        <button className='btn btn-primary' onClick={addBook}>Add Book</button>
      </div>

    </div>
  )
}

export default AddItem
