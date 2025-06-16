import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebase';
import Card from '../Card';

const ListItem = () => {
  const [bookList, setBookList] = useState([]);

  const bookCollectionRef = collection(db, "books");

  useEffect(() => {
    const getBookList = async () => {
      try {
        const data = await getDocs(bookCollectionRef);
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setBookList(filteredData);
      } catch (err) {
        console.error(err);
      }
    }
    getBookList();

  }, []);

  return (
    <div className='d-flex container mt-5'>
      {
        bookList.map((book, index) => (
          <div key={index} className='mx-2'>
            <Card item={book} />
          </div>
        ))
      }
    </div>
  )
}

export default ListItem
